import { BaseState } from '../models'
import {
  CustomerListResponse,
  CustomerDetailResponse,
  CustomerDeleteResponse,
  CustomerUpdateResponse,
  CustomerCreateResponse,
  CustomerBulkResponse,
} from '../../api-models/customer'

export type CustomerDetails = BaseState<CustomerDetailResponse>
export type CustomerList = BaseState<CustomerListResponse>
export type CustomerCreate = BaseState<CustomerCreateResponse>
export type CustomerUpdate = BaseState<CustomerUpdateResponse>
export type CustomerDelete = BaseState<CustomerDeleteResponse>
export type CustomerBulk = BaseState<CustomerBulkResponse>

export type CustomerState = {
  list: CustomerList
  details: CustomerDetails
  create: CustomerCreate
  update: CustomerUpdate
  delete: CustomerDelete
  bulk: CustomerBulk
}

export const initialCustomerState = {
  list: { loading: false, response: undefined },
  details: { loading: false, response: undefined },
  create: { loading: false, response: undefined },
  update: { loading: false, response: undefined },
  delete: { loading: false, response: undefined },
  bulk: { loading: false, response: undefined },
}

export const initialPaginationState = {
  items_per_page: 5,
  page: 1,
  total_pages: 0,
  total_items: 0,
}

declare module './../models' {
  interface StateAll {
    customer: CustomerState
  }
}
