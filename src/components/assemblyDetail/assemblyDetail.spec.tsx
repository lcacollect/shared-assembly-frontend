import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { AssemblyDetail } from '.'
import { GraphQlAssembly } from '../../dataAccess'
import { MockedProvider } from '@apollo/client/testing'
import { accountMock } from '../../__mocks__/getAccount.mock'
import { projectMemberMock } from '../../__mocks__/getProjectMemebers.mock'
import assemblies from '../../__mocks__/getAssemblies'

describe('Assemblies Detail', () => {
  it('should display no assembly layers', async () => {
    render(
      <MockedProvider mocks={[accountMock, projectMemberMock]} addTypename={false}>
        <AssemblyDetail
          assembly={assemblies.data.assemblies[0] as unknown as GraphQlAssembly}
          projectId={'acfa456f-6628-4c0d-a0c8-1a53b1a46785'}
          isMemberOfProject={true}
        />
      </MockedProvider>,
    )

    expect(await screen.findByText('No assembly layers added!')).toBeInTheDocument()

    fireEvent.click(await screen.findByTestId('layer-add'))
    expect(await screen.findByTestId('layer-save')).toBeInTheDocument()
    expect(await screen.findByTestId('layer-cancel')).toBeInTheDocument()
  })
})
