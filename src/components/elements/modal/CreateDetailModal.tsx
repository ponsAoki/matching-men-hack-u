import { Fragment, Key } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";

type Props = {
  isOpen: boolean;
  closeModal: () => void;
  recruit: any;
};

export const CreateDetailModal: React.FC<Props> = ({
  isOpen,
  closeModal,
  recruit,
}): JSX.Element => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-between items-center py-3 px-4">
                    <div className="flex justify-end object-cover object-center">
                      <p className="font-zen font-regular">
                        {recruit.timestamp}
                      </p>
                    </div>
                  </div>
                  <div className="group relative mb-2 block h-100 overflow-hidden rounded-3xl bg-white lg:mb-3 overflow-y-auto">
                    <div className="flex justify-center object-cover object-center">
                      <Image
                        src="/avatar.gif"
                        alt=""
                        width={150}
                        height={150}
                      />
                    </div>
                    <div className="flex justify-center object-cover object-center">
                      <div className="flex flex-col">
                        <h3 className="font-zen font-regular text-1xl lg:text-3xl">
                          {recruit.headline}
                        </h3>
                      </div>
                    </div>
                    <div className="flex justify-center object-cover object-center mt-10 mx-20">
                      {recruit.programing_skills?.map(
                        (skill: { value: string }, index: Key) => (
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
                          {recruit.recruitment_details}
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
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
