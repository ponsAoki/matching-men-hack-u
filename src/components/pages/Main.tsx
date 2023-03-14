import { useRecoilValue } from "recoil";
import { UserState, UserStateType } from "@/global-states/atoms";
import { authRepository } from "@/modules/auth.repository";
import { useState } from "react";
import { CreateRecruitModal } from "../elements/commons/modals/CreateRecruitModal";

export const Main = () => {
  const userAtomVal = useRecoilValue<UserStateType>(UserState);

  let [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div>
        <p>Main </p>
        <p>ユーザーid: {userAtomVal?.uid}</p>
        <br />
        <button onClick={authRepository.logOut} className="bg-white">
          サインアウト
        </button>
      </div>

      <div>
        <div className="fixed inset-0 flex items-center justify-center">
          <button
            type="button"
            onClick={openModal}
            className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            Open dialog
          </button>
        </div>

        <CreateRecruitModal
          isOpen={isOpen}
          closeModal={closeModal}
          user={userAtomVal?.uid}
        />
      </div>
    </>
  );
};
