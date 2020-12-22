/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  all,
  AllEffect,
  call,
  ForkEffect,
  put,
  takeLatest,
} from 'redux-saga/effects'
import API_ENDPOINTS from 'src/@api-endpoints'
import {
  AuthLoginResponse,
  AuthRegisterResponse,
  FailedResponse,
  SuccessResponse,
} from 'src/@state/api-models/auth'
import axiosInstance from 'src/@state/utils/axios'
import storage from 'src/@state/utils/localStorage'
import userAction from '../user/actions'
import actions from './actions'

function isFailedRegister(
  response: any
): response is AuthRegisterResponse<FailedResponse> {
  return response.statusCode !== 200
}

function isFailedLogin(
  response: any
): response is AuthLoginResponse<FailedResponse> {
  return response.statusCode !== 200
}

function* login(action: ReturnType<typeof actions.login.request>): Generator {
  try {
    const response = yield call(axiosInstance.post, API_ENDPOINTS.AUTH.Login, {
      ...action.payload,
    })
    const { data: result } = response as { data: AuthLoginResponse }

    if (isFailedLogin(result)) {
      const message = result.data.map((e) => e.defaultMessage).join(', ')
      throw new Error(message)
    }
    storage.setToken((result.data as SuccessResponse).token)
    yield put(actions.login.success(result))
    yield put(userAction.setProfile((result.data as SuccessResponse).user))
  } catch (err) {
    yield put(actions.login.failure(err))
  }
}

function* register(
  action: ReturnType<typeof actions.register.request>
): Generator {
  try {
    const response = yield call(
      axiosInstance.post,
      API_ENDPOINTS.AUTH.Register,
      {
        ...action.payload,
      }
    )
    const { data: result } = response as { data: AuthRegisterResponse }

    if (isFailedRegister(result)) {
      const message = result.data.map((e) => e.defaultMessage).join(', ')
      throw new Error(message)
    }
    storage.setToken((result.data as SuccessResponse).token)
    yield put(actions.register.success(result))
    yield put(userAction.setProfile((result.data as SuccessResponse).user))
  } catch (err) {
    yield put(actions.register.failure(err))
  }
}

// Main saga
export default function* authSaga(): Generator<AllEffect<ForkEffect>> {
  yield all([takeLatest(actions.login.request, login)])
  yield all([takeLatest(actions.register.request, register)])
}
