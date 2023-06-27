import { InnerPaper } from '@lcacollect/components'
import { Stack, Typography } from '@mui/material'
import React, { useMemo } from 'react'
import { GraphQlProjectEpd } from '../../dataAccess'
import { EpdListItem } from '../epdListItem'

interface EpdListProps {
  epds?: Pick<GraphQlProjectEpd, 'id' | 'name'>[] | null
  searchKey?: string
}

export const EpdList = (props: EpdListProps) => {
  const { epds, searchKey } = props

  if (!epds) {
    return (
      <InnerPaper sx={{ marginY: 1 }} data-testid='epd-list'>
        <Typography>Add EPDs to project</Typography>
      </InnerPaper>
    )
  }

  const filteredEpds = useMemo(
    () => epds.filter((epd) => (searchKey ? epd.name.toLowerCase().includes(searchKey.toLowerCase()) : epd)),
    [searchKey],
  )

  return (
    <Stack style={{ overflowY: 'scroll', maxHeight: '1000px' }} data-testid='epd-list'>
      {filteredEpds.map((epd, index) => (
        <EpdListItem epd={epd} key={index} />
      ))}
    </Stack>
  )
}
