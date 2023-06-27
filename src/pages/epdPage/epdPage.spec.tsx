import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { EpdPage } from '.'
import { MockedProvider } from '@apollo/client/testing'
import { projectEpdsMock } from '../../__mocks__/getProjectEpds.mock'

describe('EPD Page', () => {
  it('should render the EPD page', async () => {
    render(
      <MemoryRouter initialEntries={['/projects/acfa456f-6628-4c0d-a0c8-1a53b1a46785/epds']}>
        <MockedProvider mocks={projectEpdsMock} addTypename={false}>
          <EpdPage />
        </MockedProvider>
      </MemoryRouter>,
    )

    expect(await screen.findByTestId('epd-page')).toBeInTheDocument()
    expect(await screen.findByTestId('epd-search-panel')).toBeInTheDocument()
    expect(await screen.findByTestId('epd-list')).toBeInTheDocument()
    expect(await screen.findByTestId('epd-default-detail')).toBeInTheDocument()
  })
})
