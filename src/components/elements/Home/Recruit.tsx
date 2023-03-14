import { ModalCard } from "./ModalCard";
import { RecruitList } from "./RecruitList";

export const Recruit = () => {
  return (
    <div className="py-6 sm:py-8 lg:py-12 ">
      <div className="mx-auto px-4 md:px-8">
        <div className="mb-10 flex items-end justify-between gap-4 mx-20">
          <h3 className=" font-zen font-regular text-1xl lg:text-3xl">
            募集一覧
          </h3>
          <div className="flex items-center">
            <button className="bg-white hover:bg-tertiary-color font-zen py-2 px-4 mr-2 text-lg rounded-2xl inline-flex items-center">
              新着順
            </button>
            <button className="bg-white hover:bg-tertiary-color font-zen py-2 px-4 mr-2 text-lg rounded-2xl inline-flex items-center">
              募集中
            </button>
          </div>
        </div>
        <RecruitList />
        <ModalCard />
      </div>
    </div>
  );
};
