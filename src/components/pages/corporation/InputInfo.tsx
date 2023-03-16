import { SubmitButton } from "@/components/elements/commons/buttons/SubmitButton";
import { PlainInput } from "@/components/elements/commons/inputs/PlainInput";
import { CorpolationState, CorpolationStateType } from "@/global-states/corpolateAtom";
import { CorpolationRepositry } from "@/modules/corpolation/corpolation.repository";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form"
import { useRecoilValue } from "recoil";
import { Corpolation } from "../../../../types/corpolation";


export const InputInfo = () => {
  const router = useRouter()
  const { handleSubmit, register } = useForm();
  const  corpolation = useRecoilValue(CorpolationState)

  const onSubmit = (submitData: any) => {
    let data: Corpolation = {
      uid: corpolation!.uid,
      corpolation_name: submitData.corpolation_name,
      phone_number: submitData.phone_number,
      introduction: submitData.introduction
    }
    CorpolationRepositry.update(corpolation!.uid, data);
    router.push('/corpolation')
  }

  return (
    <>
      <div className="flex flex-col justify-center px-80 h-screen text-lg">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="container flex flex-col gap-16 max-w-500"
        >
          <PlainInput
            labelText="企業名"
            placeholder="正式名称でご記入ください"
            register={register}
            registerLabel="corpolation_name"
          />
          <PlainInput
            labelText="電話番号"
            placeholder="数字のみでご入力ください"
            register={register}
            registerLabel="phone_number"
          />

          <div className="flex flex-col gap-6 text-lg">
            <label htmlFor="nameInput">自由欄</label>
            <textarea
              {...register("introduction", {
                required: '必須入力です'
              })}
              placeholder="アピールポイントや企業情報などど自由にご記入ください"
              className="border-b bg-inherit border-black w-full outline-none"
            />
          </div>
        <div className="flex justify-center mt-2">
          <SubmitButton innerText="完了" />
        </div>
        </form>
      </div>
    </>
  )
}
