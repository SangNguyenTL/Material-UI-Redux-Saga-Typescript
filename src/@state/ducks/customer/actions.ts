import { createAsyncAction } from 'typesafe-actions'
import { Customer } from 'src/@state/models/customer'
import {
  CustomerBulkRequest,
  CustomerBulkResponse,
  CustomerCreateResponse,
  CustomerDeleteResponse,
  CustomerDetailResponse,
  CustomerListRequest,
  CustomerListResponse,
  CustomerUpdateResponse,
} from 'src/@state/api-models/customer'
import { AxiosError } from 'axios'
import * as types from './types'

// Create the set of async actions
export const getCustomerList = createAsyncAction(
  types.FETCH_LIST,
  types.FETCH_LIST_SUCCESS,
  types.FETCH_LIST_FAILED
)<CustomerListRequest, CustomerListResponse, AxiosError>()

// Create the set of async actions
export const getCustomerDetails = createAsyncAction(
  types.FETCH_DETAILS,
  types.FETCH_DETAILS_SUCCESS,
  types.FETCH_DETAILS_FAILED
)<number | undefined, CustomerDetailResponse, AxiosError>()

// Create the set of async actions
export const createCustomer = createAsyncAction(
  types.CREATE,
  types.CREATE_SUCCESS,
  types.CREATE_FAILED
)<Customer, CustomerCreateResponse, AxiosError>()

// Create the set of async actions
export const updateCustomer = createAsyncAction(
  types.UPDATE,
  types.UPDATE_SUCCESS,
  types.UPDATE_FAILED
)<Customer, CustomerUpdateResponse, AxiosError>()

// Create the set of async actions
export const deleteCustomer = createAsyncAction(
  types.DELETE,
  types.DELETE_SUCCESS,
  types.DELETE_FAILED
)<number, CustomerDeleteResponse, AxiosError>()

export const bulkCustomers = createAsyncAction(
  types.BULK,
  types.BULK_SUCCESS,
  types.BULK_FAILED
)<CustomerBulkRequest, CustomerBulkResponse, AxiosError>()
