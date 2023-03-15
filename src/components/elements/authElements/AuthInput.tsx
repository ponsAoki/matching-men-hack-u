type Props = {
  label: string;
  placeholder: string;
  email: string;
  buttonType: string;
  onChange: (event: {
    target: HTMLInputElement;
  }) => void
}
export const AuthInput: React.FC<Props> = ({ label, placeholder, email, onChange, buttonType }): JSX.Element => {

  console.log(email)
  return (
    <div className="mt-10 text-xl ">
      <label className="">{label}</label><br />
      <input
        value={email}
        name={buttonType}
        type={buttonType}
        placeholder={placeholder}
        onChange={onChange}
        className="bg-background-color border-b border-black  w-full mt-3"
      />
    </div>
  )
}
