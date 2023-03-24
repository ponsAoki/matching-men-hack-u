import { FieldValues, UseFormRegister } from "react-hook-form";

type PlainTextAreaProps = {
  labelText?: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  registerLabel: string;
}

export const PlainTextArea = ({
  labelText,
  placeholder,
  register,
  registerLabel
}: PlainTextAreaProps): JSX.Element => {

  return (
    <>
      <div className="flex flex-col gap-6 text-lg">
        <label htmlFor="nameInput">{labelText}</label>
        <textarea
          id="textarea"
          placeholder={placeholder}
          className="border-b bg-inherit border-black w-full outline-none"
          {...(register && register(registerLabel ?? ""))}
        />
      </div>
    </>
  )
}
