import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { DefaultEpdDetail, EpdDetail } from '.'
import projectEpd from '../../__mocks__/getProjectEpd'
import { MockedProvider } from '@apollo/client/testing'
import { projectEpdMock } from '../../__mocks__/getProjectEpd.mock'

describe('EPD Detail Panel', () => {
  it('should display EPD name', async () => {
    render(
      <MockedProvider mocks={projectEpdMock} addTypename={false}>
        <EpdDetail
          show={true}
          epdId={projectEpd.data.projectEpds[0].id}
          projectId={'acfa456f-6628-4c0d-a0c8-1a53b1a46785'}
        />
      </MockedProvider>,
    )

    expect(await screen.findByTestId('epd-detail')).toBeInTheDocument()
    expect(await screen.findByText(projectEpd.data.projectEpds[0].name)).toBeInTheDocument()
    expect(await screen.findByTestId('epd-info-grid')).toBeInTheDocument()
    expect(await screen.findByTestId('impact-category-table')).toBeInTheDocument()
  })
})

describe('EPD Default Detail Panel', () => {
  it('should display default detail', async () => {
    render(<DefaultEpdDetail show={true} />)

    expect(await screen.findByTestId('epd-default-detail')).toBeInTheDocument()
    expect(await screen.findByText('Select an EPD.')).toBeInTheDocument()
  })
})
