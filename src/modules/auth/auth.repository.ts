import { auth } from "@/libs/firebase";
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, UserCredential } from "firebase/auth";

export const authRepository = {
  //メールでの認証
  async signInWithEmail(email: string, password: string): Promise<void> {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert('サインイン認証に失敗しました。')
    }
  },

  async signInWithGoogle(): Promise<void> {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider)
    } catch (error) {
      alert("google認証に失敗しました")
    }
  },

  async signWithGithub() {
    const provider = new GithubAuthProvider();
    try {
      await signInWithPopup(auth, provider)
    } catch (error) {
      alert("GitHub認証に失敗しました")
      window.location.reload();
    }
  },

  //メールでのユーザー登録
  async signUpWithEmail(email:string, password: string): Promise<void>  {
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
      window.location.reload();
    }
  },

};



