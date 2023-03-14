import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export const HeaderLine = () => {
  const router = useRouter();
  return (
    <div className="mx-auto">
      <header className="border-b border-black/20 pt-5 w-full">
        <div className="font-caveat mx-auto flex items-center justify-between">
          <Link href={"/"}>
            <p className="text-5xl pl-10">UNITE</p>
          </Link>
          <div className="flex mr-[4%]">
            <Image src="/chat.gif" alt="Logo" width={90} height={90} />
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
