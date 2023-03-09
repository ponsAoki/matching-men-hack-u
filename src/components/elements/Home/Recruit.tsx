import Image from "next/image";

export const Recruit = () => {
  return (
    <div className="py-6 sm:py-8 lg:py-12 ">
      <div className="mx-auto px-4 md:px-8">
        <div className="mb-10 flex items-end justify-between gap-4">
          <h3 className=" font-zen font-regular text-1xl lg:text-3xl ml-10">
            募集一覧
          </h3>
          <div className="flex items-center mr-10">
            <button className="bg-white hover:bg-tertiary-color font-zen py-2 px-4 mr-2 text-lg rounded-2xl inline-flex items-center">
              新着順
            </button>
            <button className="bg-white hover:bg-tertiary-color font-zen py-2 px-4 mr-2 text-lg rounded-2xl inline-flex items-center">
              募集中
            </button>
          </div>
        </div>

        <div className="grid mx-10 gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
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

        {/* モダル内のUI */}
        <div
          id="one"
          className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto"
        >
          <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-3xl sm:w-full m-3 sm:mx-auto h-[calc(100%-3.5rem)] min-h-[calc(100%-3.5rem)] flex items-center">
            <div className="max-h-full w-full overflow-hidden flex flex-col bg-white border shadow-sm rounded-xl">
              <div className="flex justify-between items-center py-3 px-4">
                <div className="flex justify-end object-cover object-center">
                  <p className="font-zen font-regular">0/3</p>
                </div>
                <button
                  type="button"
                  className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm"
                  data-hs-overlay="#one"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>

              <div className="group relative mb-2 block h-100 overflow-hidden rounded-3xl bg-white lg:mb-3 overflow-y-auto">
                <div className="flex justify-center object-cover object-center">
                  <Image src="/avatar.gif" alt="" width={150} height={150} />
                </div>
                <div className="flex justify-center object-cover object-center">
                  <div className="flex flex-col">
                    <h3 className="font-zen font-regular text-1xl lg:text-3xl">
                      募集中
                    </h3>
                  </div>
                </div>
                <div className="flex justify-center object-cover object-center mt-10 mx-20">
                  <div className="flex flex-wrap">
                    <span className="inline-flex items-center gap-1.5 py-1.5 px-3 mx-3 my-5 rounded-full font-caveat bg-background-color ">
                      HTML
                    </span>
                  </div>
                </div>
                <div className="flex justify-center mt-10 object-cover object-center">
                  <div className="flex flex-col">
                    <p className="font-zen font-light mx-10">
                      ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
                      ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
                      ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
                      ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
                      ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
                      ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
                      ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
                      ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
                      ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
                      ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-end items-center gap-x-2 py-3 px-4 dark:border-gray-700">
                <a
                  className="py-1 pl-3 pr-1 mb-1 inline-flex justify-center items-center gap-2 rounded-xl border border-transparent  bg-secondary-color font-zen text-black hover:bg-tertiary-color focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all"
                  href=""
                >
                  話を聞いてみたい
                  <Image src="/paperplane.gif" alt="" width={50} height={50} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
