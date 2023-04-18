import { authRepository } from "@/modules/auth/auth.repository";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { EmailAndPasswordForm } from "@/components/organisms/EmailAndPasswordForm";

export const CorporateSignUp = () => {
  const router = useRouter();

  const onClick = (data: any) => {
    //ここは
    authRepository.signUpWithEmail(data.email, data.password)
      .then(() => router.push('/corporation/inputInfo'));
  };

  return (
    <div className="flex justify-center h-screen content-center">
      <div className="flex flex-col justify-center w-3/5 ">
        <div className="flex justify-center p-5">
          <p className="font-bold text-5xl font-caveat">UNITE(Corporate)</p>
        </div>

        <div className="flex justify-end">
          <Image src="/cat.gif" width={90} height={90} alt="logo"/>
        </div>
        <div className="flex justify-center">
          <div className="border-t w-full border-black"></div>
        </div>
        <EmailAndPasswordForm
          onSubmit={onClick}
          buttonText="アカウントを作る"
        />
        <div className="flex justify-center">
          <p>アカウントをお持ちの企業様　</p>
          <Link href="/corporation/corporateSignIn" className="font-bold">
            ログイン
          </Link>
        </div>
      </div>
    </div>
  );
};
