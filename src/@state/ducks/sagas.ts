import { fork, all, AllEffect, ForkEffect } from 'redux-saga/effects'
import authSaga from './auth/sagas'
import userSaga from './user/sagas'

// We `fork()` these tasks so they execute in the background.
export function* rootSagas(): Generator<AllEffect<ForkEffect>> {
  yield all([
    fork(authSaga),
    fork(userSaga),
    // `fork()` any other store sagas down here...
  ])
}

export default rootSagas
