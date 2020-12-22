/* eslint-disable import/prefer-default-export */
import { AxiosError } from 'axios'
import { IUser, UserProfileResponse } from 'src/@state/api-models/user'
import { createAction, createAsyncAction } from 'typesafe-actions'
import USER from './types'

const userAction = {
  profile: createAsyncAction(
    USER.PROFILE,
    USER.PROFILE_SUCCESS,
    USER.PROFILE_FAILED
  )<void, UserProfileResponse, AxiosError>(),
  setProfile: createAction(USER.SET_PROFILE)<IUser>(),
}

export default userAction
