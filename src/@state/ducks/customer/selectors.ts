import { createSelector } from 'reselect'
import { StateAll } from '../models'
import {
  CustomerState,
  initialCustomerState,
  initialPaginationState,
} from './model'

const rootSelector = (state: StateAll) => state.customer || initialCustomerState

export const getCustomerList = createSelector(
  rootSelector,
  (customerState: CustomerState) => {
    return customerState.list
      ? customerState.list.response
      : initialCustomerState.list.response
  }
)

export const getCustomerPagination = createSelector(
  rootSelector,
  (customerState: CustomerState) => {
    return customerState.list
      ? customerState.list.response?.data?.pagination
      : { ...initialPaginationState }
  }
)

export const getCustomerDetails = createSelector(
  rootSelector,
  (customerState: CustomerState) => {
    return customerState.details.response
  }
)
