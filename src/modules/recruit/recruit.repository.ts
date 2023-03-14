import { db } from "@/libs/firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { recruitCard } from "../../../types/recruitCard";

export const recruitRepository = {
  //募集の一覧取得
  async getRecruitList(): Promise<recruitCard[]> {
    const collectionRef = collection(db, "Recruit");
    const snapshot = await getDocs(collectionRef);
    const recruits = snapshot.docs.map((doc) => doc.data() as recruitCard);
    return recruits;
  },

  //募集の作成
  async createRecruitment(data: recruitCard) :Promise<void> {
    const collectionRef = collection(db, "Recruit");
    await addDoc(collectionRef, data)
  }
};
