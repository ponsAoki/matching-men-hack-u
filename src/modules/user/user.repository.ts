import { db } from "@/libs/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { User } from "../../../types/user";

export const UserRepository = {
  async findOneByUid(uid: string): Promise<User> {
    const ref = doc(db, `users/${uid}`);
    const snapShot = await getDoc(ref);
    return snapShot.data() as User;
  },

  async update(uid: string, data: User): Promise<void> {
    const ref = doc(db, `users/${uid}`);
    await updateDoc(ref, data);
  },
};
