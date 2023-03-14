import { FieldValues, UseFormRegister } from "react-hook-form";

type PlainInputProps = {
  labelText: string;
  inputType?: string;
  placeholder?: string;
  register?: UseFormRegister<FieldValues>;
  registerLabel?: string;
};

export const PlainInput = ({
  labelText,
  inputType = "text",
  placeholder = "",
  register,
  registerLabel,
}: PlainInputProps): JSX.Element => {
  return (
    <div className="flex flex-col gap-6 text-lg">
      <label htmlFor="nameInput">{labelText}</label>
      <input
        id="nameInput"
        type={inputType}
        placeholder={placeholder}
        className="border-b bg-inherit border-black w-full outline-none"
        {...(register && register(registerLabel ?? ""))}
      />
    </div>
  );
};
