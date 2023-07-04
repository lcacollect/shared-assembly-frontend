import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetAssembliesQuery } from '../../dataAccess'
import { CardTitle, DataFetchWrapper, PaperPage } from '@lcacollect/components'
import { Grid } from '@mui/material'
import { AssemblyList, AssemblyDialog } from '../../components'

export const AssemblyPage = () => {
  const { projectId } = useParams()

  const [assemblyId, selectAssemblyId] = useState<string | null>(null)
  const [openAssemblyDialog, setOpenAssemblyDialog] = useState(false)

  const {
    data,
    loading,
    error,
    refetch: retfetchAssemblies,
  } = useGetAssembliesQuery({
    variables: { projectId: projectId as string },
    skip: !projectId,
  })

  const assemblies = data?.assemblies || []

  const handleAddAssembly = () => {
    setOpenAssemblyDialog(true)
  }

  const handleAssemblyDialogClose = () => {
    setOpenAssemblyDialog(false)
  }

  return (
    <PaperPage data-testid='assembly-page'>
      <CardTitle title={'Assemblies'} size='large' onClickHandler={handleAddAssembly} data-testid='assembly-title' />
      <AssemblyDialog
        openDialog={openAssemblyDialog}
        handleDialogClose={handleAssemblyDialogClose}
        projectId={projectId as string}
        refetchAssemblies={retfetchAssemblies}
      />
      <DataFetchWrapper loading={loading} error={error}>
        <Grid container spacing={2}>
          <Grid item md={5} lg={3}>
            <AssemblyList assemblies={assemblies} selectAssemblyId={selectAssemblyId} />
          </Grid>
          <Grid item md={7} lg={9}>
            {/* <AssemblyDetail show={!!assemblyId} epdId={assemblyId} projectId={projectId as string} />
            <DefaultAssemblyDetail show={!assemblyId} /> */}
          </Grid>
        </Grid>
      </DataFetchWrapper>
    </PaperPage>
  )
}
