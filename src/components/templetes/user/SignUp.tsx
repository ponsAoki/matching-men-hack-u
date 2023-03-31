import { authRepository } from "@/modules/auth/auth.repository";
import { useRouter } from "next/router";
import { AuthButton } from "../../atoms/AuthButton";
import { AuthInput } from "../../atoms/AuthInput";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";

export const SignUp = () => {
  const router = useRouter();
  const { register, handleSubmit} = useForm();

  const onSubmit = (data: any) => {
    authRepository
      .signUpWithEmail(data.email, data.password)
      .then(() => router.push("/profiles/otherThanTech"));
  };


  return (
    <div className="flex justify-center h-screen content-center">
      <div className="flex flex-col justify-center w-3/5 ">
        <div className="flex justify-center">
          <div className="flex flex-col items-center w-screen">
            <AuthButton
              src="/home.png"
              onClick={() =>
                authRepository.signInWithGoogle().then(() => router.push("/profiles/otherThanTech"))
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

        <form className="flex-col" onSubmit={handleSubmit(onSubmit)}>
          <AuthInput
            labelText="メールアドレス"
            placeholder="example@gmail.com"
            buttonType="email"
            register={register}
            registerLabel="email"
          />
          <AuthInput
            labelText="パスワード"
            placeholder="More than 10 letters"
            buttonType="password"
            register={register}
            registerLabel="password"
          />
          <div className="flex justify-center mt-10">
            <button
              type="submit"
              className="w-80 h-14 p-3 bg-white rounded-xl font-bold mb-3 text-center"
            >
              アカウントを作る
            </button>
          </div>
        </form>
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

//SignUpとSignInも１つのコンポーネントにまとめる
