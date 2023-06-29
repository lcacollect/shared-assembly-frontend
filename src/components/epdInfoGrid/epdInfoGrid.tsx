import { formatTextFieldLabel } from '@lcacollect/core'
import { Grid, Typography } from '@mui/material'
import React from 'react'
import { GraphQlProjectEpd } from '../../dataAccess'

interface EpdListItemProps {
  epd?: Omit<GraphQlProjectEpd, 'originId' | 'conversions'> | null
}

export const EpdInfoGrid = (props: EpdListItemProps) => {
  const { epd } = props

  const keys = [
    'source',
    'version',
    'validUntil',
    'publishedDate',
    'location',
    'declaredUnit',
    'subtype',
  ] as (keyof Omit<GraphQlProjectEpd, 'originId' | 'conversions'>)[]

  if (!epd) {
    return null
  }
  return (
    <Grid container spacing={2} sx={{ marginTop: 3 }} data-testid='epd-info-grid'>
      {keys.map((key) => (
        <Grid key={key} item xs={4}>
          <Typography variant='subtitle2'>{formatTextFieldLabel(key)}:</Typography>
          <Typography>{epd[key]}</Typography>
        </Grid>
      ))}
    </Grid>
  )
}
