import Image from "next/image";

export const Recruit = () => {
  return (
    <div className="py-6 sm:py-8 lg:py-12">
      <div className="mx-auto px-4 md:px-8">
        <div className="mb-10 flex items-end justify-between gap-4">
          <h3 className=" font-zen font-regular text-1xl lg:text-3xl ml-10">
            募集一覧
          </h3>
          <div className="flex items-center">
            <button className="bg-white hover:bg-tertiary-color font-zen py-2 px-4 mr-2 text-lg rounded-2xl inline-flex items-center">
              新着順
            </button>
            <button className="bg-white hover:bg-tertiary-color font-zen py-2 px-4 mr-10 text-lg rounded-2xl inline-flex items-center">
              募集中
            </button>
          </div>
        </div>

        <div className="grid mx-10 gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
          <div className="group relative mb-2 block h-100 border overflow-hidden rounded-3xl bg-white lg:mb-3">
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
              <p className="font-zen font-light">2023/03/08</p>
            </div>
          </div>
          <div className="group relative mb-2 block h-100 border overflow-hidden rounded-3xl bg-white lg:mb-3">
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
              <p className="font-zen font-light">2023/03/08</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
