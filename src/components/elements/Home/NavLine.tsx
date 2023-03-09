import Image from "next/image";
import Link from "next/link";

export const NavLine = () => {
  return (
    <div className="mx-auto">
      <header className="border-b w-full">
        <div className="font-caveat mx-auto flex items-center justify-between">
          <Link className=" font-zen font-light text-2xl pl-20" href={""}>
            募集一覧
          </Link>
          <div className="flex border-l ml-12 items-center">
            <input
              className=" font-zen font-light text-1xl h-10 mx-2 rounded-lg focus:outline-none focus:border-transparent text-center bg-transparent focus:bg-white/50 hover:bg-white/50"
              type="text"
              placeholder="検索"
            />
            <Image src="/search.gif" alt="Logo" width={50} height={50} />
          </div>
          <div className="flex"></div>
        </div>
      </header>
    </div>
  );
};
