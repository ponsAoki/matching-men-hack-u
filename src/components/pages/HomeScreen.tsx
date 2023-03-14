import { AddCardButton } from "@/components/elements/commons/buttons/AddCardButton";
import { HeaderLine } from "@/components/elements/commons/header/Header";
import Link from "next/link";
import { NewOrder } from "../elements/commons/buttons/NewOrder";
import { Search } from "../elements/commons/inputs/Search";
import { RecruitList } from "../elements/Home/RecruitList";

export const HomeScreen = () => {
  return (
    <>
      <HeaderLine />
      <div className="mx-auto">
        <header className="border-b border-black/20 w-full">
          <div className="font-caveat mx-auto flex items-center justify-between">
            <Link className=" font-zen font-light text-2xl pl-20" href={""}>
              募集一覧
            </Link>
            <div className="flex border-l border-black/20 ml-12 items-center">
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
    </>
  );
};
