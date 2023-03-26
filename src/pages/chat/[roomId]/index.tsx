import { HeaderLine } from "@/components/organisms/Header";
import { ChatPage } from "@/components/templetes/common/Chat";
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
