/* eslint-disable @typescript-eslint/no-explicit-any */
import qs from 'qs'
import {
  all,
  AllEffect,
  call,
  ForkEffect,
  put,
  select,
  takeLatest,
} from 'redux-saga/effects'
import API_ENDPOINTS from 'src/@api-endpoints'
import { axiosInstance } from '../../utils/axios'
import * as actions from './actions'
import { getCustomerPagination } from './selectors'

// Handle request saga
function* getCustomerList(
  action: ReturnType<typeof actions.getCustomerList.request>
): Generator {
  try {
    const response = yield call(
      axiosInstance.get,
      API_ENDPOINTS.CUSTOMER.List,
      {
        params: action.payload,
        paramsSerializer: (params) => qs.stringify(params),
      }
    )

    yield put(actions.getCustomerList.success((response as any).data))
  } catch (err) {
    yield put(actions.getCustomerList.failure(err))
  }
}

function* getCustomerDetails(
  action: ReturnType<typeof actions.getCustomerDetails.request>
): Generator {
  try {
    let response: any = {}
    if (action.payload)
      response = yield call(
        axiosInstance.get,
        API_ENDPOINTS.CUSTOMER.Details.replace('{id}', `${action.payload}`)
      )

    yield put(actions.getCustomerDetails.success((response as any).data))
  } catch (err) {
    yield put(actions.getCustomerDetails.failure(err))
  }
}

function* createCustomer(
  action: ReturnType<typeof actions.createCustomer.request>
): Generator {
  try {
    const response = yield call(
      axiosInstance.post,
      API_ENDPOINTS.CUSTOMER.Create,
      action.payload
    )

    yield put(actions.createCustomer.success((response as any).data))
    const pagination = yield select(getCustomerPagination)
    yield put(actions.getCustomerList.request({ ...(pagination as any) }))
  } catch (err) {
    yield put(actions.createCustomer.failure(err))
  }
}

function* updateCustomer(
  action: ReturnType<typeof actions.updateCustomer.request>
): Generator {
  try {
    const response = yield call(
      axiosInstance.put,
      API_ENDPOINTS.CUSTOMER.Update.replace('{id}', `${action.payload.id}`),
      action.payload
    )

    yield put(actions.updateCustomer.success((response as any).data))
    const pagination = yield select(getCustomerPagination)
    yield put(actions.getCustomerList.request({ ...(pagination as any) }))
  } catch (err) {
    yield put(actions.updateCustomer.failure(err))
  }
}

function* deleteCustomer(
  action: ReturnType<typeof actions.deleteCustomer.request>
): Generator {
  try {
    const response = yield call(
      axiosInstance.delete,
      API_ENDPOINTS.CUSTOMER.Delete.replace('{id}', `${action.payload}`)
    )

    yield put(actions.deleteCustomer.success((response as any).data))
    const pagination = yield select(getCustomerPagination)
    yield put(actions.getCustomerList.request({ ...(pagination as any) }))
  } catch (err) {
    yield put(actions.deleteCustomer.failure(err))
  }
}

// Main saga
export default function* customerSaga(): Generator<AllEffect<ForkEffect>> {
  yield all([
    takeLatest(actions.getCustomerList.request, getCustomerList),
    takeLatest(actions.getCustomerDetails.request, getCustomerDetails),
    takeLatest(actions.createCustomer.request, createCustomer),
    takeLatest(actions.updateCustomer.request, updateCustomer),
    takeLatest(actions.deleteCustomer.request, deleteCustomer),
  ])
}
