import { InnerPaper } from '@lcacollect/components'
import { Button, Typography } from '@mui/material'
import { Dispatch, SetStateAction } from 'react'
import { GraphQlAssembly } from '../../dataAccess'

interface AssemblyListItemProps {
  assembly: Pick<GraphQlAssembly, 'id' | 'name'>
  selectAssemblyId: Dispatch<SetStateAction<string | null>>
}

export const AssemblyListItem = (props: AssemblyListItemProps) => {
  const { assembly, selectAssemblyId } = props

  return (
    <InnerPaper sx={{ marginY: 0.5 }} data-testid='assembly-list-item'>
      <Button
        variant='text'
        onClick={() => selectAssemblyId(assembly.id)}
        sx={{
          color: 'black',
          float: 'left',
          textTransform: 'none',
        }}
      >
        <Typography>{assembly.name}</Typography>
      </Button>
    </InnerPaper>
  )
}
