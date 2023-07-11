import { MockedResponse } from '@apollo/client/testing'
import { GetProjectMembersDocument } from '../dataAccess'
import getMember from './getProjectMember'

export const projectMemberMock: MockedResponse = {
  request: {
    query: GetProjectMembersDocument,
    variables: {
      projectId: 'acfa456f-6628-4c0d-a0c8-1a53b1a46785',
    },
  },
  result: getMember,
}
