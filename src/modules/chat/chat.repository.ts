import { realTimeDb } from "@/libs/firebase";
import { onValue, push, ref, serverTimestamp, set } from "firebase/database";
import { Dispatch, SetStateAction } from "react";

export const ChatRepository = {
  async findOneRoomHistory(
    roomId: string,
    setChatHistories: Dispatch<SetStateAction<any[] | undefined>>
  ): Promise<any> {
    onValue(ref(realTimeDb, roomId), (snapShot) => {
      const posts: any[] = [];
      snapShot.forEach((childSnapShot) => {
        const post = childSnapShot.val();
        posts.push(post);
        /**
         * 挙動がおかしくなった時は、以下を試してみる
         * posts.push(post[Object.keys(post)[0]]);
         */
      });
      setChatHistories(posts);
    });
  },

  findManyRoomHistories(roomIds: string[], senderUid: string) {
    const resRoomHistories = roomIds.map((roomId) => {
      const res: any = { roomId: roomId };
      onValue(ref(realTimeDb, roomId), (snapShot) => {
        let opponentCount = 0;
        snapShot.forEach((childSnapShot) => {
          const post = childSnapShot.val();
          if (post.senderUid !== senderUid && opponentCount < 1) {
            res.opponentName = post.senderName;
            opponentCount++;
          }
        });
      });
      return res;
    });

    return resRoomHistories;
  },

  async post(
    senderUid: any,
    senderName: string,
    roomId: string,
    message: string
  ) {
    const postListRef = ref(realTimeDb, roomId);
    const newPostRef = push(postListRef);
    await set(newPostRef, {
      senderUid,
      senderName,
      message,
      timestamp: serverTimestamp(),
    }).catch((err) => {
      throw new Error("メッセージ送信失敗");
    });
  },
};
