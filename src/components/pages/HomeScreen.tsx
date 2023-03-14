import { AddCardButton } from "@/components/elements/Home/AddCardButton";
import { HeaderLine } from "@/components/elements/Home/Header";
import { NavLine } from "@/components/elements/Home/NavLine";
import { Recruit } from "@/components/elements/Home/Recruit";
import { authRepository } from "@/modules/auth.repository";

export const HomeScreen = () => {
  return (
    <>
      <HeaderLine />
      <NavLine />
      <Recruit />
      <AddCardButton />

      {/* 確認の為に一時的に入れさせて🙇‍♀️ */}
      <button
        onClick={authRepository.logOut}
        className="bg-white"
      >
        サインアウト
      </button>
    </>
  );
};

