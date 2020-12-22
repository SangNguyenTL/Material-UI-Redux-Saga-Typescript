import produce, { Draft } from 'immer'
import { SuccessResponse } from 'src/@state/api-models/auth'
import { ActionType, getType } from 'typesafe-actions'
import actions from './actions'
import { AuthState, initialAuthState } from './model'

const auth = produce(
  (draft: Draft<AuthState>, action: ActionType<typeof actions>) => {
    switch (action.type) {
      case getType(actions.login.request): {
        draft.login.loading = true
        draft.login.response = undefined
        draft.login.errors = undefined
        draft.user = undefined
        draft.isLogged = false
        return draft
      }
      case getType(actions.login.success): {
        draft.login.loading = false
        draft.login.response = action.payload
        draft.login.errors = undefined
        draft.user = (action.payload.data as SuccessResponse).user
        draft.isLogged = true
        return draft
      }
      case getType(actions.login.failure): {
        draft.login.loading = false
        draft.login.errors = action.payload
        draft.login.show = true
        return draft
      }
      case getType(actions.register.request): {
        draft.register.loading = true
        draft.register.response = undefined
        draft.register.errors = undefined
        draft.isLogged = false
        draft.user = undefined
        return draft
      }
      case getType(actions.register.success): {
        draft.register.loading = false
        draft.register.response = action.payload
        draft.isLogged = true
        draft.user = (action.payload.data as SuccessResponse).user
        draft.register.errors = undefined
        return draft
      }
      case getType(actions.register.failure): {
        draft.register.loading = false
        draft.register.errors = action.payload
        draft.register.show = true
        return draft
      }
      case getType(actions.clean.register): {
        draft.register = { ...draft.register, ...action.payload }
        return draft
      }
      case getType(actions.clean.login): {
        draft.login = { ...draft.register, ...action.payload }
        return draft
      }
      case getType(actions.setLogged): {
        draft.isLogged = action.payload
        return draft
      }
      default: {
        return draft
      }
    }
  },
  initialAuthState
)

export default auth
