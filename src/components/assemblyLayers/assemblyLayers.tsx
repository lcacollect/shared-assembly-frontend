import {
  DataGridPro,
  GridActionsCellItem,
  GridColumns,
  GridEditSingleSelectCellProps,
  GridEventListener,
  GridRowId,
  GridRowModel,
  GridRowModes,
  GridRowModesModel,
  GridRowParams,
  GridValueGetterParams,
  GridValueSetterParams,
  MuiEvent,
  useGridApiContext,
} from '@mui/x-data-grid-pro'
import { Alert, AlertProps, Autocomplete, Box, LinearProgress, Snackbar, SxProps, TextField } from '@mui/material'
import { NoRowsOverlay } from '@lcacollect/components'
import { SyntheticEvent, useCallback, useEffect, useMemo, useState } from 'react'
import {
  GraphQlProjectAssembly,
  GraphQlProjectEpd,
  useAddProjectAssemblyLayersMutation,
  useDeleteProjectAssemblyLayersMutation,
  useUpdateProjectAssemblyLayersMutation,
} from '../../dataAccess'
import { getDifference } from '@lcacollect/core'
import { EditTextArea } from '../assemblyDetail/multilineTextEdit'
import SaveIcon from '@mui/icons-material/Save'
import CancelIcon from '@mui/icons-material/Cancel'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { AssemblyLayerToolbar } from './assemblyLayerToolbar'

interface AssemblyLayersProps {
  loading: boolean
  assembly: AssemblyForAssemblyLayers | null
  isMemberOfProject: boolean
  isTransportStage: boolean
  epds: EpdForAssemblyLayer[]
  transportEpds?: TransportEpd[]
  sx?: SxProps
  addMutation?: any
  updateMutation?: any
  deleteMutation?: any
}

export type EpdForAssemblyLayer = Pick<GraphQlProjectEpd, 'id' | 'name' | 'declaredUnit' | 'referenceServiceLife'>
export type TransportEpd = Pick<GraphQlProjectEpd, 'id' | 'name' | 'declaredUnit'>
export type AssemblyForAssemblyLayers = Pick<GraphQlProjectAssembly, 'layers' | 'id' | 'unit'>

interface AssemblyLayer {
  id: string
  name: string
  conversion: string
  conversionFactor: number
  epdId: string
  referenceServiceLife: number | null
  description: string
  transportEpd: {
    id: string
    name: string
    declaredUnit: string
  }
  transportConversionFactor: number
  transportDistance: number | null
}

