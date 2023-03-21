import { FieldValues, UseFormRegister } from "react-hook-form";

type Props = {
  labelText: string;
  placeholder: string;
  buttonType: string;
  register: UseFormRegister<FieldValues>,
  registerLabel?: string
}
export const AuthInput: React.FC<Props> = ({ labelText, placeholder, buttonType, register, registerLabel }): JSX.Element => {

  console.log(register)

  return (
    <div className="mt-10 text-xl ">
      <label className="">{labelText}</label><br />
      <input
        type={buttonType}
        placeholder={placeholder}
        {...(register && register(registerLabel ?? ""))}
        className="bg-background-color border-b border-black  w-full mt-3"
      />
    </div>
  )
}
