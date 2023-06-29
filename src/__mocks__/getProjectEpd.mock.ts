import { MockedResponse } from '@apollo/client/testing'
import { GetProjectEpdDocument } from '../dataAccess'
import getProjectEpd from './getProjectEpd'

export const projectEpdMock: MockedResponse[] = [
  {
    request: {
      query: GetProjectEpdDocument,
      variables: {
        projectId: 'acfa456f-6628-4c0d-a0c8-1a53b1a46785',
        epdId: 'dfba0c16-a3e1-4a91-9814-d54633ddca8f',
      },
    },
    result: getProjectEpd,
  },
]
