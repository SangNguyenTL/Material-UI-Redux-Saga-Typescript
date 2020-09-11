import { fork, all } from 'redux-saga/effects';
import customerSaga from './customer/sagas';

// We `fork()` these tasks so they execute in the background.
export function* rootSagas() {
  yield all([
    fork(customerSaga),
    // `fork()` any other store sagas down here...
  ]);
}
