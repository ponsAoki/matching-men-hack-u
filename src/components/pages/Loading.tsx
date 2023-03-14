import Image from "next/image";

export const Loading: React.FC = (): JSX.Element => {
  return (
    <div className="bg-red-50 flex justify-center h-screen w-screen content-center">
      <Image src="/load.gif" alt="" width={150} height={150} />
    </div>
  );
};
