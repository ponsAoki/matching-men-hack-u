import { HeaderLine } from "@/components/elements/commons/header/Header";
import { UserList } from "@/components/pages/corporation/UserList";
import { Loading } from "@/components/pages/Loading";
import { useCorpolateAuth } from "@/hooks/useCorpolateAuth";
import { authRepository } from "@/modules/auth.repository";
import { useEffect, useState } from "react";

const corpolationHome = () => {
  const corpolation = useCorpolateAuth();
  const [uid, setUid] = useState<string>();

  useEffect(() => {
    setUid(corpolation?.uid);
  }, [corpolation])

  if (!uid) return <Loading />;

  return (
    <>
      <HeaderLine />
      <UserList />
      <button onClick={authRepository.logOut}>ログアウト</button>
    </>
  )
}

export default corpolationHome;
