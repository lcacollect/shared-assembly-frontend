import { Grid, TextField } from '@mui/material'
import React, { Dispatch, SetStateAction, useRef, useState } from 'react'

interface AssemblyFormProps {
  name: string
  setName: Dispatch<SetStateAction<string>>
  category: string
  setCategory: Dispatch<SetStateAction<string>>
  description: string
  setDescription: Dispatch<SetStateAction<string>>
  lifeTime: number
  setLifeTime: Dispatch<SetStateAction<number>>
  metaFields: string
  setMetaFields: Dispatch<SetStateAction<string>>
  conversionFactor: number
  setConversionFactor: Dispatch<SetStateAction<number>>
  error: boolean
  setError: Dispatch<SetStateAction<boolean>>
}
export const AssemblyForm: React.FC<AssemblyFormProps> = (props) => {
  const {
    name,
    setName,
    category,
    setCategory,
    description,
    setDescription,
    lifeTime,
    setLifeTime,
    metaFields,
    setMetaFields,
    conversionFactor,
    setConversionFactor,
    error,
    setError,
  } = props

  return (
    <Grid container spacing={2} sx={{ paddingTop: 5, paddingBottom: 2 }} data-testid='assembly-form'>
      <Grid item xs={true}>
        <TextField
          required
          data-testid='assembly-name'
          onChange={(event) => setName(event.target.value)}
          value={name}
          label='Name'
        />
      </Grid>
      <Grid item xs={true}>
        <TextField
          required
          data-testid='assembly-category'
          onChange={(event) => setCategory(event.target.value)}
          value={category}
          label='Category'
        />
      </Grid>
      <Grid item xs={true}>
        <TextField
          data-testid='assembly-description'
          onChange={(event) => setDescription(event.target.value)}
          value={description}
          label='Description'
        />
      </Grid>
      <Grid item xs={true}>
        <TextField
          data-testid='assembly-lifeTime'
          onChange={(event) => {
            const value = parseFloat(event.target.value)
            if (value) {
              setLifeTime(value)
            } else {
              setLifeTime(0)
            }
          }}
          value={lifeTime}
          label='Life Time'
          type='number'
        />
      </Grid>
      <Grid item xs={true}>
        <TextField
          error={error}
          data-testid='assembly-metaFields'
          onChange={(event) => {
            setMetaFields(event.target.value)
          }}
          value={metaFields}
          label='Meta Fields'
          helperText='{"fieldName": "fieldValue"}'
          onBlur={(event) => {
            if (event.target.value) {
              try {
                JSON.parse(event.target.value)
                setError(false)
              } catch (e) {
                setError(true)
              }
            } else {
              setError(false)
            }
          }}
        />
      </Grid>
      <Grid item xs={true}>
        <TextField
          data-testid='assembly-conversionFactor'
          onChange={(event) => {
            const value = parseFloat(event.target.value)
            if (value) {
              setConversionFactor(value)
            } else {
              setConversionFactor(0)
            }
          }}
          value={conversionFactor}
          label='Conversion Factor'
          type='number'
          inputProps={{ step: 0.2 }}
        />
      </Grid>
    </Grid>
  )
}
