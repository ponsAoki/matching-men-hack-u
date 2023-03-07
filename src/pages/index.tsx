import { Main } from "@/components/pages/Main";
import { useAuth } from "@/hooks/useAuth";

const Home = () => {
  const user = useAuth();
  if (!user?.uid) return <p>loading...</p>
  return (
    <Main />
  )
  }
export default Home;
