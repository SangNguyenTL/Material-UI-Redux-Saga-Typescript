import { combineReducers } from 'redux'

import authReducers from './auth/reducers'
import userReducers from './user/reducers'

export const rootReducers = combineReducers({
  auth: authReducers,
  user: userReducers,
})

export default rootReducers
