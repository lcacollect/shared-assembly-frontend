import React, { Dispatch, SetStateAction, useState } from 'react'
import { Button, Container, Input } from '@mui/material'
import FilterListIcon from '@mui/icons-material/FilterList'

interface SearchPanelProps {
  searchKey: string
  setSearchKey: Dispatch<SetStateAction<string>>
}

export const SearchPanel = (props: SearchPanelProps) => {
  const { searchKey, setSearchKey } = props

  const [clicked, setClicked] = useState(false)

  return (
    <Container data-testid='search-panel'>
      <Button
        sx={{
          color: 'black',
        }}
        onClick={() => setClicked(!clicked)}
        startIcon={<FilterListIcon />}
      >
        Filters
      </Button>
      {clicked ? (
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
      ) : null}
    </Container>
  )
}
