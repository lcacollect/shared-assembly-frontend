import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { EpdListItem } from '.'
import projectEpds from '../../__mocks__/getProjectEpds'

describe('EPD List Item', () => {
  it('should display EPD name', async () => {
    render(<EpdListItem epd={projectEpds.data.projectEpds[0]} />)

    expect(await screen.findByTestId('epd-list-item')).toBeInTheDocument()
    expect(await screen.findByText(projectEpds.data.projectEpds[0].name)).toBeInTheDocument()
  })
})
