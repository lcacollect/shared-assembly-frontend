import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { EpdList } from '.'
import projectEpds from '../../__mocks__/getProjectEpds'

describe('EPD List', () => {
  it('should display all EPDs', async () => {
    render(<EpdList epds={projectEpds.data.projectEpds} />)

    expect(await screen.findByTestId('epd-list')).toBeInTheDocument()
    expect(await screen.findAllByTestId('epd-list-item')).toHaveLength(7)
  })

  it('should no EPDs', async () => {
    render(<EpdList epds={null} />)

    expect(await screen.findByTestId('epd-list')).toBeInTheDocument()
    expect(await screen.findByText('Add EPDs to project')).toBeInTheDocument()
  })

  it('should filter EPD list', async () => {
    render(<EpdList epds={projectEpds.data.projectEpds} searchKey='Gummitætning' />)

    expect(await screen.findByTestId('epd-list')).toBeInTheDocument()
    expect(await screen.findAllByTestId('epd-list-item')).toHaveLength(1)
    expect(await screen.findByText('Gummitætning')).toBeInTheDocument()
  })
})
