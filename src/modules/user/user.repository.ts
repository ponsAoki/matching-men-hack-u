import { db } from "@/libs/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { User } from "../../../types/user";

export const UserRepository = {
  async update(uid: string, data: User): Promise<void> {
    const ref = doc(db, `users/${uid}`);
    await updateDoc(ref, data);
  },
};
