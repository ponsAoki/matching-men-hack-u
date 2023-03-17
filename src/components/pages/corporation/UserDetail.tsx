import { APPLY_FIRST_MESSAGE } from "@/constants/constants";
import { CorpolationState } from "@/global-states/corpolateAtom";
import { ChatRepository } from "@/modules/chat/chat.repository";
import { CorpolationRepositry } from "@/modules/corpolation/corpolation.repository";
import { UserRepository } from "@/modules/user/user.repository";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { User } from "../../../../types/user";
import { Loading } from "../Loading";

export const UserDetailPage = (): JSX.Element => {
  const router = useRouter();
  const { uid } = router.query;
  const corpolationStateVal = useRecoilValue(CorpolationState);
  const [corpolationState, setCorpolationState] =
    useRecoilState(CorpolationState);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    (async () => {
      const user = await UserRepository.find(uid);
      setUser(user);
    })();
  }, [uid]);

  if (!user) return <Loading />;

  const applyFor = async () => {
    if (!corpolationStateVal?.uid || !corpolationStateVal?.corpolation_name)
      throw new Error("CorpolationStateのuidかnameが空");
    const roomId = `${corpolationStateVal?.uid}*${user.uid}`;

    // この辺の処理はrepositoryとかserviceに切り出したい
    await ChatRepository.post(
      corpolationStateVal.uid,
      corpolationStateVal.corpolation_name,
      roomId,
      APPLY_FIRST_MESSAGE
    );
    await CorpolationRepositry.update(corpolationStateVal?.uid, {
      ...corpolationStateVal,
      room_ids: corpolationStateVal.room_ids
        ? [...corpolationStateVal.room_ids, roomId]
        : [roomId],
    });
    // if (!recruitUser) throw new Error("recruitUserなし");
    await UserRepository.update(user.uid, {
      ...user,
      room_ids: user.room_ids ? [...user.room_ids, roomId] : [roomId],
    });
    setCorpolationState((prev): any => {
      return {
        ...prev,
        room_ids: prev?.room_ids ? [...prev.room_ids, roomId] : [roomId],
      };
    });
    router.push(`/corpolation/chat/${roomId}`);
  };

  return (
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
            {user?.programingSkills?.map((skill) => (
              <p key={skill} className="bg-red-50 ml-2 table rounded-lg p-1">
                {skill}
              </p>
            ))}
          </div>
        </div>
        <div className="flex m-4 justify-between">
          <button
            className="p-4 table rounded-2xl ml-5 bg-green-50"
            onClick={applyFor}
          >
            話を聞きたい
          </button>
          <button
            onClick={() => router.back()}
            className="bg-green-50 p-4 table rounded-2xl mr-5"
          >
            戻る
          </button>
        </div>
      </div>
    </div>
  );
};
