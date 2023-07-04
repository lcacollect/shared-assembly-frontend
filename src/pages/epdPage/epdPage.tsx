import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetProjectEpdsQuery } from '../../dataAccess'
import { CardTitle, DataFetchWrapper, PaperPage } from '@lcacollect/components'
import { Grid } from '@mui/material'
import { DefaultEpdDetail, EpdDetail, EpdList, SearchPanel } from '../../components'

export const EpdPage = () => {
  const { projectId } = useParams()

  const [searchKey, setSearchKey] = useState('')
  const [epdId, selectEpdId] = useState<string | null>(null)
  const { data, loading, error } = useGetProjectEpdsQuery({
    variables: { projectId: projectId as string },
    skip: !projectId,
  })

  return (
    <PaperPage data-testid='epd-page'>
      <CardTitle title={'EPDs'} size='large' />
      <DataFetchWrapper loading={loading} error={error}>
        <Grid container spacing={2}>
          <Grid item md={5} lg={3}>
            <SearchPanel searchKey={searchKey} setSearchKey={setSearchKey} />
            <EpdList epds={data?.projectEpds} searchKey={searchKey} selectEpdId={selectEpdId} />
          </Grid>
          <Grid item md={7} lg={9}>
            <EpdDetail show={!!epdId} epdId={epdId} projectId={projectId as string} />
            <DefaultEpdDetail show={!epdId} />
          </Grid>
        </Grid>
      </DataFetchWrapper>
    </PaperPage>
  )
}
