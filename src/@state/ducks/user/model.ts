import { IUser, UserProfileResponse } from 'src/@state/api-models/user'
import { BaseState } from '../models'

export type UserProfileState = BaseState<UserProfileResponse>

export type UserState = {
  profile: UserProfileState & { data: IUser }
}

export const initialUserState = {
  profile: { loading: undefined, reponse: undefined, data: undefined },
}

declare module './../models' {
  interface StateAll {
    user: UserState
  }
}
