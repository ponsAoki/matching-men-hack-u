type SubmitButtonProps = {
  innerText: string;
};

export const SubmitButton = ({ innerText }: SubmitButtonProps): JSX.Element => {
  return (
    <button type="submit" className="rounded-xl bg-white py-3 w-28">
      {innerText}
    </button>
  );
};
