/* eslint-disable @typescript-eslint/no-empty-interface */
import { AxiosError } from 'axios'

export type BaseState<T, K = AxiosError> = {
  loading: boolean
  response?: T
  errors?: K
  show: boolean
}

export const initialState = {}

export interface StateAll {}
