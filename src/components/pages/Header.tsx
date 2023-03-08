import Image from "next/image";

export const HeaderLine = () => {
  return (
    <div className="mx-auto">
      <header className="border-b pt-5 w-full">
        <div className="font-caveat mx-auto flex items-center justify-between">
          <p className="text-5xl pl-10">UNITE</p>
          <div className="flex pr-10">
            <Image src="/chat.gif" alt="Logo" width={90} height={90} />
            <Image src="/avatar.gif" alt="Logo" width={90} height={90} />
          </div>
        </div>
      </header>
      <div className="flex justify-center -mt-16">
        <Image src="/cat.gif" alt="Logo" width={70} height={70} />
      </div>
    </div>
  );
};
