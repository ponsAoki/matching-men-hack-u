import { CorpolationState } from "@/global-states/corpolateAtom";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

export const CorporateHeaderLine = (): JSX.Element => {
  const router = useRouter();
  const corpolationStateVal = useRecoilValue(CorpolationState);
  const [arbitraryRoomId, setArbitraryRoomId] = useState<string>();

  useEffect(() => {
    if (corpolationStateVal?.room_ids) {
      setArbitraryRoomId(corpolationStateVal.room_ids[0]);
    }
  }, [corpolationStateVal?.room_ids]);

  return (
    <div className="mx-auto">
      <header className="border-b border-black/20 pt-5 w-full">
        <div className="font-caveat mx-auto flex items-center justify-between">
          <Link href={"/"}>
            <p className="text-5xl pl-10">UNITE</p>
          </Link>
          <div className="flex mr-[4%]">
            <Link href={`/corpolation/chat/${arbitraryRoomId}`}>
              <Image src="/chat.gif" alt="Logo" width={90} height={90} />
            </Link>
            <Link href="#">
              <Image src="/avatar.gif" alt="Logo" width={90} height={90} />
            </Link>
          </div>
        </div>
      </header>
      <div className="flex justify-center -mt-16">
        <Image src="/cat.gif" alt="Logo" width={70} height={70} />
      </div>
      <header className="border-b border-black/20 w-full">
        <div className="font-caveat mx-auto flex text-xl">
          <div className="flex-1 pl-5">
            <Link href="/corpolation">ユーザー一覧</Link>
          </div>
          <div className="flex-1 border-l border-black/20 pl-5">
            <Link href="/corpolation/productList">プロダクト一覧</Link>
          </div>
          <div className="flex-1 flex border-l border-black/20 pl-5">
            <Link href="#">Comming soon..</Link>
          </div>
        </div>
      </header>
    </div>
  );
};
