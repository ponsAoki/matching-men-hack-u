import Image from "next/image";

export const AddCardButton = () => {
  return (
    <div className="fixed bottom-5 right-14">
      <div className="">
        <Image src="/plus.gif" alt="" width={150} height={150} />
      </div>
    </div>
  );
};
