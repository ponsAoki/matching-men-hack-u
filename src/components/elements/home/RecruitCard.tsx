import Image from "next/image";

export const RecruitCard = () => {
  return (
    <div className="grid mx-20 gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
      <div
        className="group relative mb-2 block h-100 border overflow-hidden rounded-3xl bg-white lg:mb-3"
        data-hs-overlay="#one"
      >
        <div className="flex justify-center object-cover object-center transition duration-200 group-hover:scale-110">
          <Image src="/avatar.gif" alt="" width={150} height={150} />
        </div>
        <div className="flex justify-center object-cover object-center transition duration-200 group-hover:scale-110">
          <div className="flex flex-col">
            <h3 className="font-zen font-regular text-1xl lg:text-3xl">
              募集中
            </h3>
          </div>
        </div>
        <div className="flex justify-center mt-10 object-cover object-center transition duration-200 group-hover:scale-110">
          <div className="flex flex-col">
            <p className="font-zen font-light mx-10">
              あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
            </p>
          </div>
        </div>
        <div className="flex justify-end mt-10 mb-3 mr-3 object-cover object-center transition duration-200 group-hover:scale-110">
          <p className="font-zen font-light">0/3</p>
        </div>
      </div>
    </div>
  );
};
