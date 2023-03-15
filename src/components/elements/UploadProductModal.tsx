import { UserState } from '@/global-states/atoms'
import { db, storage } from '@/libs/firebase'
import { Dialog, Transition } from '@headlessui/react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import Image from 'next/image'
import { Fragment } from 'react'
import { useForm } from 'react-hook-form'
import { useRecoilValue } from 'recoil'
import { PlainInput } from './inputs/PlainInput'
import { PlainTextArea } from './inputs/PlainTextarea'

type Props = {
  isOpen: boolean
  closeModal: () => void
}

export const UploadProductModal = ({ isOpen, closeModal }: Props) => {
  const { register, handleSubmit } = useForm();
  const user = useRecoilValue(UserState);

  const onSubmit = (data: any) => {
    const imageRef = ref(storage, `files/${data.file[0].name}`);
    uploadBytes(imageRef, data.file["0"])
      .then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then((url) => {
            addDoc(collection(db, "products"), {
              user_id: user?.uid,
              genre: data.genre,
              detailInfo: data.detailInfo,
              filePath: url,
              createDate: serverTimestamp()
            })
          })
    })
  }


  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="m-5 flex">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <PlainInput
                        inputType='file'
                        register={register}
                        registerLabel="file"
                      />
                      <div className='mb-5'>
                        <PlainInput
                          placeholder='ジャンルを入力してください'
                          register={register}
                          registerLabel='genre'
                        />
                        <p className='mt-2 text-sm'>(例)webアプリ、モバイルアプリ</p>
                      </div>
                      <div>
                        <PlainTextArea
                          placeholder='詳細な情報をご入力ください'
                          register={register}
                          registerLabel="detailInfo"
                        />
                        <p className='text-sm mt-2'>(例)タイトル:〇〇 <br />開発期間:〇〇<br />人数:〇〇 <br />概要:〇〇<br />技術:〇〇<br />URL:〇〇</p>
                      </div>
                      <div className='flex justify-end'>
                        <button><Image src='/paperplane.gif' width={60} height={60} alt="logo"/></button>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

//fileの時react-hook-formを自作しているがPlainInputで書く(typeがtextで指定されていた為変更したらコンフリクト起こすかもしれないので後々対処)
