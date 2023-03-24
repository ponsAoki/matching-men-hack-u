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
  children,
  cardHeight = "h-100",
  cardWidth,
  index,
}: RecruitCardProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [keptIndex, setKeptIndex] = useState<number>(0);

  return (
    <div
      className={`group relative mb-2 block ${cardHeight} ${cardWidth} border overflow-hidden rounded-3xl bg-white lg:mb-3`}
    >
      {children}
      <div className="flex justify-center">
        <Image src="/avatar.gif" alt="" width={150} height={150} />
      </div>
      <div className="flex justify-center ">
        <div className="flex flex-col">
          <h3 className="font-zen font-regular text-1xl mx-10 line-clamp-1">
            {recruit.headline}
          </h3>
        </div>
      </div>
      <div className="flex object-cover object-center mx-10">
        {recruit.programing_skills?.map((skill: any, index: number) => (
          <div
            key={index}
            className="flex flex-wrap justify-center line-clamp-1"
          >
            <span className="inline-flex items-center gap-1.5 py-1 px-2 mx-3 mt-5 text-xs rounded-full font-caveat bg-background-color ">
              {skill.value}
            </span>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-5">
        <div className="flex flex-col">
          <p className="font-zen font-light mx-10 line-clamp-1">
            {recruit.recruitment_details}
          </p>
        </div>
      </div>
      <div className="flex justify-end mt-10 mb-3 mr-3 object-cover object-center transition duration-200 group-hover:scale-95">
        <button
          className="font-zen font-light px-2 py-2 rounded-lg focus:outline-none focus:border-transparent text-center bg-transparent hover:bg-tertiary-color"
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
