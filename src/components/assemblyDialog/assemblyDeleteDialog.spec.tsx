import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { AssemblyDeleteDialog } from '.'
import { GraphQlAssembly } from '../../dataAccess'
import { MockedProvider } from '@apollo/client/testing'
import assemblies from '../../__mocks__/getAssemblies'

describe('Assemblies Delete Dialog', () => {
  it('should display delete dialog', async () => {
    render(
      <MockedProvider mocks={[]} addTypename={false}>
        <AssemblyDeleteDialog
          openDialog={true}
          assembly={assemblies.data.assemblies[0] as unknown as GraphQlAssembly}
          projectId={'acfa456f-6628-4c0d-a0c8-1a53b1a46785'}
          isMemberOfProject={true}
        />
      </MockedProvider>,
    )

    expect(await screen.findByTestId('assembly-delete-dialog')).toBeInTheDocument()
    expect(
      await screen.findByText(`Are you sure you want to delete '${assemblies.data.assemblies[0].name}' assembly?`),
    ).toBeInTheDocument()
  })
})
