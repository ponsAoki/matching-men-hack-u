import { db } from "@/libs/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { Corpolation } from "../../../types/corpolation";

export const CorpolationRepositry = {
  async update(uid: string, data: Corpolation): Promise<void> {
    const ref = doc(db, `corpolations/${uid}`);
    await updateDoc(ref, data);
  },
}
