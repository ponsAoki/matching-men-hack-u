import { authRepository } from "@/modules/auth/auth.repository";
import { useRouter } from "next/router";
import { AuthButton } from "../../atoms/AuthButton";
import Link from "next/link";
import Image from "next/image";
import { EmailAndPasswordForm } from "@/components/organisms/EmailAndPasswordForm";

export const SignUp = () => {

  const router = useRouter();
  const onSubmit = (data: any) => {
    authRepository
      .signUpWithEmail(data.email, data.password)
      .then(() => router.push("/profiles/otherThanTech"))
      .catch((error) => router.push("/signUp"))
      ;
  };

  return (
    <div className="flex justify-center h-screen content-center">
      <div className="flex flex-col justify-center w-3/5 ">
        <div className="flex justify-center">
          <div className="flex flex-col items-center w-screen">
            <AuthButton
              src="/home.png"
              onClick={() =>
                authRepository.signInWithGoogle()
                .then(() => router.push("/profiles/otherThanTech"))
                .catch((error) => router.push("/signUp"))
              }
            >
              Continue with Google
            </AuthButton>
            <AuthButton
              src="/github-mark.png"
              onClick={authRepository.signWithGithub}
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

        <EmailAndPasswordForm
          onSubmit={onSubmit}
          buttonText="アカウントを作る"
        />

        <div className="flex justify-center">
          <p>アカウントをお持ちの方はこちら　</p>
          <Link href="/signIn" className="font-bold">
            ログイン
          </Link>
        </div>
        <div className="flex justify-center">
          <p>企業様はこちらです　</p>
          <Link href="/corporation" className="font-bold">
            こちら
          </Link>
        </div>
      </div>
    </div>
  );
};
