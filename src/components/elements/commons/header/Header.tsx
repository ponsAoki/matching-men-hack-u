import { UserState } from "@/global-states/atoms";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

export const HeaderLine = (): JSX.Element => {
  const router = useRouter();
  const userStateVal = useRecoilValue(UserState);
  const [arbitraryRoomId, setArbitraryRoomId] = useState<string>();

  useEffect(() => {
    if (userStateVal?.room_ids) {
      setArbitraryRoomId(userStateVal.room_ids[0]);
    }
  }, [userStateVal?.room_ids]);

  return (
    <div className="mx-auto">
      <header className="border-b border-black/20 pt-5 w-full">
        <div className="font-caveat mx-auto flex items-center justify-between">
          <Link href={"/"}>
            <p className="text-5xl pl-10">UNITE</p>
          </Link>
          <div className="flex mr-[4%]">
            <Link href={`/chat/${arbitraryRoomId}`}>
              <Image src="/chat.gif" alt="Logo" width={90} height={90} />
            </Link>
            <Link href="/profiles/editProfile">
              <Image src="/avatar.gif" alt="Logo" width={90} height={90} />
            </Link>
          </div>
        </div>
      </header>
      <div className="flex justify-center -mt-16">
        <Image src="/cat.gif" alt="Logo" width={70} height={70} />
      </div>
    </div>
  );
};
