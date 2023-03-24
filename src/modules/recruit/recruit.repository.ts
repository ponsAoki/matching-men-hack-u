import { db } from "@/libs/firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { recruitCard } from "../../types/recruitCard";

export const recruitRepository = {
  //募集の一覧取得
  async getRecruitList(): Promise<recruitCard[]> {
    const collectionRef = collection(db, "recruits");
    const snapshot = await getDocs(collectionRef);
    const recruits = snapshot.docs.map((doc) => doc.data() as recruitCard);
    return recruits;
  },

  //特定のuidを持つ募集の取得
  async findManyByUid(uid: string): Promise<any> {
    const collectionRef = collection(db, "recruits");
    const q = query(collectionRef, where("user_id", "==", uid));
    const querySnapshot = await getDocs(q);
    const recruits = querySnapshot.docs.map((doc) => {
      return { data: doc.data() as recruitCard, id: doc.id };
    });
    return recruits;
  },

  //募集の作成
  async createRecruitment(data: recruitCard): Promise<void> {
    const collectionRef = collection(db, "recruits");
    await addDoc(collectionRef, data);
  },

  //募集の削除
  async delete(recruitId: string): Promise<void> {
    await deleteDoc(doc(db, `recruits/${recruitId}`)).catch((err) => {
      throw new Error(err);
    });
  },
};
