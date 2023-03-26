import { ReactNode } from "react";

type Props = {
  onClick: () => Promise<void | boolean>;
  children: ReactNode;
  src: string;

};

export const AuthButton: React.FC<Props> = ({onClick, children, src}): JSX.Element => {

  return (
    <div className="w-80 h-14 p-4 bg-white rounded-xl font-bold mb-5 text-center">
      <img src={src} className="w-6 h-6 inline-block"/>
      <button onClick={onClick} className="bg-white ml-3">{children}</button>
    </div>
  )
}
