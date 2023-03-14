import { Loading } from "@/components/pages/Loading";
import { HomeScreen } from "@/components/pages/HomeScreen";
import { Main } from "@/components/pages/Main";
import { useAuth } from "@/hooks/useAuth";
import { useEffect, useState } from "react";

const Home = () => {
  const user = useAuth();
  const [uid, setUid] = useState<string>();

  useEffect(() => {
    setUid(user?.uid);
  }, [user]);

  if (!uid) return <Loading />;
  // return <Main />;
  return <HomeScreen />
};
export default Home;
