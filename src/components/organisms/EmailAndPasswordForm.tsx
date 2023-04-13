import { useForm } from "react-hook-form"
import { AuthInput } from "../atoms/AuthInput"

type Props = {
  onSubmit :(data: any) => void;
  buttonText: string
}
export const EmailPasswordForm: React.FC<Props> = ({ onSubmit, buttonText }):JSX.Element => {

  const { handleSubmit, register, formState: {errors}} = useForm()
  return (
    <>
      <form className="flex-col" onSubmit={handleSubmit(onSubmit)}>
        <AuthInput
          labelText="メールアドレス"
          placeholder="example@gmail.com"
          buttonType="email"
          register={register}
          registerLabel="email"
          rules={{required: "*必須項目です"}}
          errors={errors}
        />

        <AuthInput
          labelText="パスワード"
          placeholder="More than 10 letters"
          buttonType="password"
          register={register}
          registerLabel="password"
          rules={{ required: "*必須項目です。", minLength: {value: 8, message: "*8文字以上で入力ください。"}}}
          errors={errors}
        />

        <div className="flex justify-center mt-10">
          <button
            type="submit"
            className="w-80 h-14 p-3 bg-white rounded-xl font-bold mb-3 text-center"
          >
            {buttonText}
          </button>
        </div>
      </form>
    </>
  )
}
