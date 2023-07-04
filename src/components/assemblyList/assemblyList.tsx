import { InnerPaper } from '@lcacollect/components'
import { Stack, Typography } from '@mui/material'
import { Dispatch, SetStateAction, useMemo, useState } from 'react'
import { GraphQlAssembly } from '../../dataAccess'
import { AssemblyListItem } from '../assemblyListItem'
import { SearchPanel } from '../../components'

interface AssemblyListProps {
  assemblies?: Pick<GraphQlAssembly, 'id' | 'name'>[] | null
  selectAssemblyId: Dispatch<SetStateAction<string | null>>
}

export const AssemblyList = (props: AssemblyListProps) => {
  const { assemblies, selectAssemblyId } = props
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
              <AssemblyListItem assembly={assembly} key={index} selectAssemblyId={selectAssemblyId} />
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
