import { ProgramingSkillRepository } from "@/modules/programingSkill/programingSkill.repository";
import { useEffect, useState } from "react";
import { ProgramingSkill } from "../../types/programingSkill";

export const useProgramingSkills = () => {
  const [programingSkills, setProgramingSkills] = useState<ProgramingSkill[]>(
    []
  );

  useEffect(() => {
    (async () => {
      const fetchedSkills = await ProgramingSkillRepository.findMany();
      setProgramingSkills(fetchedSkills);
    })();
  }, []);

  if (!programingSkills) throw new Error("skillsなし");

  return { programingSkills };
};
