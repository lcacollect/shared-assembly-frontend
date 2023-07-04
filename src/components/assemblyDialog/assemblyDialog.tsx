import { CardTitle, LcaButton } from '@lcacollect/components'
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
import { useGetAccountQuery, useGetProjectMembersQuery, useAddAssemblyMutation } from '../../dataAccess'
import { AssemblyForm } from './assemblyForm'

interface AssemblyDialogProps {
  openDialog: boolean
  handleDialogClose: () => void
  projectId: string
  refetchAssemblies: () => void
}

export const AssemblyDialog: React.FC<AssemblyDialogProps> = (props) => {
  const { openDialog, handleDialogClose, projectId, refetchAssemblies } = props
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [lifeTime, setLifeTime] = useState(50)
  const [metaFields, setMetaFields] = useState('')
  const [conversionFactor, setConversionFactor] = useState(1)
  const [formError, setFormError] = useState(false)
  const [isMemberOfProject, setIsMemberOfProject] = useState<boolean>()
  const [snackbar, setSnackbar] = useState<Pick<AlertProps, 'children' | 'severity'> | null>(null)

  const { data: accountData } = useGetAccountQuery()
  const { data: projectMemberData } = useGetProjectMembersQuery({
    variables: {
      projectId: projectId as string,
    },
    skip: !projectId,
  })

  const [addAssemblyMutation] = useAddAssemblyMutation()

  useEffect(() => {
    if (accountData && projectMemberData) {
      const isMemberOfProject = projectMemberData?.projectMembers.find(
        (member) => member.userId === accountData?.account.id,
      )
      setIsMemberOfProject(!!isMemberOfProject)
    }
  }, [accountData, projectMemberData])

  const handleDialogAdd = async () => {
    if (formError) {
      return
    }

    const response = await addAssemblyMutation({
      variables: {
        projectId: projectId as string,
        name: name,
        category: category,
        description: description,
        lifeTime: lifeTime,
        metaFields: metaFields,
        conversionFactor: conversionFactor,
      },
    })

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
    setName('')
    setCategory('')
    setDescription('')
    setConversionFactor(1)
    setLifeTime(50)
    setMetaFields('')
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
        <DialogTitle sx={{ display: 'flex' }}>
          <CardTitle title='Add Assembly' size='medium' />
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
                <Typography>Add</Typography>
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
