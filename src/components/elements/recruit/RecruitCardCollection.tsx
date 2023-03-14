import Image from "next/image";
import { useRecruit } from "@/hooks/useRecruit";
import { useState } from "react";
import { CreateDetailModal } from "../commons/modals/CreateDetailModal";
import { RecruitCard } from "./RecruitCard";

export const RecruitCardCollection = () => {
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
            <RecruitCard recruit={recruit} />

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
              <CreateDetailModal
                isOpen={isOpen}
                closeModal={() => setIsOpen(false)}
                recruit={recruits[keptIndex]}
              />
            </div>
          </div>
        ))
      ) : (
        <></>
      )}
    </div>
  );
};
