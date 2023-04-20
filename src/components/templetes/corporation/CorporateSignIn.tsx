import { authRepository } from "@/modules/auth/auth.repository";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { EmailAndPasswordForm } from "@/components/organisms/EmailAndPasswordForm";

export const CorporateSignIn: React.FC = (): JSX.Element => {
  const router = useRouter();

  const onClick = (data: any) => {
    authRepository.signInWithEmail(data.email, data.password)
      .then(() => router.push('/corporation'));
  };


  return (
    <div className="flex justify-center h-screen content-center">
      <div className="flex flex-col justify-center w-3/5 ">
        <div className="flex justify-center p-5">
          <h2 className="font-bold text-5xl font-caveat">UNITE(Corporate)</h2>
        </div>

        <div className="flex justify-end">
          <Image src="/cat.gif" alt="logo" width={90} height={90} />
        </div>
        <div className="flex justify-center">
          <div className="border-t w-full border-black"></div>
        </div>

        <EmailAndPasswordForm
          onSubmit={onClick}
          buttonText="ログイン"
        />
        <div className="flex justify-center">
          <p>まだアカウントをお持ちでない企業様　</p>
          <Link href="/corporation/corporateSignUp" className="font-bold">
            登録
          </Link>
        </div>
      </div>
    </div>
  );
};
