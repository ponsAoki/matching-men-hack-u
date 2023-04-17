import { HTMLInputTypeAttribute, ReactNode } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

type ValidationRulus = {
  required?: boolean | string;
  minLength?: number | { value: number; message: string };
  pattern?: RegExp | { value: RegExp; message: string };
}

type Props = {
  labelText: string;
  placeholder: string;
  buttonType: HTMLInputTypeAttribute;
  register: UseFormRegister<FieldValues>;
  registerLabel: string;
  rules?: ValidationRulus;
  errors: FieldErrors<FieldValues>;
}
export const AuthInput: React.FC<Props> = ({ labelText, placeholder, buttonType, register, registerLabel, rules, errors}): JSX.Element => {

  return (
    <div className="mt-10 text-xl ">
      <label className="">{labelText}</label><br />
      <input
        type={buttonType}
        placeholder={placeholder}
        {...(register && register(registerLabel ?? "",
          rules
        ))}
        className="bg-background-color border-b border-black  w-full mt-3"
      />
      {errors[registerLabel] && <p className="text-xs font-ligh text-red-500">{errors[registerLabel]?.message as ReactNode}</p>}
    </div>
  )
}
