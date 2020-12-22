/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect'
import { StateAll } from '../models'
import { UserState, initialUserState } from './model'

const rootSelector = (state: StateAll) => state.user || initialUserState

const getProfile = createSelector(rootSelector, (userState: UserState) => {
  return userState.profile
})

const userSelectors = {
  root: createSelector(rootSelector, (userState: UserState) => {
    return userState
  }),
  getProfile,
}

export default userSelectors
