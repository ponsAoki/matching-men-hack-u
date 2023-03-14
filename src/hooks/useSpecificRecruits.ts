import { recruitRepository } from "@/modules/recruit/recruit.repository";
import { useEffect, useState } from "react";

export const useSpecificRecruits = (uid: string | undefined) => {
  const [ownRecruits, setOwnRecruits] = useState<any>();

  useEffect(() => {
    (async () => {
      if (!uid) return;
      const fetchedRecruits = await recruitRepository.findManyByUid(uid);
      setOwnRecruits(fetchedRecruits);
    })();
  }, [uid]);

  return { ownRecruits };
};
