import { ProductList } from "@/components/organisms/ProductList"
import { CorporateLayout } from "@/components/templetes/layouts/CorporateLayout";
import { ReactNode } from "react";

const productList = () => {

  return (
    <>
      <ProductList />
    </>
  )
}

productList.getLayout = function getLayout(page: ReactNode) {
  return <CorporateLayout>{page}</CorporateLayout>
}
export default productList;
