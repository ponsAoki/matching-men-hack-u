import { db } from "@/libs/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { Corpolation } from "../../../types/corpolation";

export const CorpolationRepositry = {
  async findOneByUid(uid: string): Promise<Corpolation> {
    const ref = doc(db, `corpolations/${uid}`);
    const snapShot = await getDoc(ref);
    return snapShot.data() as Corpolation;
  },

  async update(uid: string, data: Corpolation): Promise<void> {
    const ref = doc(db, `corpolations/${uid}`);
    await updateDoc(ref, data);
  },
};
