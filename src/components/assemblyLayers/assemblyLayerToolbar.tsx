import { GridToolbarColumnsButton, GridToolbarContainer } from '@mui/x-data-grid-pro'
import { IconButton, Tooltip } from '@mui/material'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import React from 'react'

interface ElementToolbarProps {
  handleAddRow: () => void
  isMemberOfProject: boolean | undefined
}

export const AssemblyLayerToolbar = ({ handleAddRow, isMemberOfProject }: ElementToolbarProps) => {
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
        <span>
          <IconButton
            aria-label='addSource'
            onClick={handleAddRow}
            sx={{ color }}
            disabled={!isMemberOfProject}
            data-testid='layer-add'
          >
            <AddCircleOutlineOutlinedIcon />
          </IconButton>
        </span>
      </Tooltip>
    </GridToolbarContainer>
  )
}
