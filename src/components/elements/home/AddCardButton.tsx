import { UserState, UserStateType } from "@/global-states/atoms";
import Image from "next/image";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { CreateRecruitModal } from "../recruitElement/CreateRecruitModal";

export const AddCardButton = () => {
  const userAtomVal = useRecoilValue<UserStateType>(UserState);

  let [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  }

  const openModal = () => {
    setIsOpen(true);
  }
  return (
    <>
    <button
      type="button"
      onClick={openModal}
    >
      <div className="fixed bottom-5 right-14">
      <div className="">
        <Image src="/plus.gif" alt="" width={150} height={150} />
      </div>
    </div>
    </button>

    <CreateRecruitModal
      isOpen={isOpen}
      closeModal={closeModal}
      user={userAtomVal?.uid}
    />
    </>
  );
};
