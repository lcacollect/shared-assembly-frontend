import { MockedResponse } from '@apollo/client/testing'
import { GetProjectEpdsDocument } from '../dataAccess'
import getProjectEpds from './getProjectEpds'

export const projectEpdsMock: MockedResponse[] = [
  {
    request: {
      query: GetProjectEpdsDocument,
      variables: { projectId: 'acfa456f-6628-4c0d-a0c8-1a53b1a46785' },
    },
    result: getProjectEpds,
  },
]
