import { CommonResponse } from './common'
import { IUser } from './user'

export type AuthLoginRequest = {
  email: string
  password: string
}

export type AuthRegisterRequest = {
  firstName: string
  lastName: string
  email: string
  password: string
}

export type ErrorField = {
  id: string
  defaultMessage: string
  values: Record<string, string>
}

export type SuccessResponse = {
  user: IUser
  token: string
  expiresIn: number
}

export type FailedResponse = ErrorField[]

export type AuthLoginResponse<
  T = SuccessResponse | FailedResponse
> = CommonResponse<T>

export type AuthRegisterResponse<
  T = SuccessResponse | FailedResponse
> = CommonResponse<T>
