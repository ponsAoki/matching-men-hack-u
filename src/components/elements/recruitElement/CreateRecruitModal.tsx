import { Fragment, useState } from "react";
import { Dialog, Transition } from '@headlessui/react';
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import { useProgramingSkills } from "@/hooks/useProgramingSkills";
import { Option } from "../../../../types/recruitCard";

import { recruitCard } from "../../../../types/recruitCard";
import { recruitRepository } from "@/modules/recruit/recruit.repository";


type Props = {
  isOpen: boolean;
  closeModal: () => void;
  user: any;
}

export const CreateRecruitModal: React.FC<Props> = ({ isOpen, closeModal, user }):JSX.Element => {


  const { handleSubmit, register, control } = useForm();

  const { programingSkills } = useProgramingSkills();
  const [selectedSkills, setSelectedSkills] = useState<Option[]>([]);

  const options = programingSkills.map((skill) => {
    return { label: skill.name, value: skill.name}
  })

  const onSubmit = (data: any) => {
    console.log(user);

    let recruit_data: recruitCard = {
      headline: data.headline,
      recruitment_details: data.recruitment_details,
      programing_skills: selectedSkills,
      timestamp: Date.now(),
      user_id: user
    }
    recruitRepository.createRecruitment(recruit_data);
    closeModal();

  }

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
                  <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                  >
                    募集する
                  </Dialog.Title>
                  <div className="mt-2">
                    {/* formを作成する */}
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <input
                        {...register("headline", {
                          required: '必須入力です'
                        })}
                        placeholder="タイトルをご入力ください"
                      />

                      <Controller
                        name="programingSkills"
                        control={control}
                        render={({ field }) => (
                          <Select
                            isMulti
                            options={options}
                            onChange={(selectedSkills) => {
                              setSelectedSkills(selectedSkills as Option[]);
                              field.onChange(selectedSkills.map((skill) => skill.value));
                            }}
                            placeholder="スキル名を選択してください (複数選択可)"
                          />
                        )}
                      />
                      <div className="flex flex-wrap gap-4">
                        {selectedSkills.map((selectedSkill) => (
                          <div
                            key={selectedSkill.label}
                            className="px-8 py-2 rounded-3xl bg-white text-base"
                          >
                            {selectedSkill.value ?? " "}
                          </div>
                        ))}
                      </div>

                      <input
                        {...register("recruitment_details", {
                          required: '必須入力です'
                        })}
                        placeholder="詳細な情報を自由にご入力ください"
                      />

                      <div>
                        <button type="submit">提出</button>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}


//リファクタ
//skillInputをコンポーネント化
