import { authRepository } from "@/modules/auth/auth.repository";
import { useRouter } from "next/router";
import { AuthButton } from "../../atoms/AuthButton";
import Link from "next/link";
import Image from "next/image";
import { EmailPasswordForm } from "@/components/organisms/EmailAndPasswordForm";
import { useState } from "react";
import { SuccessOrFailureModal } from "@/components/organisms/SuccessOrFailureModal";

type FormData = {
  email: string;
  password: string;
}

export const SignIn: React.FC = (): JSX.Element => {

  const router = useRouter();

  //モーダル関係
  const [isOpen, setIsOpen] = useState(false);
  const [modalMessage ,setModalMessage] = useState("");
  const [color, setColor] = useState<boolean>();
  const closeModal = () => {
    setIsOpen(false);
  }

  const onSubmit = ({email, password}: FormData) => {
    authRepository.signInWithEmail(email, password)
      .then(result => {
        if(result) {
          setIsOpen(true)
          setModalMessage(result.message)
          setColor(result.success);

          setTimeout(() => {
            setIsOpen(false)
            if (!result.success) return window.location.reload();
            router.push("/homeScreen")
          }, 2000)
        }
      })

  };

  return (
    <div className="flex justify-center h-screen content-center">
      <div className="flex flex-col justify-center w-3/5 ">
        <div className="flex justify-center">
          <div className="flex flex-col items-center w-screen">
            <AuthButton
              src="/home.png"
              onClick={() =>
                authRepository
                  .signInWithGoogle()
                  .then(() => {
                    setIsOpen(true)
                    setTimeout(() => {
                      setIsOpen(false)
                      router.push("/homeScreen")
                    }, 2000)
                  })
              }
            >
              Continue with Google
            </AuthButton>
            <AuthButton
              src="/github-mark.png"
              onClick={
                authRepository.signWithGithub

              }
            >
              Continue with GitHub
            </AuthButton>
          </div>
        </div>

        <div className="flex justify-end">
          <Image src="/cat.gif" alt="logo" width={90} height={90} />
        </div>
        <div className="flex justify-center">
          <div className="border-t w-3/5 border-black mr-20"></div>
          <div className="border-t w-3/5 border-black ml-20"></div>
        </div>
        <p className="font-caveat text-center text-xl font-light -mt-5">or</p>

        <EmailPasswordForm
          onSubmit={onSubmit}
          buttonText="ログイン"
        />

        <div className="flex justify-center">
          <p>まだアカウントをお持ちでない方　</p>
          <Link href="/signUp" className="font-bold">
            登録
          </Link>
        </div>
      </div>
      <SuccessOrFailureModal
        isOpen={isOpen}
        closeModal={closeModal}
        modalMessage={modalMessage}
        modalBgColor={color!}
       />
    </div>
  );
};

//SignUpとSignInも１つのコンポーネントにまとめる
