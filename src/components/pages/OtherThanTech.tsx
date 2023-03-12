import { UserState } from "@/global-states/atoms";
import { useGraduationYears } from "@/hooks/useGraduationYears";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { SubmitButton } from "../elements/buttons/SubmitButton";
import { PlainInput } from "../elements/inputs/PlainInput";

export const OtherThanTechPage = (): JSX.Element => {
  const [userState, setUserState] = useRecoilState(UserState);
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const { graduationYears } = useGraduationYears();

  const years = [...graduationYears]
    .filter((year) => year.year !== "other")
    .sort((a, b) => (a.year as number) - (b.year as number))
    .map((year) => `${year.year}年度`);
  years.push("その他");

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
          <div id="radio" className="flex flex-wrap gap-8">
            {years.length > 1 &&
              years.map((graduateYear: string) => (
                <div key={graduateYear}>
                  <input
                    id={graduateYear}
                    type="radio"
                    value={graduateYear}
                    className="text-red-600 focus:ring-red-400 peer hidden"
                    {...register("graduateYear")}
                  />
                  <label
                    htmlFor={graduateYear}
                    className="px-8 py-2 rounded-3xl bg-white text-base cursor-pointer peer-checked:bg-gray-200"
                  >
                    {graduateYear}
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
