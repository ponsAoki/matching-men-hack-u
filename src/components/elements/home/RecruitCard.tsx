import Image from "next/image";
import { recruitCard } from "../../../../types/recruitCard";

type RecruitCardProps = {
  recruit: recruitCard;
  children?: any;
  cardHeight?: string;
  cardWidth?: string;
};

export const RecruitCard = ({
  recruit,
  children,
  cardHeight = "h-100",
  cardWidth,
}: RecruitCardProps): JSX.Element => {
  return (
    <div
      className={`group relative mb-2 block ${cardHeight} ${cardWidth} border overflow-hidden rounded-3xl bg-white lg:mb-3`}
      data-hs-overlay="#one"
    >
      {children}
      <div className="flex justify-center object-cover object-center transition duration-200 group-hover:scale-110">
        <Image src="/avatar.gif" alt="" width={150} height={150} />
      </div>
      <div className="flex justify-center object-cover object-center transition duration-200 group-hover:scale-110">
        <div className="flex flex-col">
          <h3 className="font-zen font-regular text-1xl mx-10 line-clamp-1">
            {recruit.headline}
          </h3>
        </div>
      </div>
      <div className="flex object-cover object-center mx-10 object-cover object-center transition duration-200 group-hover:scale-110">
        {recruit.programing_skills?.map((skill: any, index: number) => (
          <div
            key={index}
            className="flex flex-wrap justify-center line-clamp-1"
          >
            <span className="inline-flex items-center gap-1.5 py-1 px-2 mx-3 mt-5 text-xs rounded-full font-caveat bg-background-color ">
              {/* ちょっとわからない */}
              {/* {skill} */}
              {skill.value}
            </span>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-5 object-cover object-center transition duration-200 group-hover:scale-110">
        <div className="flex flex-col">
          {/* Set a function to limit the number of characters */}
          <p className="font-zen font-light mx-10 line-clamp-3">
            {recruit.recruitment_details}
          </p>
        </div>
      </div>
      <div className="flex justify-end mt-10 mb-3 mr-3 object-cover object-center transition duration-200 group-hover:scale-110">
        <p className="font-zen font-light">{recruit.timestamp}</p>
      </div>
    </div>
  );
};
