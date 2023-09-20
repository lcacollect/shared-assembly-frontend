import { useState, useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import {
  useGetAssembliesQuery,
  GraphQlAssembly,
  useGetAccountQuery,
  useGetProjectMembersQuery,
  useGetprojectStagesQuery,
} from '../../dataAccess'
import { CardTitle, DataFetchWrapper, PaperPage } from '@lcacollect/components'
import { Grid } from '@mui/material'
import { AssemblyList, AssemblyDialog, AssemblyDetail } from '../../components'

export const AssemblyPage = () => {
  const { projectId } = useParams()

  const [selectedAssembly, setSelectedAssembly] = useState<GraphQlAssembly | null>(null)
  const [openAssemblyDialog, setOpenAssemblyDialog] = useState(false)
  const [isMemberOfProject, setIsMemberOfProject] = useState<boolean>()

  const {
    data,
    loading,
    error,
    refetch: retfetchAssemblies,
  } = useGetAssembliesQuery({
    variables: { projectId: projectId as string },
    skip: !projectId,
  })

  const { data: accountData } = useGetAccountQuery()
  const { data: projectMemberData } = useGetProjectMembersQuery({
    variables: {
      projectId: projectId as string,
    },
    skip: !projectId,
  })

  const { data: projectStageData } = useGetprojectStagesQuery({
    variables: { projectId: projectId as string },
    skip: !projectId,
  })

  const isTransportStage = useMemo(
    () =>
      projectStageData?.projectStages.find((stage) => {
        return stage.phase.toLowerCase() == 'a4'
      }),
    [projectStageData],
  )

  useEffect(() => {
    if (accountData && projectMemberData) {
      const isMemberOfProject = projectMemberData?.projectMembers.find(
        (member) => member.userId === accountData?.account.id,
      )
      setIsMemberOfProject(!!isMemberOfProject)
    }
  }, [accountData, projectMemberData])

  const assemblies = data?.assemblies

  useEffect(() => {
    if (assemblies && assemblies.length) setSelectedAssembly(assemblies[0] as GraphQlAssembly)
  }, [assemblies])

  const handleAddAssembly = () => {
    setSelectedAssembly(null)
    setOpenAssemblyDialog(true)
  }

  const handleEditAssembly = () => {
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
        assembly={selectedAssembly}
        isMemberOfProject={isMemberOfProject}
      />
      <DataFetchWrapper loading={loading} error={error}>
        <Grid container spacing={2}>
          <Grid item md={5} lg={3}>
            <AssemblyList
              assemblies={assemblies as GraphQlAssembly[]}
              setSelectedAssembly={setSelectedAssembly}
              selectedAssembly={selectedAssembly}
              handleEditAssembly={handleEditAssembly}
              projectId={projectId as string}
              refetchAssemblies={retfetchAssemblies}
              isMemberOfProject={isMemberOfProject}
            />
          </Grid>
          <Grid item md={7} lg={9} sx={{ marginTop: '10px' }}>
            <AssemblyDetail
              assembly={selectedAssembly}
              projectId={projectId as string}
              isMemberOfProject={isMemberOfProject}
              isTransportStage={!!isTransportStage}
            />
          </Grid>
        </Grid>
      </DataFetchWrapper>
    </PaperPage>
  )
}
