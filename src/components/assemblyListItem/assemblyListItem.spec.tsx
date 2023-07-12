import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { AssemblyListItem } from '.'
import { GraphQlAssembly } from '../../dataAccess'
import { MockedProvider } from '@apollo/client/testing'
import assemblies from '../../__mocks__/getAssemblies'

describe('Assemblies list item', () => {
  it('should display Assemblies list item', async () => {
    render(
      <MockedProvider mocks={[]} addTypename={false}>
        <AssemblyListItem
          assembly={assemblies.data.assemblies[0] as GraphQlAssembly}
          projectId={'acfa456f-6628-4c0d-a0c8-1a53b1a46785'}
          isMemberOfProject={true}
        />
      </MockedProvider>,
    )

    expect(await screen.findByTestId('assembly-list-item')).toBeInTheDocument()
    expect(await screen.findByText('test')).toBeInTheDocument()

    expect(await screen.findByTestId('assembly-edit-btn')).toBeInTheDocument()

    fireEvent.click(await screen.findByTestId('assembly-del-btn'))
    expect(await screen.findByTestId('assembly-delete-dialog')).toBeInTheDocument()
  })
})
