import produce, { Draft } from 'immer'
import { ActionType, getType } from 'typesafe-actions'
import actions from './actions'
import { UserState, initialUserState } from './model'

const auth = produce(
  (draft: Draft<UserState>, action: ActionType<typeof actions>) => {
    switch (action.type) {
      case getType(actions.profile.request): {
        draft.profile.loading = true
        draft.profile.response = undefined
        draft.profile.errors = undefined
        return draft
      }
      case getType(actions.profile.success): {
        draft.profile.loading = false
        draft.profile.response = action.payload
        draft.profile.errors = undefined
        draft.profile.data = action.payload.data
        return draft
      }
      case getType(actions.profile.failure): {
        draft.profile.loading = false
        draft.profile.response = undefined
        draft.profile.errors = action.payload
        return draft
      }
      case getType(actions.setProfile): {
        draft.profile.data = action.payload
        return draft
      }
      default: {
        return draft
      }
    }
  },
  initialUserState
)

export default auth
