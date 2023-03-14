import { useRecruit } from "@/hooks/useRecruit";
import { RecruitCard } from "./RecruitCard";

export const RecruitList = (): JSX.Element => {
  const { recruits } = useRecruit();

  return (
    <div className="grid mx-20 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      {recruits.length > 0 ? (
        recruits.map((recruit, index) => (
          <RecruitCard key={index} recruit={recruit} />
        ))
      ) : (
        <></>
      )}
    </div>
  );
};
