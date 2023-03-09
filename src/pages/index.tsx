import { Loading } from "@/components/pages/Loading";
import { Main } from "@/components/pages/Main";
import { useAuth } from "@/hooks/useAuth";

const Home = () => {
  const user = useAuth();
  if (!user?.uid) return <Loading />
  
  return (
    <Main />
  )
  }
export default Home;
