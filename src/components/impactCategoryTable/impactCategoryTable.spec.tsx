import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { ImpactCategoryTable } from '.'
import projectEpd from '../../__mocks__/getProjectEpd'

describe('Impact Category Table', () => {
  it('should display Impact Category Table', async () => {
    render(<ImpactCategoryTable name={'Global Warming Potential (GWP)'} data={projectEpd.data.projectEpds[0].gwp} />)

    expect(await screen.findByTestId('impact-category-table')).toBeInTheDocument()
  })

  it('should not render', async () => {
    render(<ImpactCategoryTable name={'Global Warming Potential (GWP)'} data={null} />)

    expect(await screen.queryByTestId('impact-category-table')).not.toBeInTheDocument()
  })
})
