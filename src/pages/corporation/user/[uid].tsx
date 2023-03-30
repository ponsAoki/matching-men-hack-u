import { UserDetailPage } from "@/components/templetes/corporation/UserDetail";
import { CorporateLayout } from "@/components/templetes/layouts/CorporateLayout";
import { ReactElement } from "react";

const UserDetail = (): JSX.Element => {
  return (
    <>
      <UserDetailPage />
    </>
  );
};

UserDetail.getLayout = function getLayout(page: ReactElement) {
  return <CorporateLayout>{page}</CorporateLayout>
}
export default UserDetail;
