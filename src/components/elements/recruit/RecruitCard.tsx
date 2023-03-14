import Image from "next/image";
import { Key } from "react";

type Props = {
  recruit: any;
};

export const RecruitCard: React.FC<Props> = ({ recruit }): JSX.Element => {
  return (
    <>
      <div className="flex justify-center">
        <Image src="/avatar.gif" alt="" width={150} height={150} />
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col">
          <h3 className="font-zen font-regular text-1xl mx-10 line-clamp-1">
            {recruit.headline}
          </h3>
        </div>
      </div>
      <div className="flex object-cover object-center mx-10">
        {recruit.programing_skills?.map(
          (skill: { value: string }, index: Key) => (
            <div
              key={index}
              className="flex flex-wrap justify-center line-clamp-1"
            >
              <span className="inline-flex items-center gap-1.5 py-1 px-2 mx-3 mt-5 text-xs rounded-full font-caveat bg-background-color ">
                {skill.value}
              </span>
            </div>
          )
        )}
      </div>
      <div className="flex justify-center mt-5 ">
        <div className="flex flex-col">
          <p className="font-zen font-light mx-10 line-clamp-3">
            {recruit.recruitment_details}
          </p>
        </div>
      </div>
    </>
  );
};
