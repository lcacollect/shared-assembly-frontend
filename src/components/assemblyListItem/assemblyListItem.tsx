import { Dispatch, SetStateAction, useState } from 'react'
import { GraphQlProjectAssembly } from '../../dataAccess'
import EditOutlined from '@mui/icons-material/EditOutlined'
import DeleteOutlined from '@mui/icons-material/DeleteOutlined'
import { AssemblyDeleteDialog } from '../../components'
import { Box, IconButton, Typography } from '@mui/material'

interface AssemblyListItemProps {
  assembly: GraphQlProjectAssembly
  handleEditAssembly: () => void
  setSelectedAssembly: Dispatch<SetStateAction<GraphQlProjectAssembly | null>>
  refetchAssemblies: () => void
  selectedAssembly: GraphQlProjectAssembly | null | undefined
  isMemberOfProject: boolean | undefined
}

export const AssemblyListItem = (props: AssemblyListItemProps) => {
  const { assembly, handleEditAssembly, setSelectedAssembly, refetchAssemblies, selectedAssembly, isMemberOfProject } =
    props

  const [openAssemblyDialog, setOpenAssemblyDialog] = useState<boolean>(false)

  const handleAssemblyDialogClose = () => {
    setOpenAssemblyDialog(false)
  }

  const handleOpenDialog = () => {
    setOpenAssemblyDialog(true)
  }

  const isActive = assembly.id == selectedAssembly?.id

  return (
    <>
      <Box
        onClick={() => setSelectedAssembly(assembly)}
        sx={{
          boxShadow:
            '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
          borderRadius: '5px',
          margin: '20px',
          padding: '5px',
          marginTop: '4px',
          marginBottom: '4px',
          backgroundColor: isActive ? 'rgba(151, 166, 180, 0.04)' : '#FFFFFF',
          color: 'rgba(0, 0, 0, 0.87)',
          WebkitTransition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          textAlign: 'center',
          wordWrap: 'break-word',
          '&:hover': {
            backgroundColor: 'rgba(151, 166, 180, 0.04)',
            cursor: 'pointer',
          },
        }}
        data-testid={'assembly-list-item'}
      >
        <IconButton
          aria-label='edit'
          onClick={handleEditAssembly}
          sx={{ position: 'relative', left: '45%', top: '0%' }}
          data-testid={'assembly-edit-btn'}
          disabled={!isMemberOfProject}
        >
          <EditOutlined sx={{ fontSize: '1.2rem' }} />
        </IconButton>
        <Typography variant='h3'>{assembly.name}</Typography>
        <Typography>{assembly.description}</Typography>
        <IconButton
          aria-label='delete'
          onClick={handleOpenDialog}
          sx={{ position: 'relative', left: '45%', bottom: '0%' }}
          data-testid={'assembly-del-btn'}
          disabled={!isMemberOfProject}
        >
          <DeleteOutlined sx={{ fontSize: '1.2rem' }} />
        </IconButton>
      </Box>
      <AssemblyDeleteDialog
        openDialog={openAssemblyDialog}
        handleDialogClose={handleAssemblyDialogClose}
        refetchAssemblies={refetchAssemblies}
        assembly={assembly}
        setSelectedAssembly={setSelectedAssembly}
        isMemberOfProject={isMemberOfProject}
      />
    </>
  )
}
