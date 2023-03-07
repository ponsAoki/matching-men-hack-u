import { auth } from "@/libs/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const authRepository = {
  //メールでの認証
  async signIn(email: string, password: string): Promise<void> {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert('サインイン認証に失敗しました。')
    }
  },

  //メールでのユーザー登録
  async signUp(email:string, password: string): Promise<void>  {
    try {
      console.log(email, password)
      await createUserWithEmailAndPassword(auth, email, password);

    } catch (error) {
      alert('ユーザー登録に失敗しました。')
    }
  },

  //サインアウトする
  async logOut(): Promise<void> {
    try {
      await signOut(auth);
      console.log("成功")
    } catch (error) {
      alert('サインアウトに失敗しました。');
    }
  },

};



