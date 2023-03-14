import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { UserState, UserStateType } from "@/global-states/atoms";
import { useAuth } from "@/hooks/useAuth";
import { authRepository } from "@/modules/auth.repository";

export const Main = () => {
  const userAtomVal = useRecoilValue<UserStateType>(UserState);

  return (
    <div>
      <p>Main </p>
      <p>ユーザーid: {userAtomVal?.uid}</p>
      <br />
      <button onClick={authRepository.logOut}>サインアウト</button>
    </div>
  );
};
