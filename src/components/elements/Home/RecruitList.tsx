import { Loading } from "@/components/pages/Loading";
import { useRecruit } from "@/hooks/useRecruit";
import { RecruitCard } from "../commons/cards/RecruitCard";

export const RecruitList = (): JSX.Element => {
  const { recruits } = useRecruit();

  if (recruits.length < 0) return <Loading />;

  return (
    <div className="grid mx-20 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      {recruits.map((recruit, index) => (
        <RecruitCard
          key={recruit.timestamp}
          recruit={recruit}
          allRecruits={recruits}
          index={index}
        />
      ))}
    </div>
  );
};