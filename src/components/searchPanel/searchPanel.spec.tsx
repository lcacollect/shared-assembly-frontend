import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { SearchPanel } from '.'

describe('EPD Search Panel', () => {
  it('should display input', async () => {
    render(<SearchPanel searchKey={''} setSearchKey={() => ({})} />)

    expect(await screen.findByTestId('search-panel')).toBeInTheDocument()
    expect(await screen.findByTestId('search-input')).toBeInTheDocument()
  })

  it('should display input value', async () => {
    render(<SearchPanel searchKey={'test search'} setSearchKey={() => ({})} />)

    expect(await screen.findByTestId('search-panel')).toBeInTheDocument()
    expect(await screen.findByDisplayValue('test search')).toBeInTheDocument()
  })
})
