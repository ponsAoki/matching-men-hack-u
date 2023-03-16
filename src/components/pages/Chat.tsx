import { UserState } from "@/global-states/atoms";
import { ChatRepository } from "@/modules/chat/chat.repository";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilValue } from "recoil";
import { Loading } from "./Loading";

export const ChatPage = (): JSX.Element => {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const { roomId } = router.query;
  const userStateVal = useRecoilValue(UserState);
  const [chatHistories, setChatHistories] = useState<any[]>();
  const [chatOpponents, setChatOpponents] = useState<any[]>();

  useEffect(() => {
    if (userStateVal?.room_ids) {
      const opponents = ChatRepository.findManyRoomHistories(
        userStateVal.room_ids,
        userStateVal.uid
      );
      setChatOpponents(opponents);
    }
  }, [userStateVal?.room_ids]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      if (typeof roomId !== "string") return;
      await ChatRepository.findOneRoomHistory(roomId, setChatHistories);
      setIsLoading(false);
    })();
  }, [roomId, setIsLoading]);

  if (isLoading) return <Loading />;

  const onMessageSubmit = async (submitData: any) => {
    if (!userStateVal?.uid || !userStateVal?.name)
      throw new Error("UserStateのuidかnameが空");
    await ChatRepository.post(
      userStateVal.uid,
      userStateVal.name,
      roomId as string,
      submitData.message
    );
  };

  return (
    <div className="flex w-screen h-screen">
      {/* いろんな人とのやりとりリスト */}
      <div className="w-1/3 flex flex-col gap-8 p-8">
        {chatOpponents?.map((opponent) => (
          <Link
            key={opponent.roomId}
            href={`/chat/${opponent.roomId}`}
            className="flex items-center gap-4 border-b border-black pb-4"
          >
            <Image
              src="/avatar.gif"
              alt="人物アイコンのロゴ"
              width={40}
              height={40}
              className="rounded-full border border-black"
            />
            <div>{opponent.opponentName}</div>
          </Link>
        ))}
      </div>
      {/* 一対一のルーム */}
      <div className="w-2/3 grid grid-cols-1 gap-8 p-8">
        {chatHistories?.map((chat: any) => (
          <div
            key={`${String(chat.timestamp)}`}
            className={`w-1/2
                ${
                  userStateVal?.uid === chat.senderUid
                    ? "justify-self-end"
                    : "justify-self-start"
                }
              `}
          >
            <div className="flex items-center gap-4 mb-4">
              <Image
                src="/avatar.gif"
                alt="人物アイコンのロゴ"
                width={40}
                height={40}
                className="rounded-full border border-black"
              />
              <div>{chat.senderName}</div>
            </div>
            <div
              className={`ml-10 p-4 bg-white rounded-xl ${
                userStateVal?.uid === chat.senderUid
                  ? "rounded-tr-none"
                  : "rounded-tl-none"
              }`}
            >
              {chat.message}
            </div>
          </div>
        ))}
        {/* 送信フォーム */}
        <form className="mr-12" onSubmit={handleSubmit(onMessageSubmit)}>
          <div className="flex bg-gray-100 rounded-2xl">
            <textarea
              className="w-full bg-inherit rounded-2xl outline-none p-4"
              {...register("message")}
            />
            <button type="submit">
              <Image
                src="/paperplane.gif"
                alt="メッセージ送信ボタンのロゴ"
                width={40}
                height={40}
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
