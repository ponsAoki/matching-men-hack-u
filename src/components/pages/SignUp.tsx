import { authRepository } from "@/modules/auth.repository";
import { useRouter } from "next/router";
import { useState } from "react";

export const SignUp = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    authRepository.signUp(email, password).then(() => router.push('/'));

    console.log(email, password);
  };
  const handleChangeEmail = (event: {target: HTMLInputElement}) => {
    setEmail(event.target.value);
  };
  const handleChangePassword = (event: {target: HTMLInputElement}) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <h1>ユーザ登録</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>メールアドレス</label>
          <input
            value={email}
            name="email"
            type="email"
            placeholder="email"
            onChange={handleChangeEmail}
          />
        </div>
        <div>
          <label>パスワード</label>
          <input
            value={password}
            name="password"
            type="password"
            placeholder="password"
            onChange={handleChangePassword}
          />
        </div>
        <div>
          <button className="backgroundColor: red">アカウントを作る</button>
        </div>
      </form>
    </div>
  );
};

