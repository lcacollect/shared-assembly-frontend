import { Container, Typography } from '@mui/material'
import React, { useMemo } from 'react'
import { CardTitle, DataFetchWrapper, InnerPaper } from '@lcacollect/components'
import { useGetProjectEpdQuery } from '../../dataAccess'
import { ImpactCategoryTable } from '../impactCategoryTable'
import { EpdInfoGrid } from '../epdInfoGrid'

interface EpdDetailProps {
  show: boolean
  projectId: string
  epdId?: string | null
}

export const EpdDetail = (props: EpdDetailProps) => {
  const { show, epdId, projectId } = props

  const { data, loading, error } = useGetProjectEpdQuery({
    variables: { projectId, epdId: epdId as string },
    skip: !epdId,
  })

  const epd = useMemo(() => data?.projectEpds[0], [data])

  if (!show) {
    return null
  }

  return (
    <InnerPaper data-testid='epd-detail'>
      <DataFetchWrapper loading={loading} error={error}>
        <CardTitle title={epd?.name as string} size='medium' />
        <EpdInfoGrid epd={epd} />
        <ImpactCategoryTable name={'Global Warming Potential (GWP)'} data={epd?.gwp} />
      </DataFetchWrapper>
    </InnerPaper>
  )
}

interface DefaultEpdDetailProps {
  show: boolean
}

export const DefaultEpdDetail = (props: DefaultEpdDetailProps) => {
  const { show } = props

  if (!show) {
    return null
  }

  return (
    <Container data-testid='epd-default-detail'>
      <Typography>Select an EPD.</Typography>
    </Container>
  )
}
