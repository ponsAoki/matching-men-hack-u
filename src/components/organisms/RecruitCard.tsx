import Image from "next/image";
import { useState } from "react";
import { recruitCard } from "../../types/recruitCard";
import { CreateDetailModal } from "./CreateDetailModal";

type RecruitCardProps = {
  recruit: recruitCard;
  allRecruits?: any;
  children?: any;
  cardHeight?: string;
  cardWidth?: string;
  index?: any;
};

export const RecruitCard = ({
  recruit,
  allRecruits,
  index,
}: RecruitCardProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [keptIndex, setKeptIndex] = useState<number>(0);

  return (
    <div
      className={`group relative mb-2 h-96 border overflow-hidden rounded-xl  lg:mb-3 shadow-md`}
    >
      <div className="flex justify-center items-center h-2/5 bg-gradient-to-r from-recruite-card-bg to-pink-200">
        <p className="text-4xl font-bold text-white">Hack U</p>
      </div>
      <div className="flex col">
        {recruit.programing_skills?.map((skill: any, index: number) => (
            <div
              key={index}
              className="flex justify-start line-clamp-1"
            >
              <span className="text-gray-500 inline-flex items-center gap-1.5 py-1 px-3 mx-3 mt-5 text-xs rounded-full border-2 border-gray-400 ">
                {skill.value}
              </span>
            </div>
          ))}
      </div>
      <div className="flex justify-center items-center h-1/3">
        <div className="flex flex-col">
          <h3 className="font-zen font-regular text-2xl mx-10 line-clamp-1 text-gray-500">
            {recruit.headline}
          </h3>
        </div>
      </div>
      {/* <div className="flex justify-center mt-5">
        <div className="flex flex-col">
          <p className="font-zen font-light mx-10 line-clamp-1">
            {recruit.recruitment_details}
          </p>
        </div>
      </div> */}
      <div className="flex justify-end mb-3 mr-3 object-cover object-center transition duration-200 group-hover:scale-95">
        <button
          className="font-zen font-black text-green-800 px-2 py-2 rounded-lg focus:outline-none focus:border-transparent text-center bg-transparent"
          onClick={() => {
            setIsOpen(true);
            setKeptIndex(index);
          }}
        >
          詳細を見る
        </button>
        <CreateDetailModal
          isOpen={isOpen}
          closeModal={() => setIsOpen(false)}
          recruit={recruit}
          index={keptIndex}
        />
      </div>
    </div>
  );
};
