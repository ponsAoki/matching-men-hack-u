import { AddCardButton } from "@/components/elements/commons/buttons/AddCardButton";
import { HeaderLine } from "@/components/elements/commons/header/Header";
import { useAuth } from "@/hooks/useAuth";
import { authRepository } from "@/modules/auth.repository";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NewOrder } from "../elements/commons/buttons/NewOrder";
import { Search } from "../elements/commons/inputs/Search";
import { RecruitList } from "../elements/Home/RecruitList";
import { UploadProductModal } from "../elements/UploadProductModal";
import { Loading } from "./Loading";

export const HomeScreen = () => {
  const user = useAuth();
  const [uid, setUid] = useState<string>();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setUid(user?.uid);
  }, [user?.uid]);

  if (!uid) return <Loading />;


  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <>
      <HeaderLine />
      <div className="mx-auto">
        <header className="border-b border-black/20 w-full">
          <div className="font-caveat mx-auto flex">
            <div className="flex-1">
              <Link className=" font-zen font-light text-2xl pl-20 inline-block my-2" href={""}>
                募集一覧
              </Link>
            </div>
            <div className="flex-1 border-l border-black/20 pl-12 items-center">
              <button
                type="button"
                onClick={openModal}
                className="rounded-md font-zen font-light text-xl  my-2 p-1 focus:bg-white/50 hover:bg-white/50"
              >
                upload product
              </button>
            </div>
            <div className="flex-1 flex border-l border-black/20 ml-12 items-center">
              <Search />
            </div>
            <div className="flex"></div>
          </div>
        </header>
      </div>
      <div className="py-6 sm:py-8 lg:py-12 ">
        <div className="mx-auto px-4 md:px-8">
          <div className="mb-10 flex items-end justify-between gap-4 mx-20">
            <h3 className=" font-zen font-regular text-1xl lg:text-3xl">
              募集一覧
            </h3>
            <div className="flex items-center">
              <NewOrder />
            </div>
          </div>
          <RecruitList />
        </div>
      </div>
      <AddCardButton />
      <div className="justify-center flex mt-10">
        <button
          className="bg-green-50 p-4 rounded-md"
          onClick={authRepository.logOut}
        >
          ログアウト
        </button>
      </div>


      <UploadProductModal
        isOpen={isOpen}
        closeModal={closeModal}
      />
    </>
  );
};
