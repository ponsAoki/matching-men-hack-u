import { HeaderLine } from "@/components/elements/commons/header/Header";
import { ChatPage } from "@/components/pages/Chat";
import { UserState } from "@/global-states/atoms";
import { useRecoilValue } from "recoil";

const Chat = (): JSX.Element => {
  const userStateVal = useRecoilValue(UserState);

  return (
    <>
      <HeaderLine />
      <ChatPage senderStateVal={userStateVal} />
    </>
  );
};
export default Chat;
