import { atom } from "recoil";

import { User } from "../../types/user";
export type UserStateType = User | null


export const UserState = atom<UserStateType>({
  key: 'UserState',
  default: null,
})
