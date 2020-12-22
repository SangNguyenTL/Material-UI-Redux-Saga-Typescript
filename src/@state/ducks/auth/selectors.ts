/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect'
import { StateAll } from '../models'
import { AuthState, initialAuthState } from './model'

const rootSelector = (state: StateAll) => state.auth || initialAuthState

const getAuthLogin = createSelector(rootSelector, (authState: AuthState) => {
  return authState.login
})

const getAuthRegister = createSelector(rootSelector, (authState: AuthState) => {
  return authState.register
})

const authSelectors = {
  root: createSelector(rootSelector, (authState: AuthState) => {
    return authState
  }),
  getAuthLogin,
  getAuthRegister,
}

export default authSelectors
