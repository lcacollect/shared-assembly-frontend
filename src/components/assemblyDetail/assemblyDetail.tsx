import {
  DataGridPro,
  GridActionsCellItem,
  GridColumns,
  GridEventListener,
  GridRowId,
  GridRowModel,
  GridRowModes,
  GridRowModesModel,
  GridRowParams,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarFilterButton,
  MuiEvent,
  GridEditSingleSelectCell,
  GridEditSingleSelectCellProps,
  useGridApiContext,
} from '@mui/x-data-grid-pro'
import { useState, useEffect, useCallback, SyntheticEvent } from 'react'
import {
  GraphQlAssembly,
  useGetProjectEpdsQuery,
  useAddAssemblyLayersMutation,
  useUpdateAssemblyLayersMutation,
  useDeleteAssemblyLayersMutation,
} from '../../dataAccess'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import SaveIcon from '@mui/icons-material/Save'
import CancelIcon from '@mui/icons-material/Cancel'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import { AlertProps, IconButton, LinearProgress, Tooltip, Typography } from '@mui/material'
import { EditTextArea } from './multilineTextEdit'
import { NoRowsOverlay } from '@lcacollect/components'
import { getDifference } from '@lcacollect/core'

interface AssemblyDetailProps {
  projectId: string | null
  assembly: GraphQlAssembly | null
  isMemberOfProject: boolean | undefined
}

interface AssemblyLayer {
  id: string
  name: string
  conversion: string
  conversionFactor: number
  epdId: string
  referenceServiceLife: number | null
  description: string
}

export const AssemblyDetail = (props: AssemblyDetailProps) => {
  const { assembly, projectId, isMemberOfProject } = props

  const [rows, setRows] = useState<GridRowModel<AssemblyLayer[]>>([])
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({})
  const [snackbar, setSnackbar] = useState<Pick<AlertProps, 'children' | 'severity'> | null>(null)

  const [addAssemblyLayer] = useAddAssemblyLayersMutation()
  const [updateAssemblyLayer] = useUpdateAssemblyLayersMutation()
  const [deleteAssemblyLayer] = useDeleteAssemblyLayersMutation()

  const {
    data: epdsData,
    loading,
    error,
  } = useGetProjectEpdsQuery({
    variables: { projectId: projectId as string },
    skip: !projectId,
  })
  const projectEpds = epdsData?.projectEpds || []

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
          layers: [
            {
              id: id as string,
            },
          ],
        },
      })
      if (errors) {
        errors.forEach((error) => console.error(error))
        setSnackbar({ children: errors[0].message, severity: 'error' })
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
          },
        ],
      },
    })
    if (errors) {
      throw new Error(errors[0].message)
    }
    let addedRow = {}
    let layerId = ''
    if (data?.addAssemblyLayers?.length) {
      layerId = data?.addAssemblyLayers[0].id as string
      addedRow = { ...newRow, id: layerId }
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

  const updateRow = async (newRow: AssemblyLayer, oldRow: GridRowModel) => {
    const changeObject = getDifference(oldRow, newRow)

    const { errors, data } = await updateAssemblyLayer({
      variables: {
        id: assembly?.id as string,
        layers: [
          {
            ...changeObject,
            id: oldRow.id,
          },
        ],
      },
    })
    if (errors) {
      throw new Error(errors[0].message)
    }

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
    const apiRef = useGridApiContext()

    const handleValueChange = async (event: any) => {
      const epd = projectEpds.find((epd) => epd.id === event.target.value)
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

    return <GridEditSingleSelectCell onValueChange={handleValueChange} {...props} />
  }

  const columns: GridColumns = [
    { field: 'id', headerName: 'ID', flex: 0.5, editable: false, hide: true },
    { field: 'name', headerName: 'Part', flex: 1, editable: true },
    {
      field: 'conversion',
      headerName: 'Conversion',
      flex: 1,
      editable: true,
      valueGetter: (params) => {
        const epd = projectEpds.find((epd) => epd.id == params.row.epdId)
        return `${epd?.declaredUnit || ''}/${assembly?.unit || ''}`
      },
    },
    {
      field: 'conversionFactor',
      headerName: 'Factor',
      flex: 0.5,
      type: 'number',
      editable: true,
    },
    {
      field: 'epdId',
      headerName: 'Environmental Data',
      editable: true,
      flex: 2,
      type: 'singleSelect',
      valueOptions: projectEpds.map((epd) => ({ value: epd.id, label: epd.name })),
      renderEditCell: (params) => <CustomTypeEditComponent {...params} />,
      valueFormatter: (params) => {
        return projectEpds.find((epd) => epd.id == params.value)?.name
      },
    },
    {
      field: 'referenceServiceLife',
      headerName: 'RSL',
      flex: 0.7,
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

  return assembly ? (
    <>
      <Typography variant='h4'>{assembly.name}</Typography>
      <Typography variant='h6' sx={{ fontSize: '1rem', marginBottom: '10px' }}>
        category: <b>{assembly.category}</b>&nbsp;&nbsp; description: <b>{assembly.description}</b>&nbsp;&nbsp; life
        time: <b>{assembly.lifeTime}</b>&nbsp;&nbsp; conversion factor: <b>{assembly.conversionFactor}</b>&nbsp;&nbsp;
      </Typography>
      <DataGridPro
        autoHeight={true}
        columns={columns}
        rows={rows}
        editMode='row'
        loading={loading}
        components={{ Toolbar: ElementToolbar, LoadingOverlay: LinearProgress, NoRowsOverlay: NoRowsOverlay }}
        componentsProps={{
          toolbar: { handleAddRow, isMemberOfProject },
          noRowsOverlay: { text: 'No assembly layers added!' },
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
    </>
  ) : null
}

interface ElementToolbarProps {
  handleAddRow: () => void
  isMemberOfProject: boolean | undefined
}

const ElementToolbar = ({ handleAddRow, isMemberOfProject }: ElementToolbarProps) => {
  const color = 'black'
  const fontWeight = 'bold'

  return (
    <GridToolbarContainer data-testid='table-toolbar'>
      <GridToolbarColumnsButton
        sx={{
          color,
          fontWeight,
        }}
      />
      <Tooltip title='Add new assembly layer'>
        <IconButton
          aria-label='addSource'
          onClick={handleAddRow}
          sx={{ color }}
          disabled={!isMemberOfProject}
          data-testid='layer-add'
        >
          <AddCircleOutlineOutlinedIcon />
        </IconButton>
      </Tooltip>
    </GridToolbarContainer>
  )
}
