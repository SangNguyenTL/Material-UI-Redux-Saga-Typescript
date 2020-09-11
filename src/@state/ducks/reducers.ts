import { combineReducers } from 'redux';

import customerReducers from './customer/reducers';

export const rootReducers = combineReducers({
  customer: customerReducers,
});
