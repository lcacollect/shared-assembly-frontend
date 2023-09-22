import { GraphQlProjectAssembly, useGetProjectEpdsQuery } from '../../dataAccess'
import { Typography } from '@mui/material'
import { AssemblyLayers } from '../assemblyLayers'

interface AssemblyDetailProps {
  projectId: string | null
  assembly: GraphQlProjectAssembly | null
  isMemberOfProject: boolean | undefined
  isTransportStage: boolean | undefined
}

export const AssemblyDetail = (props: AssemblyDetailProps) => {
  const { assembly, projectId, isMemberOfProject, isTransportStage } = props

  const { data: epdsData, loading } = useGetProjectEpdsQuery({
    variables: { projectId: projectId as string },
    skip: !projectId,
  })
  const projectEpds = epdsData?.projectEpds || []

  return assembly ? (
    <>
      <Typography variant='h4'>{assembly.name}</Typography>
      <Typography variant='h6' sx={{ fontSize: '1rem', marginBottom: '10px' }}>
        Category: <b>{assembly.category}</b>&nbsp;&nbsp; Unit: <b>{assembly.unit}</b>&nbsp;&nbsp;
      </Typography>
      <Typography>{assembly.description}</Typography>
      <AssemblyLayers
        loading={loading}
        assembly={assembly}
        isMemberOfProject={isMemberOfProject || false}
        isTransportStage={isTransportStage || false}
        epds={projectEpds}
      />
    </>
  ) : null
}
