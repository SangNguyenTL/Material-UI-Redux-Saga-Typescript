import {
  AuthLoginResponse,
  AuthRegisterResponse,
} from 'src/@state/api-models/auth'
import { IUser } from 'src/@state/api-models/user'
import storage from 'src/@state/utils/localStorage'
import { BaseState } from '../models'

export type AuthLoginState = BaseState<AuthLoginResponse>
export type AuthRegisterState = BaseState<AuthRegisterResponse>

export type AuthState = {
  login: AuthLoginState
  register: AuthRegisterState
  isLogged: boolean
  user?: IUser
}

export const initialAuthState = {
  login: { loading: undefined, reponse: undefined },
  register: { loading: undefined, reponse: undefined },
  isLogged: Boolean(storage.getToken()),
  user: undefined,
}

declare module './../models' {
  interface StateAll {
    auth: AuthState
  }
}
