/* eslint-disable import/prefer-default-export */
import { AxiosError } from 'axios'
import {
  AuthLoginRequest,
  AuthLoginResponse,
  AuthRegisterRequest,
  AuthRegisterResponse,
} from 'src/@state/api-models/auth'
import { createAction, createAsyncAction } from 'typesafe-actions'
import { AuthState } from './model'
import AUTH from './types'

const authAction = {
  login: createAsyncAction(AUTH.LOGIN, AUTH.LOGIN_SUCCESS, AUTH.LOGIN_FAILED)<
    AuthLoginRequest,
    AuthLoginResponse,
    AxiosError
  >(),
  register: createAsyncAction(
    AUTH.REGISTER,
    AUTH.REGISTER_SUCCESS,
    AUTH.REGISTER_FAILED
  )<AuthRegisterRequest, AuthRegisterResponse, AxiosError>(),
  clean: {
    register: createAction(AUTH.REGISTER_CLEAN)<
      Partial<AuthState['register']>
    >(),
    login: createAction(AUTH.REGISTER_CLEAN)<Partial<AuthState['login']>>(),
  },
  setLogged: createAction(AUTH.SET_LOGGED)<boolean>(),
}

export default authAction
