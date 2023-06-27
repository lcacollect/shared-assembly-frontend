import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { EpdSearchPanel } from '.'

describe('EPD Search Panel', () => {
  it('should not display input', async () => {
    render(<EpdSearchPanel searchKey={''} setSearchKey={() => ({})} />)

    expect(await screen.findByTestId('epd-search-panel')).toBeInTheDocument()
    expect(await screen.queryByText('epd-search-input')).not.toBeInTheDocument()
  })

  it('should display input when clicked', async () => {
    render(<EpdSearchPanel searchKey={''} setSearchKey={() => ({})} />)

    const button = await screen.getByRole('button')
    fireEvent.click(button)

    expect(await screen.findByTestId('epd-search-panel')).toBeInTheDocument()
    expect(await screen.findByTestId('epd-search-input')).toBeInTheDocument()
  })

  it('should display input value', async () => {
    render(<EpdSearchPanel searchKey={'test search'} setSearchKey={() => ({})} />)

    const button = await screen.getByRole('button')
    fireEvent.click(button)

    expect(await screen.findByTestId('epd-search-panel')).toBeInTheDocument()
    expect(await screen.findByDisplayValue('test search')).toBeInTheDocument()
  })
})
