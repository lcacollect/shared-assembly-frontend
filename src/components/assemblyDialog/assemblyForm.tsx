import { Grid, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { AssemblyUnit } from '../../dataAccess'
import React, { Dispatch, SetStateAction } from 'react'

interface AssemblyFormProps {
  name: string
  setName: Dispatch<SetStateAction<string>>
  category: string | null | undefined
  setCategory: Dispatch<SetStateAction<string | null | undefined>>
  description: string | null | undefined
  setDescription: Dispatch<SetStateAction<string | null | undefined>>
  lifeTime: number
  setLifeTime: Dispatch<SetStateAction<number>>
  metaFields: string
  setMetaFields: Dispatch<SetStateAction<string>>
  conversionFactor: number
  setConversionFactor: Dispatch<SetStateAction<number>>
  unit: AssemblyUnit
  setUnit: Dispatch<SetStateAction<AssemblyUnit | null | undefined>>
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
    unit,
    setUnit,
    error,
    setError,
  } = props

  const unitMenuItems = Object.values(AssemblyUnit).map((value, index) => {
    return (
      <MenuItem value={value} key={index} data-testid={value}>
        {value.toUpperCase()}
      </MenuItem>
    )
  })

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
        <FormControl fullWidth data-testid='form-control-select'>
          <InputLabel id='unit-select-label'>Unit</InputLabel>
          <Select
            labelId='unit-select-label'
            data-testid='unit-type'
            value={unit}
            label='Unit'
            onChange={(event) => setUnit(event.target.value as AssemblyUnit)}
          >
            {unitMenuItems}
          </Select>
        </FormControl>
      </Grid>
      {/* <Grid item xs={true}>
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
      </Grid> */}
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
