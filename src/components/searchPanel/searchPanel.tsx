import React, { Dispatch, SetStateAction } from 'react'
import { Container, Input } from '@mui/material'

interface SearchPanelProps {
  searchKey: string
  setSearchKey: Dispatch<SetStateAction<string>>
}

export const SearchPanel = (props: SearchPanelProps) => {
  const { searchKey, setSearchKey } = props

  return (
    <Container data-testid='search-panel'>
      <Input
        data-testid='search-input'
        sx={{ marginBottom: 1 }}
        fullWidth
        placeholder='Type search key'
        value={searchKey}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setSearchKey(event.target.value)
        }}
      />
    </Container>
  )
}
