import { InnerPaper } from '@lcacollect/components'
import { Button, Typography } from '@mui/material'
import { Dispatch, SetStateAction } from 'react'
import { GraphQlProjectEpd } from '../../dataAccess'

interface EpdListItemProps {
  epd: Pick<GraphQlProjectEpd, 'id' | 'name'>
  selectEpdId: Dispatch<SetStateAction<string | null>>
}

export const EpdListItem = (props: EpdListItemProps) => {
  const { epd, selectEpdId } = props

  return (
    <InnerPaper sx={{ marginY: 0.5 }} data-testid='epd-list-item'>
      <Button
        variant='text'
        onClick={() => selectEpdId(epd.id)}
        sx={{
          color: 'black',
          float: 'left',
          textTransform: 'none',
        }}
      >
        <Typography>{epd.name}</Typography>
      </Button>
    </InnerPaper>
  )
}
