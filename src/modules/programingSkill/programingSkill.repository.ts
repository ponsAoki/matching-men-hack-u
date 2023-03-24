import { db } from "@/libs/firebase";
import { collection, getDocs } from "firebase/firestore";
import { ProgramingSkill } from "../../types/programingSkill";

export const ProgramingSkillRepository = {
  async findMany(): Promise<ProgramingSkill[]> {
    const querySnapShot = await getDocs(collection(db, "programing_skills"));
    const skills = querySnapShot.docs.map(
      (doc) => doc.data() as ProgramingSkill
    );
    return skills;
  },
};
