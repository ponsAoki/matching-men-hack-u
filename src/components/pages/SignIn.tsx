import { authRepository } from "@/modules/auth.repository";
import { useRouter } from "next/router";
import { useState } from "react";
import { AuthButton } from "../elements/authElements/AuthButton";
import { AuthInput } from "../elements/authElements/AuthInput";
import Link from "next/link";

export const SignIn: React.FC = (): JSX.Element => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    authRepository.signInWithEmail(email, password).then(() => router.push('/'));
  };

  const handleChangeEmail = (event: {target: HTMLInputElement}) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event: {target: HTMLInputElement}) => {
    setPassword(event.target.value);
  };

  return (
    <div className="bg-red-50 flex justify-center h-screen content-center">
      <div className="flex flex-col justify-center w-3/5 ">
        <div className="flex justify-center">
          <div className="flex flex-col items-center w-screen">
            <AuthButton
              src="/Google-Icon-PNG_rwscww 1.png"
              onClick={() => authRepository.signInWithGoogle().then(() => router.push('/'))}
            >
              Continue with Google
            </AuthButton>
            <AuthButton
              src="/kisspng-computer-icons-logo-portable-network-graphics-clip-icons-for-free-iconza-circle-social-5b7fe46b4ec817 1.png"
              onClick={authRepository.signWithGithub}
            >
              Continue with GitHub
            </AuthButton>
          </div>
        </div>

        <div className="flex justify-end">
          <p>猫</p>
        </div>
        <div className="flex justify-center mt-8">
          <div className="border-t w-3/5 border-black mr-20"></div>
          <div className="border-t w-3/5 border-black ml-20"></div>
        </div>
        <p className="font-caveat text-center text-xl font-light -mt-5">or</p>

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
          <p>まだアカウントをお持ちでない方　</p>
          <Link href="/signUp" className="font-bold">
            登録
          </Link>
        </div>
      </div>
    </div>
  );
};

//SignUpとSignInも１つのコンポーネントにまとめる
