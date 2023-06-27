import { InnerPaper } from '@lcacollect/components'
import { Typography } from '@mui/material'
import React from 'react'
import { GraphQlProjectEpd } from '../../dataAccess'

interface EpdListItemProps {
  epd: Pick<GraphQlProjectEpd, 'id' | 'name'>
}

export const EpdListItem = (props: EpdListItemProps) => {
  const { epd } = props

  return (
    <InnerPaper sx={{ marginY: 0.5 }} data-testid='epd-list-item'>
      <Typography>{epd.name}</Typography>
    </InnerPaper>
  )
}
