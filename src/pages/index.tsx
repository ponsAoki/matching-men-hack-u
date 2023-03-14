import HomeScreen from "@/components/pages/Home";
import { Loading } from "@/components/pages/Loading";
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

  return <HomeScreen />;
};
export default Home;
