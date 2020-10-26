import { fork, all, AllEffect, ForkEffect } from 'redux-saga/effects'
import customerSaga from './customer/sagas'

// We `fork()` these tasks so they execute in the background.
export function* rootSagas(): Generator<AllEffect<ForkEffect>> {
  yield all([
    fork(customerSaga),
    // `fork()` any other store sagas down here...
  ])
}

export default rootSagas
