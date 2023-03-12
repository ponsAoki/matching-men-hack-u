import { AddCardButton } from "@/components/elements/home/AddCardButton";
import { HeaderLine } from "@/components/elements/home/Header";
import { NavLine } from "@/components/elements/home/NavLine";
import { Recruit } from "@/components/elements/home/Recruit";

const HomeScreen = () => {
  return (
    <>
      <HeaderLine />
      <NavLine />
      <Recruit />
      <AddCardButton />
    </>
  );
};
export default HomeScreen;
