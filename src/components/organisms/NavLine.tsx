import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { UploadProductModal } from "./UploadProductModal";

export const NavLine = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <div className="mx-auto">
      <header className="border-b border-black/20 w-full">
        <div className="font-caveat mx-auto flex items-center justify-between">
          <Link className=" font-zen font-light text-2xl pl-20" href={""}>
            募集一覧
          </Link>
          <button
            type="button"
            onClick={openModal}
            className="rounded-md font-zen font-light text-2xl  hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            upload product
          </button>
          <div className="flex border-l border-black/20 ml-12 items-center">
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

      <UploadProductModal
        isOpen={isOpen}
        closeModal={closeModal}
      />
    </div>
  );
};
