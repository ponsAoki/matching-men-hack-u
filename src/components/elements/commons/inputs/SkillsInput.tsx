import { useProgramingSkills } from "@/hooks/useProgramingSkills";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";

type Option = {
  label: string;
  value: string;
}

type Props = {

}

export const SkillsInput = () => {
  // const { control } = useForm();
  // const { programingSkills } = useProgramingSkills();
  // const [selectedSkills, setSelectedSkills] = useState<Option[]>([]);

  // //reacthooksformでlabelとvalueが必要な為
  // const options = programingSkills.map((skill) => {
  //   return { label: skill.name, value: skill.name };
  // });

  // return (
  //   <>
  //       <Controller
  //         name="programingSkills"
  //         control={control}
  //         render={({ field }) => (
  //           <Select
  //             isMulti
  //             options={options}
  //             onChange={(selectedSkills) => {
  //               setSelectedSkills(selectedSkills as Option[]);
  //               field.onChange(selectedSkills.map((skill) => skill.value));
  //             }}
  //             placeholder="スキル名を選択してください (複数選択可)"
  //           />
  //         )}
  //       />

  //       <div className="flex flex-wrap gap-4">
  //         {selectedSkills.map((selectedSkill) => (
  //           <div
  //             key={selectedSkill.label}
  //             className="px-8 py-2 rounded-3xl bg-white text-base"
  //           >
  //             {selectedSkill.value ?? " "}
  //           </div>
  //         ))}
  //       </div>
  //</>
  //)
}
