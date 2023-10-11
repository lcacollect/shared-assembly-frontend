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
        a1a3: false,
        a4: false,
        a5: false,
        b1: false,
        b2: false,
        b3: false,
        b4: false,
        b5: false,
        b6: false,
        b7: false,
        c1: false,
        c2: false,
        c3: false,
        c4: false,
        d: false,
      },
    },
    result: getProjectEpd,
  },
]
