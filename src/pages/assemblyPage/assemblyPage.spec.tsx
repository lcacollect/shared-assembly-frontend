import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { AssemblyPage } from '.'
import { MockedProvider } from '@apollo/client/testing'
import { projectAssembliesMock } from '../../__mocks__/getAssemblies.mock'

describe('Assembly Page', () => {
  it('should render the Assembly page', async () => {
    render(
      <MemoryRouter initialEntries={['/projects/acfa456f-6628-4c0d-a0c8-1a53b1a46785/assemblies']}>
        <MockedProvider mocks={projectAssembliesMock} addTypename={false}>
          <AssemblyPage />
        </MockedProvider>
      </MemoryRouter>,
    )

    expect(await screen.findByTestId('assembly-page')).toBeInTheDocument()
    expect(await screen.findByTestId('assembly-title')).toBeInTheDocument()
    expect(await screen.findByTestId('assembly-list-item')).toBeInTheDocument()
  })
})
