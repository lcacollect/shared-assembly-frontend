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
import { useDeleteProjectAssembliesMutation, GraphQlProjectAssembly } from '../../dataAccess'

interface AssemblyDeleteDialogProps {
  openDialog: boolean
  handleDialogClose: () => void
  refetchAssemblies: () => void
  assembly: GraphQlProjectAssembly | null
  setSelectedAssembly: Dispatch<SetStateAction<GraphQlProjectAssembly | null>>
  isMemberOfProject: boolean | undefined
}

export const AssemblyDeleteDialog: React.FC<AssemblyDeleteDialogProps> = (props) => {
  const { openDialog, handleDialogClose, refetchAssemblies, assembly, setSelectedAssembly, isMemberOfProject } = props

  const [snackbar, setSnackbar] = useState<Pick<AlertProps, 'children' | 'severity'> | null>(null)

  const [deleteAssembliesMutation] = useDeleteProjectAssembliesMutation()

  const deleteAssembly = async (assembly: GraphQlProjectAssembly) => {
    const response = await deleteAssembliesMutation({
      variables: {
        ids: [assembly.id],
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
          Are you sure you want to delete &apos;{assembly?.name}&apos; assembly?
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
                  deleteAssembly(assembly as GraphQlProjectAssembly)
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
