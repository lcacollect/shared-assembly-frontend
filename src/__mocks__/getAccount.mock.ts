import { MockedResponse } from '@apollo/client/testing'
import { GetAccountDocument } from '../dataAccess'
import getAccount from './getAccount'

export const accountMock: MockedResponse = {
  request: {
    query: GetAccountDocument,
  },
  result: getAccount,
}
