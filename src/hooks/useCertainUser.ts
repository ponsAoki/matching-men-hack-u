import { UserRepository } from "@/modules/user/user.repository";
import { useEffect, useState } from "react";
import { User } from "../types/user";

export const useCertainUser = (uid: string) => {
  const [certainUser, setCertainUser] = useState<User>();

  useEffect(() => {
    (async () => {
      const fetchedUser = await UserRepository.findOneByUid(uid);
      setCertainUser(fetchedUser);
    })();
  }, [uid]);

  return { certainUser };
};
