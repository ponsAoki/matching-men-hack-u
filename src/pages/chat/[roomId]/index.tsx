import { ChatPage } from "@/components/templetes/common/Chat";
import { UserLayout } from "@/components/templetes/layouts/UserLayout";
import { UserState } from "@/global-states/atoms";
import { ReactElement } from "react";
import { useRecoilValue } from "recoil";

const Chat = (): JSX.Element => {
  const userStateVal = useRecoilValue(UserState);

  return (
    <>
      <ChatPage senderStateVal={userStateVal} />
    </>
  );
};

Chat.getLayout = function getLayout(page: ReactElement) {
  return <UserLayout>{page}</UserLayout>
}
export default Chat;
