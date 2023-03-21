import { Loading } from "@/components/pages/Loading";
import { UserState } from "@/global-states/atoms";
import { useRecruit } from "@/hooks/useRecruit";
import { useRecoilState, useRecoilValue } from "recoil";
import { RecruitCard } from "../commons/cards/RecruitCard";

export const RecruitList = (): JSX.Element => {
  const { recruits } = useRecruit();
  const user = useRecoilValue(UserState)

  recruits.sort((a, b) => b.timestamp - a.timestamp);

  if (recruits.length < 0) return <Loading />;

  return (
    <div className="grid mx-20 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {recruits.map((recruit, index) => {
          if(recruit.user_id !== user?.uid) {
            return (
              <RecruitCard
                key={recruit.timestamp}
                recruit={recruit}
                index={index}
                allRecruits={recruits}
              />
            );
          }
        })}
    </div>
  );
};
