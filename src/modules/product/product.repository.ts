import { db } from "@/libs/firebase";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { Product } from "../../types/product";

export const ProductRepositry = {
  //プロダクト一覧取得
  async findMany(): Promise<Product[]> {
    const querysnapshot = await getDocs(collection(db, "products"));
    const products = querysnapshot.docs.map((doc) => doc.data() as Product)

    return products
  },
}
