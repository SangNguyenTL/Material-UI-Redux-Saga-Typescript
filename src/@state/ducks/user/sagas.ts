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
import { UserProfileResponse } from 'src/@state/api-models/user'
import axiosInstance from 'src/@state/utils/axios'
import actions from './actions'

function* fetchProfile(): Generator {
  try {
    const response = yield call(axiosInstance.get, API_ENDPOINTS.USER.PROFILE)
    const { data: result } = response as { data: UserProfileResponse }

    yield put(actions.profile.success(result))
    yield put(actions.setProfile(result.data))
  } catch (err) {
    yield put(actions.profile.failure(err))
  }
}

// Main saga
export default function* authSaga(): Generator<AllEffect<ForkEffect>> {
  yield all([takeLatest(actions.profile.request, fetchProfile)])
}
