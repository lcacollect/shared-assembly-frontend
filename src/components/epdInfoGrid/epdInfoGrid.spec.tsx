import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { EpdInfoGrid } from '.'
import projectEpd from '../../__mocks__/getProjectEpd'

describe('EPD List Item', () => {
  it('should display EPD name', async () => {
    render(<EpdInfoGrid epd={projectEpd.data.projectEpds[0]} />)

    expect(await screen.findByTestId('epd-info-grid')).toBeInTheDocument()
  })
})
