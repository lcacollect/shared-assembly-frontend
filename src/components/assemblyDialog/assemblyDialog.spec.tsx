import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { AssemblyDialog } from '.'
import { GraphQlAssembly } from '../../dataAccess'
import { MockedProvider } from '@apollo/client/testing'
import assemblies from '../../__mocks__/getAssemblies'

describe('Assemblies Edit, Create Dialog', () => {
  it('should display Assemblies edit dialog', async () => {
    render(
      <MockedProvider mocks={[]} addTypename={false}>
        <AssemblyDialog
          openDialog={true}
          assembly={assemblies.data.assemblies[0] as GraphQlAssembly}
          projectId={'acfa456f-6628-4c0d-a0c8-1a53b1a46785'}
          isMemberOfProject={true}
        />
      </MockedProvider>,
    )

    expect(await screen.findByTestId('assembly-dialog')).toBeInTheDocument()
    expect(await screen.findByText('Edit assembly')).toBeInTheDocument()

    expect((await screen.findByTestId('assembly-name')).querySelector('input')).toHaveValue('test')
    expect((await screen.findByTestId('assembly-category')).querySelector('input')).toHaveValue('test')
    expect((await screen.findByTestId('assembly-description')).querySelector('input')).toHaveValue('test')
    expect((await screen.findByTestId('assembly-lifeTime')).querySelector('input')).toHaveValue(50)
    expect((await screen.findByTestId('form-control-select')).querySelector('input')).toHaveValue('m2')
    expect((await screen.findByTestId('assembly-conversionFactor')).querySelector('input')).toHaveValue(1)
  })

  it('should display Assemblies save dialog', async () => {
    render(
      <MockedProvider mocks={[]} addTypename={false}>
        <AssemblyDialog
          openDialog={true}
          assembly={null}
          projectId={'acfa456f-6628-4c0d-a0c8-1a53b1a46785'}
          isMemberOfProject={true}
        />
      </MockedProvider>,
    )

    expect(await screen.findByTestId('assembly-dialog')).toBeInTheDocument()
    expect(await screen.findByText('Add Assembly')).toBeInTheDocument()

    expect((await screen.findByTestId('assembly-name')).querySelector('input')).toHaveValue('')
    expect((await screen.findByTestId('assembly-category')).querySelector('input')).toHaveValue('')
    expect((await screen.findByTestId('assembly-description')).querySelector('input')).toHaveValue('')
    expect((await screen.findByTestId('assembly-lifeTime')).querySelector('input')).toHaveValue(50)
    expect((await screen.findByTestId('form-control-select')).querySelector('input')).toHaveValue('m2')
    expect((await screen.findByTestId('assembly-conversionFactor')).querySelector('input')).toHaveValue(1)
  })
})
