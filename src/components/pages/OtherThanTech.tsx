import { GRADUATION_YEARS } from "@/constants/constants";
import { UserState } from "@/global-states/atoms";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { SubmitButton } from "../elements/buttons/SubmitButton";
import { PlainInput } from "../elements/inputs/PlainInput";

export const OtherThanTechPage = (): JSX.Element => {
  const [userState, setUserState] = useRecoilState(UserState);
  const { register, handleSubmit } = useForm();
  const user = useAuth();
  const router = useRouter();
  const [years, setYears] = useState(GRADUATION_YEARS);

  const onChangeYear = (e: any) => {
    setYears((prev) =>
      prev.map((elm) => {
        if (elm.year === e.target.outerText) {
          return { ...elm, selected: !elm.selected };
        }
        return { ...elm, selected: false };
      })
    );
  };

  const onSubmit = (submitData: any) => {
    setUserState({ ...userState, ...submitData });
    router.push("/profiles/skill");
  };

  return (
    <div className="flex flex-col justify-center px-80 h-screen bg-red-50 text-lg">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="container flex flex-col gap-16 max-w-500"
      >
        <PlainInput
          labelText="名前"
          placeholder="フルネームをご入力ください"
          register={register}
          registerLabel="name"
        />
        <div className="flex flex-col gap-6">
          <label htmlFor="radio">卒業予定年度</label>
          <div id="radio" className="flex flex-row gap-8">
            {years.map((graduateYear) => (
              <div key={graduateYear.year}>
                <input
                  id={graduateYear.year}
                  type="radio"
                  value={graduateYear.year}
                  className="focus:ring-red-400 mr-2"
                  {...register("graduateYear")}
                />
                <label
                  htmlFor={graduateYear.year}
                  className="text-base"
                  onClick={(e): void => onChangeYear(e)}
                >
                  {graduateYear.year}
                </label>
              </div>
            ))}
          </div>
        </div>
        <PlainInput
          labelText="大学・専門"
          placeholder="学校名"
          register={register}
          registerLabel="university"
        />
        <div className="flex justify-center mt-4">
          <SubmitButton innerText="次へ" />
        </div>
      </form>
    </div>
  );
};
