import { LcaButton } from '@lcacollect/components'
import {
  Alert,
  AlertProps,
  Box,
  Dialog,
  DialogActions,
  DialogTitle,
  Snackbar,
  Typography,
  Tooltip,
} from '@mui/material'
import React, { useState, Dispatch, SetStateAction } from 'react'
import { useDeleteAssemblyMutation, GraphQlAssembly } from '../../dataAccess'

interface AssemblyDeleteDialogProps {
  openDialog: boolean
  handleDialogClose: () => void
  projectId: string
  refetchAssemblies: () => void
  assembly: GraphQlAssembly | null
  setSelectedAssembly: Dispatch<SetStateAction<GraphQlAssembly | null>>
  isMemberOfProject: boolean | undefined
}

export const AssemblyDeleteDialog: React.FC<AssemblyDeleteDialogProps> = (props) => {
  const {
    openDialog,
    handleDialogClose,
    projectId,
    refetchAssemblies,
    assembly,
    setSelectedAssembly,
    isMemberOfProject,
  } = props

  const [snackbar, setSnackbar] = useState<Pick<AlertProps, 'children' | 'severity'> | null>(null)

  const [deleteAssemblyMutation] = useDeleteAssemblyMutation()

  const deleteAssembly = async (assembly: GraphQlAssembly) => {
    const response = await deleteAssemblyMutation({
      variables: {
        id: assembly.id,
      },
    })
    if (response?.errors) {
      response.errors.forEach((error) => console.error(error))
      setSnackbar({ children: response.errors[0].message, severity: 'error' })
    } else {
      setSelectedAssembly(null)
      handleDialogClose()
      setSnackbar({ children: 'Assembly deleted!', severity: 'success' })
      refetchAssemblies()
    }
  }

  return (
    <>
      <Dialog
        data-testid='assembly-delete-dialog'
        open={openDialog}
        onClose={handleDialogClose}
        maxWidth={'xl'}
        PaperProps={{ sx: { borderRadius: 5, paddingX: 3, paddingY: 3 } }}
      >
        <DialogTitle sx={{ display: 'flex' }} variant='h3'>
          Are you sure you want to delete assembly?
        </DialogTitle>
        <DialogActions sx={{ paddingX: 3 }}>
          <LcaButton onClick={handleDialogClose} data-testid='cancel-project-source-button'>
            <Typography>Cancel</Typography>
          </LcaButton>
          <Tooltip placement='top-end' title={!isMemberOfProject ? 'Only project members can add assembly' : ''}>
            <Box sx={{ ml: 1 }}>
              <LcaButton
                disabled={!isMemberOfProject}
                onClick={() => {
                  deleteAssembly(assembly as GraphQlAssembly)
                }}
                data-testid='add-project-assembly-button'
              >
                <Typography>Delete</Typography>
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
