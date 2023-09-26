import { InnerPaper } from '@lcacollect/components'
import { Stack, Typography } from '@mui/material'
import { Dispatch, SetStateAction, useMemo, useState } from 'react'
import { GraphQlProjectAssembly } from '../../dataAccess'
import { AssemblyListItem } from '../assemblyListItem'
import { SearchPanel } from '../../components'

interface AssemblyListProps {
  assemblies?: GraphQlProjectAssembly[] | null | undefined
  setSelectedAssembly: Dispatch<SetStateAction<GraphQlProjectAssembly | null>>
  handleEditAssembly: () => void
  refetchAssemblies: () => void
  selectedAssembly: GraphQlProjectAssembly | null | undefined
  isMemberOfProject: boolean | undefined
}

export const AssemblyList = (props: AssemblyListProps) => {
  const {
    assemblies,
    setSelectedAssembly,
    handleEditAssembly,
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
