import { LcaButton } from '@lcacollect/components'
import {
  Alert,
  AlertProps,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Snackbar,
  Tooltip,
  Typography,
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import {
  useAddAssemblyMutation,
  useUpdateAssemblyMutation,
  AssemblyUnit,
  GraphQlAssembly,
} from '../../dataAccess'
import { AssemblyForm } from './assemblyForm'

interface AssemblyDialogProps {
  openDialog: boolean
  handleDialogClose: () => void
  projectId: string
  refetchAssemblies: () => void
  assembly: GraphQlAssembly | null
  isMemberOfProject: boolean | undefined
}

export const AssemblyDialog: React.FC<AssemblyDialogProps> = (props) => {
  const { openDialog, handleDialogClose, projectId, refetchAssemblies, assembly, isMemberOfProject } = props

  const [name, setName] = useState<string>('')
  const [category, setCategory] = useState<string | null | undefined>('')
  const [description, setDescription] = useState<string | null | undefined>('')
  const [lifeTime, setLifeTime] = useState<number>(50)
  const [unit, setUnit] = useState<AssemblyUnit | null | undefined>(AssemblyUnit.M2)
  const [metaFields, setMetaFields] = useState<string>('')
  const [conversionFactor, setConversionFactor] = useState<number>(1)
  const [formError, setFormError] = useState<boolean>(false)
  const [snackbar, setSnackbar] = useState<Pick<AlertProps, 'children' | 'severity'> | null>(null)

  const [addAssemblyMutation] = useAddAssemblyMutation()
  const [updateAssemblyMutation] = useUpdateAssemblyMutation()

  useEffect(() => {
    if (assembly) {
      setName(assembly.name)
      setCategory(assembly.category)
      setDescription(assembly.description)
      setConversionFactor(assembly.conversionFactor)
      setLifeTime(assembly.lifeTime)
      setUnit(assembly.unit)
      // const metaFields = ''
      // if (assembly.metaFields){
      //   metaFields = JSON.stringify(assembly.metaFields)
      // }
      // setMetaFields(metaFields)
    } else {
      cleanFormFields()
    }
  }, [assembly])

  const cleanFormFields = () => {
    setName('')
    setCategory('')
    setDescription('')
    setConversionFactor(1)
    setLifeTime(50)
    setMetaFields('')
    setUnit(AssemblyUnit.M2)
  }

  const handleDialogAdd = async () => {
    if (formError) {
      return
    }

    let metaFieldsJSON = ''
    if (metaFields) {
      metaFieldsJSON = JSON.parse(metaFields)
    }

    let response
    if (assembly) {
      response = await updateAssemblyMutation({
        variables: {
          id: assembly.id,
          name: name,
          category: category as string,
          description: description,
          lifeTime: lifeTime,
          unit: unit as AssemblyUnit,
          metaFields: metaFieldsJSON,
          conversionFactor: conversionFactor,
        },
      })
    } else {
      response = await addAssemblyMutation({
        variables: {
          projectId: projectId as string,
          name: name,
          category: category as string,
          description: description,
          lifeTime: lifeTime,
          unit: unit as AssemblyUnit,
          metaFields: metaFieldsJSON,
          conversionFactor: conversionFactor,
        },
      })
    }

    if (response?.errors) {
      response.errors.forEach((error) => console.error(error))
      setSnackbar({ children: response.errors[0].message, severity: 'error' })
    } else {
      handleClose()
      setSnackbar({ children: 'Assembly saved!', severity: 'success' })
      refetchAssemblies()
    }
  }

  const handleClose = () => {
    cleanFormFields()
    setFormError(false)
    handleDialogClose()
  }

  return (
    <>
      <Dialog
        data-testid='assembly-dialog'
        open={openDialog}
        onClose={handleDialogClose}
        maxWidth={'xl'}
        PaperProps={{ sx: { borderRadius: 5, paddingX: 3, paddingY: 3 } }}
      >
        <DialogTitle sx={{ display: 'flex' }} variant='h3'>
          {assembly ? 'Edit assembly' : 'Add Assembly'}
        </DialogTitle>
        <DialogContent>
          <AssemblyForm
            name={name}
            setName={setName}
            category={category}
            setCategory={setCategory}
            description={description}
            setDescription={setDescription}
            lifeTime={lifeTime}
            setLifeTime={setLifeTime}
            metaFields={metaFields}
            setMetaFields={setMetaFields}
            conversionFactor={conversionFactor}
            setConversionFactor={setConversionFactor}
            unit={unit as AssemblyUnit}
            setUnit={setUnit}
            error={formError}
            setError={setFormError}
          />
        </DialogContent>
        <DialogActions sx={{ paddingX: 3 }}>
          <LcaButton onClick={handleClose} data-testid='cancel-project-source-button'>
            <Typography>Cancel</Typography>
          </LcaButton>
          <Tooltip
            placement='top-end'
            title={
              !name || !category
                ? 'Add name and category to save assembly'
                : !isMemberOfProject
                ? 'Only project members can add assembly'
                : ''
            }
          >
            <Box sx={{ ml: 1 }}>
              <LcaButton
                disabled={!name || !category || !isMemberOfProject}
                onClick={handleDialogAdd}
                data-testid='add-project-assembly-button'
              >
                <Typography>{assembly ? 'Save' : 'Add'}</Typography>
              </LcaButton>
            </Box>
          </Tooltip>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={!!snackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={() => setSnackbar(null)}
        sx={{ top: '10% !important' }}
        autoHideDuration={1000}
        data-testid='alert-snackbar'
      >
        <Alert {...snackbar} variant='filled' />
      </Snackbar>
    </>
  )
}
