import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { Corporation } from "../types/corporation";

export type CorporationStateType = Corporation | null;

const { persistAtom } = recoilPersist({ key: "CorporationState" })

export const CorporationState = atom<CorporationStateType>({
  key: "CorporationState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});
