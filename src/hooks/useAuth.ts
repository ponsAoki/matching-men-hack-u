import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { UserState } from "@/global-states/atoms";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/libs/firebase";
import { useRouter } from "next/router";
import { UserStateType } from "@/global-states/atoms";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/libs/firebase";
import { User } from "../../types/user";


export const useAuth = (): UserStateType => {
  const router = useRouter();
  const [user, setUser ] = useRecoilState<UserStateType>(UserState);


  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (authUser) => {
      console.log(authUser?.uid)
      if (authUser) {
        const ref = doc(db, `users/${authUser.uid}`);
        const snap = await getDoc(ref);

        if(snap.exists()) {
          const appUser = (await getDoc(ref)).data() as User;
          setUser(appUser);
        } else {
          const appUser: User = {
            uid: authUser.uid,
          }

          setDoc(ref, appUser).then(() => {
            setUser(appUser)
          })
        }
      } else {
        // resetStatus();
        //Authコンポーネントにpush
        router.push('/signIn');
      }
    });
    return () => unsub();
  }, []);

  return user;
};

//リファクタ
//今はmainでしか認証ができていないが認証に関連するコンポーネント単位でできるようにする。
