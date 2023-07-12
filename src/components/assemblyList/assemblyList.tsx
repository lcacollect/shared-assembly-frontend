import { InnerPaper } from '@lcacollect/components'
import { Stack, Typography } from '@mui/material'
import { Dispatch, SetStateAction, useMemo, useState } from 'react'
import { GraphQlAssembly } from '../../dataAccess'
import { AssemblyListItem } from '../assemblyListItem'
import { SearchPanel } from '../../components'

interface AssemblyListProps {
  assemblies?: GraphQlAssembly[] | null | undefined
  setSelectedAssembly: Dispatch<SetStateAction<GraphQlAssembly | null>>
  handleEditAssembly: () => void
  projectId: string
  refetchAssemblies: () => void
  selectedAssembly: GraphQlAssembly | null | undefined
  isMemberOfProject: boolean | undefined
}

export const AssemblyList = (props: AssemblyListProps) => {
  const {
    assemblies,
    setSelectedAssembly,
    handleEditAssembly,
    projectId,
    refetchAssemblies,
    selectedAssembly,
    isMemberOfProject,
  } = props
  const [searchKey, setSearchKey] = useState('')

  const filteredAssemblies = useMemo(
    () =>
      assemblies?.filter((assembly) =>
        searchKey ? assembly.name.toLowerCase().includes(searchKey.toLowerCase()) : assembly,
      ),
    [searchKey, assemblies],
  )

  return (
    <>
      {assemblies?.length ? (
        <>
          <SearchPanel searchKey={searchKey} setSearchKey={setSearchKey} />
          <Stack style={{ overflowY: 'scroll', maxHeight: '1000px' }} data-testid='assembly-list'>
            {filteredAssemblies?.map((assembly, index) => (
              <AssemblyListItem
                assembly={assembly}
                key={index}
                setSelectedAssembly={setSelectedAssembly}
                handleEditAssembly={handleEditAssembly}
                projectId={projectId}
                refetchAssemblies={refetchAssemblies}
                selectedAssembly={selectedAssembly}
                isMemberOfProject={isMemberOfProject}
              />
            ))}
          </Stack>
        </>
      ) : (
        <InnerPaper sx={{ margin: 'auto' }} data-testid='assembly-list-item'>
          <Typography>No assemblies added!</Typography>
        </InnerPaper>
      )}
    </>
  )
}
