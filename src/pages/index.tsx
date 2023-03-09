import { HeaderLine } from "@/components/elements/Home/Header";
import { NavLine } from "@/components/elements/Home/NavLine";
import { Recruit } from "@/components/elements/Home/Recruit";

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
