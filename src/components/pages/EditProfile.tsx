import { UserState, UserStateType } from "@/global-states/atoms";
import { useAuth } from "@/hooks/useAuth";
import { useProgramingSkills } from "@/hooks/useProgramingSkills";
import { useSpecificRecruits } from "@/hooks/useSpecificRecruits";
import { recruitRepository } from "@/modules/recruit/recruit.repository";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import { useRecoilValue } from "recoil";
import { PlainInput } from "../elements/commons/inputs/PlainInput";
import { ConfirmModal } from "../elements/commons/modals/ConfirmModal";
import { RecruitCard } from "../elements/commons/cards/RecruitCard";
import { EditProfileModal } from "../elements/Profile/EditProfileModal";
import { FormField } from "../elements/Profile/FormField";
import { GraduationYearRadio } from "../elements/Profile/GraduationYearRadio";
import { Loading } from "./Loading";

export const EditProfile = (): JSX.Element => {
  useAuth(); //レンダリング時にuserCollectionから再fetchするため (もうちょっと良さそうな方法に書き換えたい)
  const userStateVal = useRecoilValue<UserStateType>(UserState);
  const [user, setUser] = useState<UserStateType>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isUserNameOpen, setIsUserNameOpen] = useState(false);
  const [isUniversityOpen, setIsUniversityOpen] = useState(false);
  const [isGraduationYearOpen, setIsGraduationYearOpen] = useState(false);
  const [isGithubInfoOpen, setIsGithubInfoOpen] = useState(false);
  const [isSkillOpen, setIsSkillOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const { register, handleSubmit, control } = useForm();
  const { programingSkills } = useProgramingSkills();
  const { ownRecruits } = useSpecificRecruits(userStateVal?.uid);
  const options = programingSkills.map((skill) => {
    return { label: skill.name, value: skill.name };
  });

  useEffect(() => {
    if (!userStateVal) {
      setIsLoading(true);
    } else {
      setUser(userStateVal);
      setIsLoading(false);
    }
  }, [userStateVal]);

  if (!user || isLoading) return <Loading />;

  const deleteRecruit = async (recruit: any) => {
    await recruitRepository.delete(recruit.id);
    setIsConfirmOpen(false);
    location.reload();
  };

  return (
    <div className="flex flex-col items-center gap-20 my-8">
      {/* 名前とアイコン */}
      <div className="flex flex-col gap-8 items-end">
        <Image
          src="/avatar.gif"
          alt="人物アイコン"
          width={160}
          height={160}
          className="rounded-full border border-black"
        />
        <div className="flex justify-around">
          <div className="text-center">{userStateVal?.name}</div>
          <Image
            src="/pen.gif"
            alt="鉛筆のロゴ"
            width={60}
            height={60}
            onClick={() => setIsUserNameOpen(true)}
          />
        </div>
      </div>
      <EditProfileModal
        isOpen={isUserNameOpen}
        setIsOpen={setIsUserNameOpen}
        userStateVal={userStateVal}
        handleSubmit={handleSubmit}
      >
        <PlainInput
          labelText="名前"
          placeholder="フルネームをご入力ください"
          register={register}
          registerLabel="name"
        />
      </EditProfileModal>
      {/* 学校情報 */}
      <FormField
        labelText="大学・専門"
        onCLick={() => setIsUniversityOpen(true)}
      >
        <div className="border-b border-black">{userStateVal?.university}</div>
      </FormField>
      <EditProfileModal
        isOpen={isUniversityOpen}
        setIsOpen={setIsUniversityOpen}
        userStateVal={userStateVal}
        handleSubmit={handleSubmit}
      >
        <PlainInput
          labelText="大学・専門"
          placeholder="学校名"
          register={register}
          registerLabel="university"
        />
      </EditProfileModal>
      {/* 卒業予定年度 */}
      <FormField
        labelText="卒業予定年度"
        onCLick={() => setIsGraduationYearOpen(true)}
      >
        <div className="px-8 py-2 rounded-3xl bg-white text-base text-center w-1/4">
          {userStateVal?.graduateYear}
        </div>
      </FormField>
      <EditProfileModal
        isOpen={isGraduationYearOpen}
        setIsOpen={setIsGraduationYearOpen}
        userStateVal={userStateVal}
        handleSubmit={handleSubmit}
      >
        <GraduationYearRadio
          control={control}
          defaultChipColor={"bg-gray-100"}
        />
      </EditProfileModal>
      {/* GtHubアカウント */}
      <FormField
        labelText="GitHubアカウント名"
        onCLick={() => setIsGithubInfoOpen(true)}
      >
        <div className="border-b border-black">{userStateVal?.github}</div>
      </FormField>
      <EditProfileModal
        isOpen={isGithubInfoOpen}
        setIsOpen={setIsGithubInfoOpen}
        userStateVal={userStateVal}
        handleSubmit={handleSubmit}
      >
        <PlainInput
          labelText="GitHub アカウント名"
          placeholder="https://github.com/<hoge> の<hoge>の部分"
          register={register}
          registerLabel="github"
        />
      </EditProfileModal>
      {/* プログラミングスキル */}
      <FormField
        labelText="プログラミングスキル"
        onCLick={() => setIsSkillOpen(true)}
      >
        <div className="flex flex-wrap gap-4">
          {userStateVal?.programingSkills?.map((skill) => (
            <div
              key={skill}
              className="px-8 py-2 rounded-3xl bg-white text-base"
            >
              {skill}
            </div>
          ))}
        </div>
      </FormField>
      <EditProfileModal
        isOpen={isSkillOpen}
        setIsOpen={setIsSkillOpen}
        userStateVal={userStateVal}
        handleSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-6 text-lg">
          <div>プログラミングスキル</div>
          <Controller
            name="programingSkills"
            control={control}
            render={({ field }) => (
              <Select
                isMulti
                options={options}
                onChange={(selectedSkills) => {
                  field.onChange(selectedSkills.map((skill) => skill.value));
                }}
                placeholder="スキル名を選択してください (複数選択可)"
              />
            )}
          />
        </div>
      </EditProfileModal>
      {/* userが作成している募集 */}
      <div className="flex flex-col gap-6 text-lg w-2/5">
        <div>募集中のカード</div>
        <div className="flex flex-wrap justify-center gap-16">
          {ownRecruits && ownRecruits.length > 0 ? (
            ownRecruits.map((recruit: any, index: number) => (
              //以降をcomponentに切り出したい
              <RecruitCard
                key={recruit.id}
                recruit={recruit.data}
                cardHeight={"h-80"}
                cardWidth={"w-60"}
              >
                <div className="flex justify-end">
                  <Image
                    src="/trash.gif"
                    alt="削除アイコン"
                    width={40}
                    height={40}
                    onClick={() => setIsConfirmOpen(true)}
                  />
                </div>
                <ConfirmModal
                  isOpen={isConfirmOpen}
                  setIsOpen={setIsConfirmOpen}
                  modalTitle="募集を削除しますか？"
                  confirmOkText="削除"
                  onClickEvent={() => deleteRecruit(recruit)}
                />
              </RecruitCard>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};
