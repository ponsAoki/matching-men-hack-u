import { HeaderLine } from "@/components/elements/commons/header/Header";
import { UserRepository } from "@/modules/user/user.repository";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { User } from "../../../../types/user";

const userDetail = () => {
  const router = useRouter();
  const { uid } = router.query;
  console.log(uid)
  const [user, setUser] = useState<User>();

  useEffect(() => {
    (async () => {
      const user = await UserRepository.find(uid);
      setUser(user);
    })()
  }, [uid]);


  return (
    <>
      <HeaderLine />
      <div className="flex justify-center w-full">
        <div className=" w-3/5 justify-center">
        <div className="">
          <p className="">名前</p>
          <p>{user?.name}</p>
        </div>
        <div className="flex m-4 justify-between">
          <button className="bg-white p-4 table rounded-2xl ml-5 hover:bg-green-50">話を聞きたい</button>
          <button onClick={() => router.back()} className="bg-white p-4 table rounded-2xl mr-5">戻る</button>
        </div>
        </div>
      </div>
    </>
  )
}


export default userDetail;
