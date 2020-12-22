import { CommonResponse } from './common'

interface IExtraDetails {
  phone: string
  birthday: string
  firstName: string
  lastName: string
  avatar: string
  gender: string
}

interface ISocial {
  facebook: string
  google: string
}

interface IShippingAddress {
  country_abbreviation: string
  street_address_1: string
  street_address_2: string
  city: string
  region: string
  state: string
  country: string
  zip_code: string
}

interface IRating {
  buyer_rating: {
    smile: number
    neutral: number
    frown: number
    details: [
      {
        buyer_id: string
        transaction_ref: string
        comment: string
        level: number
      }
    ]
  }
  seller_rating: {
    smile: number
    neutral: number
    frown: number
    details: [
      {
        seller_id: string
        transaction_ref: string
        comment: string
        level: number
      }
    ]
  }
}

type ConnectedAccountIssuesType = {
  type: string
  description: string
}

type RequirementsType = {
  eventually_due: [string]
  currently_due: [string]
  past_due: [string]
  disabled_reason: string
  current_deadline: number
}

interface IConnectedAccount {
  provider: number
  id: string
  issues: [ConnectedAccountIssuesType]
  status: string
  requirements: RequirementsType
  country: string
}

interface IMyReferral {
  counter: number
  available_free_transactions: number
  total_free_transactions: number
  url: string
}

interface IRoleForm {
  _id: number
  name: string
  permissions: string[]
  status: 'ACTIVE' | 'DISABLE'
}

export interface IRole extends IRoleForm {
  _id: number
}

export interface IUser
  extends IExtraDetails,
    ISocial,
    IShippingAddress,
    IRating {
  _id: string
  email: string
  password: string
  role: IRole
  connected_account: IConnectedAccount
  my_referral: IMyReferral
  is_bank_account_connected: boolean
  referral_by_id: string
  device_token: string
  tokens: [
    {
      kind: string
      accessToken: string
    }
  ]
}

export type UserProfileResponse = CommonResponse<IUser>
