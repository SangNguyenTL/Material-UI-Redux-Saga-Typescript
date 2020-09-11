export const FETCH_DETAILS = 'customer/details';
export const FETCH_DETAILS_SUCCESS = 'customer/details_success';
export const FETCH_DETAILS_FAILED = 'customer/details_failed';

export const FETCH_LIST = 'customer/list';
export const FETCH_LIST_SUCCESS = 'customer/list_success';
export const FETCH_LIST_FAILED = 'customer/list_failed';

export const CREATE = 'customer/create';
export const CREATE_SUCCESS = 'customer/create_success';
export const CREATE_FAILED = 'customer/create_failed';

export const UPDATE = 'customer/update';
export const UPDATE_SUCCESS = 'customer/update_success';
export const UPDATE_FAILED = 'customer/update_failed';

export const DELETE = 'customer/detele';
export const DELETE_SUCCESS = 'customer/detele_success';
export const DELETE_FAILED = 'customer/detele_failed';

export const BULK = 'customer/bulk';
export const BULK_SUCCESS = 'customer/bulk_success';
export const BULK_FAILED = 'customer/bulk_failed';

export type CustomerAction =
  | typeof FETCH_DETAILS
  | typeof FETCH_DETAILS_FAILED
  | typeof FETCH_DETAILS_SUCCESS
  | typeof FETCH_LIST
  | typeof FETCH_LIST_FAILED
  | typeof FETCH_LIST_SUCCESS
  | typeof CREATE
  | typeof CREATE_FAILED
  | typeof CREATE_SUCCESS
  | typeof UPDATE
  | typeof UPDATE_FAILED
  | typeof UPDATE_SUCCESS
  | typeof DELETE
  | typeof DELETE_FAILED
  | typeof DELETE_SUCCESS
  | typeof BULK
  | typeof BULK_FAILED
  | typeof BULK_SUCCESS;
