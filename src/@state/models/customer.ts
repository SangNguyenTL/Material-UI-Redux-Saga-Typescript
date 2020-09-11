import { Timestamp, SoftDelete } from './common';

export type CustomerForm = {
  address: {
    country: string;
    state: string;
    city: string;
    street: string;
  };
  avatarUrl: string;
  createdAt: number;
  email: string;
  name: string;
  phone: string;
};

export type Customer = CustomerForm &
  Timestamp &
  SoftDelete & {
    id: number;
  };
