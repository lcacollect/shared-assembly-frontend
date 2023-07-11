import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { SearchPanel } from '.'

describe('EPD Search Panel', () => {
  it('should not display input', async () => {
    render(<SearchPanel searchKey={''} setSearchKey={() => ({})} />)

    expect(await screen.findByTestId('search-panel')).toBeInTheDocument()
    expect(await screen.queryByText('search-input')).not.toBeInTheDocument()
  })

  it('should display input when clicked', async () => {
    render(<SearchPanel searchKey={''} setSearchKey={() => ({})} />)

    const button = await screen.getByRole('button')
    fireEvent.click(button)

    expect(await screen.findByTestId('search-panel')).toBeInTheDocument()
    expect(await screen.findByTestId('search-input')).toBeInTheDocument()
  })

  it('should display input value', async () => {
    render(<SearchPanel searchKey={'test search'} setSearchKey={() => ({})} />)

    const button = await screen.getByRole('button')
    fireEvent.click(button)

    expect(await screen.findByTestId('search-panel')).toBeInTheDocument()
    expect(await screen.findByDisplayValue('test search')).toBeInTheDocument()
  })
})
