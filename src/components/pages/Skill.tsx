import { UserState } from "@/global-states/atoms";
import { useProgramingSkills } from "@/hooks/useProgramingSkills";
import { useRouter } from "next/router";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import { useRecoilState } from "recoil";
import { SubmitButton } from "../elements/buttons/SubmitButton";

type Option = {
  label: string;
  value: string;
};

export const SkillPage = (): JSX.Element => {
  const { handleSubmit, control } = useForm();
  const [userState, setUserState] = useRecoilState(UserState);
  const router = useRouter();
  const { programingSkills } = useProgramingSkills();
  const [selectedSkills, setSelectedSkills] = useState<Option[]>([]);

  const options = programingSkills.map((skill) => {
    return { label: skill.name, value: skill.name };
  });

  const onSubmit = (submitData: any) => {
    setUserState({ ...userState, ...submitData });
    router.push("/profiles/githubInfo");
  };

  return (
    <div className="flex flex-col justify-center px-80 h-screen bg-red-50 text-lg">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="container flex flex-col gap-12 max-w-500"
      >
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
        <div className="flex justify-center mt-24">
          <SubmitButton innerText="次へ" />
        </div>
      </form>
    </div>
  );
};
