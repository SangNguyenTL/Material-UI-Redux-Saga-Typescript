import produce, { Draft } from 'immer';
import { ActionType, getType } from 'typesafe-actions';
import * as actions from './actions';
import { CustomerState, initialCustomerState } from './model';

const customer = produce(
  (draft: Draft<CustomerState>, action: ActionType<typeof actions>) => {
    switch (action.type) {
      case getType(actions.getCustomerList.request): {
        draft.list.loading = true;
        return draft;
      }
      case getType(actions.getCustomerList.success): {
        draft.list.loading = true;
        draft.list.response = action.payload;
        return draft;
      }
      case getType(actions.getCustomerList.failure): {
        draft.list.loading = false;
        draft.list.errors = action.payload;
        return draft;
      }
      case getType(actions.getCustomerDetails.request): {
        draft.details.loading = true;
        draft.details.response = undefined;
        draft.details.errors = undefined;
        return draft;
      }
      case getType(actions.getCustomerDetails.success): {
        draft.details.loading = true;
        draft.details.response = action.payload;
        return draft;
      }
      case getType(actions.getCustomerDetails.failure): {
        draft.details.loading = false;
        draft.details.errors = action.payload;
        return draft;
      }
      case getType(actions.createCustomer.request): {
        draft.details.loading = true;
        return draft;
      }
      case getType(actions.createCustomer.success): {
        draft.create.loading = false;
        draft.create.response = action.payload;
        return draft;
      }
      case getType(actions.createCustomer.failure): {
        draft.create.loading = false;
        draft.create.errors = action.payload;
        return draft;
      }
      case getType(actions.updateCustomer.request): {
        draft.update.loading = true;
        return draft;
      }
      case getType(actions.updateCustomer.success): {
        draft.update.loading = false;
        draft.update.response = action.payload;
        return draft;
      }
      case getType(actions.updateCustomer.failure): {
        draft.update.loading = false;
        draft.update.errors = action.payload;
        return draft;
      }
      case getType(actions.deleteCustomer.request): {
        draft.delete.loading = true;
        return draft;
      }
      case getType(actions.deleteCustomer.success): {
        draft.delete.loading = false;
        draft.delete.response = action.payload;
        return draft;
      }
      case getType(actions.deleteCustomer.failure): {
        draft.details.loading = false;
        draft.details.errors = action.payload;
        return draft;
      }
      default: {
        return draft;
      }
    }
  },
  initialCustomerState
);

export default customer;
