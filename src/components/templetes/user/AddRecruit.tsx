import { PlainInput } from "@/components/atoms/PlainInput"
import { StringLike } from "@firebase/util";

type Props = {
  headline: string;
  details: string;
  programingSkill: string[];
  developmentPeriod: string;
  hackthonUrl: String;
  numberOfApplicants: number; //募集人数
  hackthonTag: string;
}

export const AddRecruit = () => {

  return (
    <>
      <div>
        <form action="">
          <PlainInput
            labelText="headline"
            placeholder="見出しをご記入ください"
          />
        </form>
      </div>
    </>
  )
}
