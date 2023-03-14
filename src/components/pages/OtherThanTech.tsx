import { UserState } from "@/global-states/atoms";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { SubmitButton } from "../elements/commons/buttons/SubmitButton";
import { PlainInput } from "../elements/commons/inputs/PlainInput";
import { GraduationYearRadio } from "../elements/Profile/GraduationYearRadio";

export const OtherThanTechPage = (): JSX.Element => {
  const [userState, setUserState] = useRecoilState(UserState);
  const { register, handleSubmit, control } = useForm();
  const router = useRouter();

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
        <GraduationYearRadio control={control} />
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
