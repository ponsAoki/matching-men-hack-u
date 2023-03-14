import Image from "next/image";
import { useRecruit } from "@/hooks/useRecruit";
import { useState } from "react";
import { Modal } from "./Modal";

export const RecruitCard = () => {
  const { recruits } = useRecruit();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [keptIndex, setKeptIndex] = useState<number>(0);

  return (
    <div className="grid mx-20 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      {recruits.length > 0 ? (
        recruits.map((recruit, index) => (
          <div
            key={index}
            className="group relative mb-2 block h-100 border overflow-hidden rounded-3xl bg-white lg:mb-3"
          >
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
              {recruit.programing_skills?.map((skill, index) => (
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
            <div className="flex justify-center mt-5 ">
              <div className="flex flex-col">
                <p className="font-zen font-light mx-10 line-clamp-3">
                  {recruit.recruitment_details}
                </p>
              </div>
            </div>

            {/* モーダル表示 */}
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
              <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <div className="flex justify-between items-center py-3 px-4">
                  <div className="flex justify-end object-cover object-center">
                    <p className="font-zen font-regular">0/3</p>
                  </div>
                </div>
                <div className="group relative mb-2 block h-100 overflow-hidden rounded-3xl bg-white lg:mb-3 overflow-y-auto">
                  <div className="flex justify-center object-cover object-center">
                    <Image src="/avatar.gif" alt="" width={150} height={150} />
                  </div>
                  <div className="flex justify-center object-cover object-center">
                    <div className="flex flex-col">
                      <h3 className="font-zen font-regular text-1xl lg:text-3xl">
                        {recruits[keptIndex].headline}
                      </h3>
                    </div>
                  </div>
                  <div className="flex justify-center object-cover object-center mt-10 mx-20">
                    {recruits[keptIndex].programing_skills?.map(
                      (skill, index) => (
                        <div
                          key={index}
                          className="flex flex-wrap justify-center"
                        >
                          <span className="inline-flex items-center gap-1.5 py-1 px-2 mx-3 mt-5 text-xs rounded-full font-caveat bg-background-color ">
                            {skill.value}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                  <div className="flex justify-center mt-10 object-cover object-center">
                    <div className="flex flex-col">
                      <p className="font-zen font-light mx-10">
                        {recruits[keptIndex].recruitment_details}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end items-center gap-x-2 py-3 px-4 dark:border-gray-700">
                  <a
                    className="py-1 pl-3 pr-1 mb-1 inline-flex justify-center items-center gap-2 rounded-xl border border-transparent  bg-secondary-color font-zen text-black hover:bg-tertiary-color focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all"
                    href=""
                  >
                    話を聞いてみたい
                    <Image
                      src="/paperplane.gif"
                      alt=""
                      width={50}
                      height={50}
                    />
                  </a>
                </div>
              </Modal>
            </div>
          </div>
        ))
      ) : (
        <></>
      )}
    </div>
  );
};
