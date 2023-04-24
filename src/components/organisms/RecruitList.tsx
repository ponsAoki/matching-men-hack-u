import { Loading } from "@/components/templetes/common/Loading";
import { UserState } from "@/global-states/atoms";
import { useRecruit } from "@/hooks/useRecruit";
import { GetStaticProps } from "next";
import { useRecoilState, useRecoilValue } from "recoil";
import { RecruitCard } from "./RecruitCard";

export const RecruitList = (): JSX.Element => {
  const { recruits } = useRecruit();
  const user = useRecoilValue(UserState)

  recruits.sort((a, b) => b.timestamp - a.timestamp);

  if (recruits.length < 0) return <Loading />;

  return (
    <div className="bg-gray-100 pt-10">
      <div className="grid mx-20 gap-x-20 gap-y-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
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
    </div>
  );
};

type SSGProps = {

}

export const getStaticProps: GetStaticProps = async (context) => {

  return {
    props: {
      
    }
  }
}
