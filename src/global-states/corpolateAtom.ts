import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { Corpolation } from "../../types/corpolation";

export type CorpolationStateType = Corpolation | null;

const { persistAtom } = recoilPersist({ key: "CorpolationState" })

export const CorpolationState = atom<CorpolationStateType>({
  key: "CorpolationState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});
