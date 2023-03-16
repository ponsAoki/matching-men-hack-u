import { authRepository } from "@/modules/auth.repository";
import { useRouter } from "next/router";
import { useState } from "react";
import { AuthInput } from "@/components/elements/authElements/AuthInput";
import Link from "next/link";
import Image from "next/image";

export const CorpolateSignIn: React.FC = (): JSX.Element => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    authRepository.signInWithEmail(email, password).then(() => router.push('/corpolation'));
  };

  const handleChangeEmail = (event: {target: HTMLInputElement}) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event: {target: HTMLInputElement}) => {
    setPassword(event.target.value);
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

        <form className="flex-col" onSubmit={handleSubmit}>
          <AuthInput
            label="メールアドレス"
            placeholder="example@gmail.com"
            email={email}
            buttonType="email"
            onChange={handleChangeEmail}
          />
          <AuthInput
            label="パスワード"
            placeholder="More than 10 letters"
            email={password}
            buttonType="password"
            onChange={handleChangePassword}
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
