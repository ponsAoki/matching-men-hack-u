import { recruitRepository } from "@/modules/recruit/recruit.repository";
import { useState, useEffect } from "react";
import { recruitCard } from "../../types/recruitCard";

export const useRecruit = () => {
  const [recruits, setRecruits] = useState<recruitCard[]>([]);

  useEffect(() => {
    (async () => {
      const recruits = await recruitRepository.getRecruitList();
      setRecruits(recruits);
    })();
  }, []);

  if (!recruits) return { recruits: [] };

  return { recruits };
};
