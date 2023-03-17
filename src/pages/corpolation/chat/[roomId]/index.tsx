import { CorporateHeaderLine } from "@/components/layouts/corporation/CorporateHeaderLine";
import { ChatPage } from "@/components/pages/Chat";
import { CorpolationState } from "@/global-states/corpolateAtom";
import { useRecoilValue } from "recoil";

const ScoutingChat = (): JSX.Element => {
  const corpolationStateVal = useRecoilValue(CorpolationState);
  return (
    <>
      <CorporateHeaderLine />
      <ChatPage senderStateVal={corpolationStateVal} />
    </>
  );
};

export default ScoutingChat;
