import { MockedResponse } from '@apollo/client/testing'
import { GetProjectAssembliesDocument } from '../dataAccess'
import getAssemblies from './getAssemblies'

export const projectAssembliesMock: MockedResponse[] = [
  {
    request: {
      query: GetProjectAssembliesDocument,
      variables: {
        projectId: 'acfa456f-6628-4c0d-a0c8-1a53b1a46785',
      },
    },
    result: getAssemblies,
  },
]
