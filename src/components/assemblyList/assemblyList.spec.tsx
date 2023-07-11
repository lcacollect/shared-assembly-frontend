import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'

import { AssemblyList } from '.'
import { GraphQlAssembly } from '../../dataAccess'
import { MockedProvider } from '@apollo/client/testing'
import assemblies from '../../__mocks__/getAssemblies'

describe('Assemblies list', () => {
  it('should display Assemblies list', async () => {
    render(
      <MockedProvider mocks={[]} addTypename={false}>
        <AssemblyList
          assemblies={assemblies.data.assemblies as unknown as GraphQlAssembly[]}
          projectId={'acfa456f-6628-4c0d-a0c8-1a53b1a46785'}
        />
      </MockedProvider>,
    )

    expect(await screen.findByTestId('assembly-list')).toBeInTheDocument()
    expect(await screen.findAllByTestId('assembly-list-item')).toBeDefined()
    expect(await screen.findByText('test')).toBeInTheDocument()
    expect(await screen.findByText('test2')).toBeInTheDocument()
  })

  it('should display Empty Assembly text', async () => {
    render(
      <MockedProvider mocks={[]} addTypename={false}>
        <AssemblyList projectId={'acfa456f-6628-4c0d-a0c8-1a53b1a46785'} />
      </MockedProvider>,
    )

    expect(await screen.findAllByTestId('assembly-list-item')).toBeDefined()
    expect(await screen.findByText('No assemblies added!')).toBeInTheDocument()
  })

  it('should display filtered Assemblies', async () => {
    render(
      <MockedProvider mocks={[]} addTypename={false}>
        <AssemblyList
          assemblies={assemblies.data.assemblies as unknown as GraphQlAssembly[]}
          projectId={'acfa456f-6628-4c0d-a0c8-1a53b1a46785'}
        />
      </MockedProvider>,
    )

    expect(await screen.findByTestId('assembly-list')).toBeInTheDocument()
    expect(await screen.findAllByTestId('assembly-list-item')).toBeDefined()

    fireEvent.click(await screen.findByText('Filters'))
    expect(await screen.findByTestId('search-input')).toBeInTheDocument()

    const input = await (await screen.findByTestId('search-input')).querySelector('input')
    if (input) fireEvent.change(input, { target: { value: 'test2' } })
    expect(await screen.findByText('test2')).toBeInTheDocument()
  })
})
