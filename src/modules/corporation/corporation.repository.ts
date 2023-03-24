import { db } from "@/libs/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { Corporation } from "../../types/corporation";

export const CorporationRepositry = {
  async findOneByUid(uid: string): Promise<Corporation> {
    const ref = doc(db, `corporations/${uid}`);
    const snapShot = await getDoc(ref);
    return snapShot.data() as Corporation;
  },

  async update(uid: string, data: Corporation): Promise<void> {
    const ref = doc(db, `corporations/${uid}`);
    await updateDoc(ref, data);
  },
}
