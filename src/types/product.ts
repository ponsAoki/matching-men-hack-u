import { FieldValue } from "firebase/firestore"

export type Product = {
  user_id: string,
  genre: string,
  detailInfo: string,
  filePath: string,
  createDate: FieldValue
}
