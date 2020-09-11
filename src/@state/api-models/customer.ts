import {
  CommonRequest,
  CommonResponse,
  SearchRequest,
  PaginationResponse,
} from './common';
import { Customer, CustomerForm } from '../models/customer';

export type CustomerListRequest = (SearchRequest & {}) | undefined;
export type CustomerListResponse = CommonResponse & {
  data: {
    list: Customer[];
    pagination: PaginationResponse;
  };
};

export type CustomerCreateRequest = CommonRequest & CustomerForm;

export type CustomerUpdateRequest = CommonResponse &
  CustomerForm & {
    id: number;
  };

export type CustomerCreateResponse = CommonResponse & {
  data: Customer;
};

export type CustomerUpdateResponse = CommonRequest & {
  data: Customer;
};

export type CustomerDetailResponse = CommonResponse & {
  data: Customer;
};

export type CustomerDetailRequest = CommonRequest & {
  id: string;
};

export type CustomerDeleteRequest = CommonRequest & {
  id: string;
};

export type CustomerDeleteResponse = CommonResponse;

export type CustomerBulkRequest = {
  action: string;
  ids: number[];
};
export type CustomerBulkResponse = CommonResponse;
