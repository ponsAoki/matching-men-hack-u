import { authRepository } from "@/modules/auth.repository";
import { useRouter } from "next/router";
import { AuthInput } from "@/components/elements/authElements/AuthInput";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";

export const CorpolateSignIn: React.FC = (): JSX.Element => {
  const router = useRouter();
  const { register, handleSubmit} = useForm();

  const onClick = (data: any) => {
    authRepository.signInWithEmail(data.email, data.password)
      .then(() => router.push('/corpolation'));
  };


  return (
    <div className="flex justify-center h-screen content-center">
      <div className="flex flex-col justify-center w-3/5 ">
        <div className="flex justify-center p-5">
          <h2 className="font-bold text-5xl font-caveat">UNITE(Corpolate)</h2>
        </div>

        <div className="flex justify-end">
          <Image src="/cat.gif" alt="logo" width={90} height={90} />
        </div>
        <div className="flex justify-center">
          <div className="border-t w-full border-black"></div>
        </div>

        <form className="flex-col" onSubmit={handleSubmit(onClick)}>
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
            <button type="submit" className="w-80 h-14 p-3 bg-white rounded-xl font-bold mb-3 text-center">ログイン</button>
          </div>
        </form>
        <div className="flex justify-center">
          <p>まだアカウントをお持ちでない企業様　</p>
          <Link href="/corpolation/corpolateSignUp" className="font-bold">
            登録
          </Link>
        </div>
      </div>
    </div>
  );
};
