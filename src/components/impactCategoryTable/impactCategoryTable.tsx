import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useMemo } from 'react'
import { GraphQlImpactCategories } from '../../dataAccess'
import { CardTitle } from '@lcacollect/components'

interface ImpactCategoryTableProps {
  name: string
  data?: GraphQlImpactCategories | null
}

export const ImpactCategoryTable = (props: ImpactCategoryTableProps) => {
  const { name, data } = props

  const _data = useMemo(
    () => (data ? (Object.keys(data).filter((category) => category !== '__typename') as (keyof typeof data)[]) : []),
    [data],
  )

  if (!data) {
    return null
  }

  return (
    <TableContainer sx={{ marginTop: 3 }} data-testid='impact-category-table'>
      <CardTitle title={name} size='small' />
      <Table sx={{ minWidth: 650 }} aria-label='impact category table'>
        <TableHead>
          <TableRow>
            {_data.map((category, index) => (
              <TableCell key={index}>{category.toUpperCase()}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            {_data.map((key) => (
              <TableCell key={key} component='th' scope='row'>
                {data[key]}
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}
