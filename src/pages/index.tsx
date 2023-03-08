import { HeaderLine } from "@/components/elements/Header";
import { NavLine } from "@/components/elements/NavLine";
import { Recruit } from "@/components/elements/Recruit";

const Home = () => {
  return (
    <div className="bg-background-color h-screen">
      <HeaderLine />
      <NavLine />
      <Recruit />
    </div>
  );
};
export default Home;
