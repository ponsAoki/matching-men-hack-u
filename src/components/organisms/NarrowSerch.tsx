import { Listbox, Transition } from "@headlessui/react"
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Fragment, useState } from "react"

//API通信で取得するが一旦データを作って対応する。
const HACKATHON_NAME = [
  {name: "hack U"},
  {name: "技育展"},
  {name: "JPHack"},
  {name: "宮城ハッカソン"},
  {name: "その他"}
]

export const NarrowSearch = () => {
  const [ selected, setSelected ] = useState(HACKATHON_NAME[0]);
  return (
    <div className=" ml-20 mt-14 w-3/5">
      <div>
        <p className="text-xl text-gray-600">検索フィルター</p>
        <Listbox value={selected} onChange={setSelected}>
          <div className="relative mt-1 w-4/5 border rounded-md">
            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-3 pl-3 pr-10 text-left shadow-sm focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
              <span className="block truncate">{selected.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10">
                {HACKATHON_NAME.map((hackthon) => (
                  <Listbox.Option
                    key={hackthon.name}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                      }`
                    }
                    value={hackthon}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {hackthon.name}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
      <div className="flex col mt-4 text-gray-500 ">
        <div className="mr-5 border border-gray-300 bg-gray-200 py-2 px-3 rounded-2xl hover:border-green-300 hover:bg-white">
          スキル
        </div>
        <div className="mr-5 border hover:border-gray-300 hover:bg-gray-200 py-2 px-3 rounded-2xl border-green-300 bg-white">
          開発経験
        </div>
      </div>
      <div className="flex col mt-2 text-gray-500 text-sm">
        <div className="mx-5 border border-gray-300 bg-white p-2 rounded-2xl hover:text-white hover:bg-gray-500 hover:border-gray-500">
          半年未満
        </div>
        <div className="mr-5 border border-gray-300 bg-white p-2 rounded-2xl hover:text-white hover:bg-gray-600 hover:border-gray-600">
          半年~1年
        </div>
        <div className="mr-5 border border-gray-300 bg-white p-2 rounded-2xl hover:text-white hover:bg-gray-600 hover:border-gray-600">
          1年~2年
        </div>
        <div className="mr-5 border border-gray-300 bg-white p-2 rounded-2xl hover:text-white hover:bg-gray-600 hover:border-gray-600">
          2年以上
        </div>
      </div>
    </div>
  )
}
