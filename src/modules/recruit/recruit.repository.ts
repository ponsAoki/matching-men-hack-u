import { db } from "@/libs/firebase";
import { collection, getDocs } from "firebase/firestore";
import { recruitCard } from "../../../types/recruitCard";

export const recruitRepository = {
  async getRecruitList(): Promise<recruitCard[]> {
    const collectionRef = collection(db, "Recruit");
    const snapshot = await getDocs(collectionRef);
    const recruits = snapshot.docs.map((doc) => doc.data() as recruitCard);
    return recruits;
  },
};
