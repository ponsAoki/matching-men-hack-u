import { HeaderLine } from "@/components/elements/commons/header/Header";
import { Loading } from "@/components/pages/Loading";
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

  if(!user) return <Loading />

  return (
    <>
      <HeaderLine />
      <div className="flex justify-center w-full my-5">
        <div className="flex-col w-3/5 justify-center mt-10 rounded-lg bg-white">
          <div className="text-center text-2xl my-5">
            <p className="mb-2">名前</p>
            <p className="">{user?.name}</p>
          </div>
          <div className="text-center text-2xl mb-5">
            <p className="mb-2">大学・専門</p>
            <p>{user?.university}</p>
          </div>
          <div className="text-center text-2xl mb-5">
            <p className="mb-2">卒業予定度</p>
            <p>{user?.graduateYear}</p>
          </div>
          <div className="text-center text-2xl mb-5">
            <p className="mb-2">githubアカウント</p>
            <p>{user?.github}</p>
          </div>
          <div className="text-center text-2xl mb-5">
            <p className="mb-2">プログラミングスキル</p>
            <div className="flex justify-center mx-10">
              { user?.programingSkills?.map((skill) => <p className="bg-red-50 ml-2 table rounded-lg p-1">{skill}</p>)}
            </div>
          </div>
          <div className="flex m-4 justify-between">
            <button className="p-4 table rounded-2xl ml-5 bg-green-50">話を聞きたい</button>
            <button onClick={() => router.back()} className="bg-green-50 p-4 table rounded-2xl mr-5">戻る</button>
          </div>
        </div>
      </div>
    </>
  )
}


export default userDetail;
