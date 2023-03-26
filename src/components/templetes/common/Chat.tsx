import { ChatRepository } from "@/modules/chat/chat.repository";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Loading } from "./Loading";

type ChatPageProps = {
  senderStateVal: any;
};

export const ChatPage = ({ senderStateVal }: ChatPageProps): JSX.Element => {
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const { roomId } = router.query;
  const [chatHistories, setChatHistories] = useState<any[]>();
  const [chatOpponents, setChatOpponents] = useState<any[]>();

  useEffect(() => {
    (async () => {
      if (!senderStateVal?.room_ids) return;
      const opponents = await ChatRepository.findManyRooms(
        senderStateVal.room_ids,
        senderStateVal.uid
      );
      setChatOpponents(opponents);
    })();
  }, [senderStateVal?.uid]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      if (typeof roomId !== "string") return;
      await ChatRepository.findOneRoomHistory(roomId, setChatHistories);
      setIsLoading(false);
    })();
  }, [roomId]);

  if (isLoading) return <Loading />;

  const onMessageSubmit = async (submitData: any) => {
    if (
      !senderStateVal?.uid ||
      !(senderStateVal?.name || senderStateVal?.corporation_name)
    )
      throw new Error("senderStateのuidかnameが空");
    await ChatRepository.post(
      senderStateVal.uid,
      senderStateVal.name ?? senderStateVal.corporation_name,
      roomId as string,
      submitData.message
    );
    reset();
  };

  return (
    <div className="flex w-screen h-screen">
      {/* いろんな人とのやりとりリスト */}
      <div className="w-1/3 flex flex-col p-8 overflow-y-auto">
        {chatOpponents?.map((opponent) => (
          <Link
            key={opponent.roomId}
            href={
              senderStateVal.name
                ? `/chat/${opponent.roomId}`
                : `/corporation/chat/${opponent.roomId}`
            }
            className={`flex items-center gap-4 border-b border-black p-8 ${
              opponent.roomId === roomId && "bg-secondary-color"
            }`}
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
      <div className="w-2/3 grid grid-cols-1 gap-8 pb-24 p-8 overflow-auto">
        {chatHistories?.map((chat: any) => (
          <div
            key={`${String(chat.timestamp)}`}
            className={`w-1/2
                ${
                  senderStateVal?.uid === chat.senderUid
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
                senderStateVal?.uid === chat.senderUid
                  ? "rounded-tr-none"
                  : "rounded-tl-none"
              }`}
            >
              {chat.message}
            </div>
          </div>
        ))}
      </div>
      {/* 送信フォーム */}
      <form
        className="fixed bottom-4 right-4 w-3/5"
        onSubmit={handleSubmit(onMessageSubmit)}
      >
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
  );
};
