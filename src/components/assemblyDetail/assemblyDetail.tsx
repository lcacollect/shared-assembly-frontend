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

  const { data: epdsData, loading: epdsLoading } = useGetProjectEpdsQuery({
    variables: { projectId: projectId as string, filters: { isTransport: { isTrue: false } } },
    skip: !projectId,
  })
  const projectEpds = epdsData?.projectEpds || []
  const { data: transportEpdsData, loading: transportEpdsLoading } = useGetProjectEpdsQuery({
    variables: { projectId: projectId as string, filters: { isTransport: { isTrue: true } } },
    skip: !projectId || !isTransportStage,
  })
  const transportEpds = transportEpdsData?.projectEpds || []

  if (!assembly) return null
  return (
    <>
      <Typography variant='h4'>{assembly.name}</Typography>
      <Typography variant='h6' sx={{ fontSize: '1rem', marginBottom: '10px' }}>
        Category: <b>{assembly.category}</b>&nbsp;&nbsp; Unit: <b>{assembly.unit}</b>&nbsp;&nbsp;
      </Typography>
      <Typography>{assembly.description}</Typography>
      <AssemblyLayers
        loading={epdsLoading || transportEpdsLoading}
        assembly={assembly}
        isMemberOfProject={isMemberOfProject || false}
        isTransportStage={isTransportStage || false}
        epds={projectEpds}
        transportEpds={transportEpds}
      />
    </>
  )
}