export const AssemblyLayers = (props: AssemblyLayersProps) => {
  const {
    loading,
    assembly,
    isMemberOfProject,
    isTransportStage,
    sx,
    epds,
    transportEpds = [],
    addMutation = useAddProjectAssemblyLayersMutation,
    updateMutation = useUpdateProjectAssemblyLayersMutation,
    deleteMutation = useDeleteProjectAssemblyLayersMutation,
  } = props
  const [rows, setRows] = useState<GridRowModel<AssemblyLayer[]>>([])
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({})
  const [snackbar, setSnackbar] = useState<Pick<AlertProps, 'children' | 'severity'> | null>(null)

  const [addAssemblyLayer] = addMutation()
  const [updateAssemblyLayer] = updateMutation()
  const [deleteAssemblyLayer] = deleteMutation()

  useEffect(() => {
    if (assembly && assembly.layers) setRows(assembly.layers as unknown as AssemblyLayer[])
  }, [assembly])

  const handleAddRow = () => {
    if (rows.find((row) => row.id === '' && row.name === '')) {
      setSnackbar({ children: 'You can only add 1 row at a time', severity: 'info' })
      return
    }

    setRows((oldRows) => [
      ...oldRows,
      {
        id: '',
        name: '',
        conversion: '',
        conversionFactor: 1,
        epdId: '',
        referenceServiceLife: null,
        description: '',
        transportEpd: { id: '', name: '', declaredUnit: '' },
        transportDistance: null,
        transportConversionFactor: 1.0,
      } as AssemblyLayer,
    ])
    setRowModesModel((oldModel) => ({
      ...oldModel,
      '': { mode: GridRowModes.Edit, fieldToFocus: 'name' },
    }))
  }

  const handleEditClick = useCallback(
    (id: GridRowId) => () => {
      setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } })
    },
    [rowModesModel],
  )

  const handleSaveClick = useCallback(
    (id: GridRowId) => () => {
      setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } })
    },
    [rowModesModel],
  )

  const handleDeleteClick = useCallback(
    (id: GridRowId) => async () => {
      setRows(rows?.filter((row: GridRowModel) => row.id !== id))
      const { errors } = await deleteAssemblyLayer({
        variables: {
          id: assembly?.id as string,
          layers: [id as string],
        },
      })
      if (errors) {
        errors.forEach((error: { message: string }) => {
          console.error(error)
          setSnackbar({ children: error.message, severity: 'error' })
        })
      }
    },
    [rows],
  )

  const handleCancelClick = useCallback(
    (id: GridRowId) => async () => {
      if (id === '') {
        setRows(rows?.filter((row: GridRowModel) => row.id !== id))
        return
      }
      setRowModesModel({
        ...rowModesModel,
        [id]: { mode: GridRowModes.View, ignoreModifications: true },
      })
    },
    [rowModesModel, rows],
  )

  const processRowUpdate = async (newRow: GridRowModel, oldRow: GridRowModel) => {
    if (newRow.id === '') {
      return await saveRow(newRow as AssemblyLayer)
    }
    return await updateRow(newRow as AssemblyLayer, oldRow)
  }

  const saveRow = async (newRow: AssemblyLayer) => {
    if (!newRow.epdId) {
      setSnackbar({ children: 'You must select EPD', severity: 'error' })
      setRows(rows?.filter((row: GridRowModel) => row.id !== ''))
      return newRow
    }

    const { errors, data } = await addAssemblyLayer({
      variables: {
        id: assembly?.id as string,
        layers: [
          {
            id: newRow.id,
            name: newRow.name,
            conversionFactor: newRow.conversionFactor,
            epdId: newRow.epdId,
            referenceServiceLife: newRow.referenceServiceLife,
            description: newRow.description,
            transportEpdId: newRow.transportEpd.id,
            transportDistance: newRow.transportDistance,
            transportConversionFactor: newRow.transportConversionFactor,
          },
        ],
      },
    })
    if (errors) {
      throw new Error(errors[0].message)
    } else {
      let addedRow = {}
      let layerId = ''
      // eslint-disable-next-line no-prototype-builtins
      if (data.hasOwnProperty('addProjectAssemblyLayers')) {
        layerId = data?.addProjectAssemblyLayers[0].id as string
        addedRow = { ...newRow, id: layerId }
        // eslint-disable-next-line no-prototype-builtins
      } else if (data.hasOwnProperty('addAssemblyLayers')) {
        layerId = data?.addAssemblyLayers[0].id as string
        addedRow = { ...newRow, id: layerId }
      } else {
        throw new Error(`No return data when adding assembly layer: ${data}`)
      }

      setRows((rows) => rows.map((row) => (row.id == '' ? (addedRow as AssemblyLayer) : row)))
      const newRowModes = {
        ...rowModesModel,
        [layerId]: { mode: GridRowModes.View },
      }
      delete newRowModes['']
      setRowModesModel(newRowModes)
      return addedRow
    }
  }

  const updateRow = async (newRow: AssemblyLayer, oldRow: GridRowModel) => {
    if (!newRow.epdId) {
      setSnackbar({ children: 'You must select EPD', severity: 'error' })
      return oldRow
    }

    const changeObject = getDifference(oldRow, newRow)
    delete changeObject.conversion
    delete changeObject.transportEpd

    const { errors } = await updateAssemblyLayer({
      variables: {
        id: assembly?.id as string,
        layers: [
          {
            ...changeObject,
            id: oldRow.id,
            epdId: newRow.epdId,
            transportEpdId: newRow.transportEpd.id,
          },
        ],
      },
    })
    if (errors) {
      throw new Error(errors[0].message)
    } else {
      const updatedRow = { ...newRow }
      setRows((rows) => rows.map((row) => (row.id === updatedRow.id ? updatedRow : row)))
      const newRowModes = {
        ...rowModesModel,
        [newRow.id]: { mode: GridRowModes.View },
      }
      delete newRowModes['']
      setRowModesModel(newRowModes)
      return updatedRow
    }
  }

  const handleRowEditStart = (params: GridRowParams, event: MuiEvent<SyntheticEvent>) => {
    event.defaultMuiPrevented = true
  }

  const handleRowEditStop: GridEventListener<'rowEditStop'> = (params, event) => {
    event.defaultMuiPrevented = true
  }

  const handleProcessRowUpdateError = useCallback((error: Error) => {
    console.error(error)
    setSnackbar({ children: error.message, severity: 'error' })
  }, [])

  const CustomTypeEditComponent = (props: GridEditSingleSelectCellProps) => {
    const [search, setSearch] = useState(props.valueLabel || '')
    const apiRef = useGridApiContext()

    const handleValueChange = async (
      event: MuiEvent<SyntheticEvent>,
      value: {
        value: string
        label: string
      } | null,
    ) => {
      const epd = epds.find((epd) => epd.id === value?.value)

      await apiRef.current.setEditCellValue({
        id: props.id,
        field: 'epdId',
        value: epd?.id,
      })
      await apiRef.current.setEditCellValue({
        id: props.id,
        field: 'conversion',
        value: `${epd?.declaredUnit || ''}/${assembly?.unit || ''}`,
      })
      await apiRef.current.setEditCellValue({
        id: props.id,
        field: 'referenceServiceLife',
        value: epd?.referenceServiceLife,
      })
    }

    const epdName = useMemo(() => epds.find((epd) => epd.id === props.value)?.name || '', [props.value])

    return (
      <Autocomplete
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        value={epdName}
        inputValue={search}
        onInputChange={(event, newInputValue) => {
          setSearch(newInputValue)
        }}
        id='EPD box'
        options={epds.map((epd) => ({ value: epd.id, label: epd.name }))}
        fullWidth
        onChange={handleValueChange}
        renderInput={(params) => <TextField {...params} label='EPD' sx={{ marginTop: 1 }} />}
      />
    )
  }

  const columns: GridColumns = [
    { field: 'id', headerName: 'ID', flex: 0.5, editable: false },
    { field: 'name', headerName: 'Part', flex: 1, editable: true },
    {
      field: 'conversionFactor',
      headerName: 'Quantity',
      flex: 0.5,
      type: 'number',
      editable: true,
    },
    {
      field: 'conversion',
      headerName: 'Conversion',
      flex: 1,
      editable: true,
      valueGetter: (params) => {
        const epd = epds.find((epd) => epd.id == params.row.epdId)
        return `${epd?.declaredUnit || ''}/${assembly?.unit || ''}`
      },
    },
    {
      field: 'epdId',
      headerName: 'Environmental Data',
      editable: true,
      flex: 2,
      renderEditCell: (params) => (
        <CustomTypeEditComponent {...params} valueLabel={epds.find((epd) => epd.id == params.value)?.name} />
      ),
      valueFormatter: (params) => {
        return epds.find((epd) => epd.id == params.value)?.name
      },
    },
    {
      field: 'referenceServiceLife',
      headerName: 'RSL',
      flex: 0.5,
      editable: true,
      type: 'number',
    },
    {
      field: 'description',
      headerName: 'Description',
      flex: 1.5,
      editable: true,
      type: 'string',
      renderEditCell: (params) => <EditTextArea {...params} />,
    },
    {
      field: 'transportEpd.id',
      headerName: 'Transport Type',
      flex: 1.0,
      editable: true,
      type: 'singleSelect',
      valueOptions: transportEpds.map((epd) => ({ value: epd.id, label: epd.name })),
      valueGetter: (params: GridValueGetterParams) => params.row.transportEpd?.id,
      valueFormatter: (params) => transportEpds.find((epd) => epd.id === params.value)?.name,
      valueSetter: (params: GridValueSetterParams) => {
        const epd = transportEpds.find((epd) => epd.id === params.value)
        return {
          ...params.row,
          transportEpd: {
            ...params.row.transportEpd,
            id: params.value,
            name: epd?.name,
            declaredUnit: epd?.declaredUnit,
          },
        }
      },
    },
    {
      field: 'transportDistance',
      headerName: 'Transport Length',
      flex: 0.7,
      editable: true,
      type: 'number',
      valueFormatter: (params) => {
        return (params.value || '0') + ' km'
      },
    },
    {
      field: 'transportEpd.declaredUnit',
      headerName: 'Transport Unit',
      flex: 0.5,
      editable: false,
      type: 'string',
      valueGetter: (params) => (params.row.transportEpd ? params.row.transportEpd.declaredUnit : ''),
    },
    {
      field: 'transportConversionFactor',
      headerName: 'Transport Conversion Factor',
      flex: 0.5,
      editable: true,
      type: 'number',
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      flex: 1,
      cellClassName: 'actions',
      getActions: ({ id }: { id: GridRowId }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              key={0}
              icon={<SaveIcon />}
              label='Save'
              onClick={handleSaveClick(id)}
              data-testid='layer-save'
            />,
            <GridActionsCellItem
              key={1}
              icon={<CancelIcon />}
              label='Cancel'
              className='textPrimary'
              onClick={handleCancelClick(id)}
              color='inherit'
              disabled={!isMemberOfProject}
              data-testid='layer-cancel'
            />,
          ]
        }

        return [
          <GridActionsCellItem
            key={2}
            icon={<EditIcon />}
            label='Edit'
            className='textPrimary'
            onClick={handleEditClick(id)}
            color='inherit'
            disabled={!isMemberOfProject}
            data-testid='layer-edit'
          />,
          <GridActionsCellItem
            key={3}
            icon={<DeleteIcon />}
            label='Delete'
            onClick={handleDeleteClick(id)}
            color='inherit'
            disabled={!isMemberOfProject}
            data-testid='layer-delete'
          />,
        ]
      },
    },
  ]
  return (
    <Box sx={sx}>
      <DataGridPro
        autoHeight={true}
        columns={columns}
        rows={rows}
        editMode='row'
        loading={loading}
        components={{ Toolbar: AssemblyLayerToolbar, LoadingOverlay: LinearProgress, NoRowsOverlay: NoRowsOverlay }}
        componentsProps={{
          toolbar: { handleAddRow, isMemberOfProject },
          noRowsOverlay: { text: 'No assembly layers added!' },
        }}
        columnVisibilityModel={{
          id: false,
          'transportEpd.declaredUnit': isTransportStage,
          transportDistance: isTransportStage,
          transportConversionFactor: isTransportStage,
          'transportEpd.id': isTransportStage,
        }}
        experimentalFeatures={{ newEditingApi: true }}
        onRowEditStart={handleRowEditStart}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        rowModesModel={rowModesModel}
        sx={{ border: 0 }}
        onProcessRowUpdateError={handleProcessRowUpdateError}
        getRowHeight={(params) => (rowModesModel[params.id]?.mode === GridRowModes.Edit ? 'auto' : null)}
      />
      <Snackbar
        open={!!snackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={() => setSnackbar(null)}
        autoHideDuration={6000}
      >
        <Alert {...snackbar} onClose={() => setSnackbar(null)} />
      </Snackbar>
    </Box>
  )
}
