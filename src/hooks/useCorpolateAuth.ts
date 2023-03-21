import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/libs/firebase";
import { useRouter } from "next/router";
import { UserStateType } from "@/global-states/atoms";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/libs/firebase";
import { User } from "../../types/user";
import { CorpolationState, CorpolationStateType } from "@/global-states/corpolateAtom";
import { Corpolation } from "../../types/corpolation";


export const useCorpolateAuth = (): UserStateType => {
  const router = useRouter();
  const [corpolation, setCorpolation] = useRecoilState<CorpolationStateType>(CorpolationState);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (authCorpolation) => {
      console.log(authCorpolation?.uid)
      if (authCorpolation) {
        const ref = doc(db, `corpolations/${authCorpolation.uid}`);
        const snap = await getDoc(ref);

        if(snap.exists()) {
          const appCorpolation = (await getDoc(ref)).data() as Corpolation;
          setCorpolation(appCorpolation);
        } else {
          const appCorpolation: Corpolation = {
            uid: authCorpolation.uid,
          }

          setDoc(ref, appCorpolation).then(() => {
            setCorpolation(appCorpolation)
          })
        }
      } else {
        // resetStatus();
        //Authコンポーネントにpush
        router.push('/corpolation/corpolateSignIn');
      }
    });
    return () => unsub();
  }, []);

  return corpolation;
};
