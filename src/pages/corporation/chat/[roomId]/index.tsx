import { CorporateHeaderLine } from "@/components/organisms/CorporateHeaderLine";
import { ChatPage } from "@/components/templetes/common/Chat";
import { CorporationState } from "@/global-states/corporateAtom";
import { useRecoilValue } from "recoil";

const ScoutingChat = (): JSX.Element => {
  const corporationStateVal = useRecoilValue(CorporationState);
  return (
    <>
      <CorporateHeaderLine />
      <ChatPage senderStateVal={corporationStateVal} />
    </>
  );
};

export default ScoutingChat;
