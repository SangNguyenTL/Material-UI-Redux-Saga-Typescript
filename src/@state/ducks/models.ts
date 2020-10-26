/* eslint-disable @typescript-eslint/no-empty-interface */
import { AxiosError } from 'axios'

export type BaseState<T> = {
  loading: boolean
  response?: T
  errors?: AxiosError
}

export const initialState = {}

export interface StateAll {}
