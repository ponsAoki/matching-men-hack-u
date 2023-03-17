import { CorporateHeaderLine } from "@/components/layouts/corporation/CorporateHeaderLine";
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
  }, [corpolation]);

  if (!uid) return <Loading />;

  return (
    <>
      <CorporateHeaderLine />
      <UserList />
      <div className="justify-center flex mt-10">
        <button className="bg-green-50 p-4 rounded-md" onClick={authRepository.logOut}>ログアウト</button>
      </div>
    </>
  );
};

export default corpolationHome;
