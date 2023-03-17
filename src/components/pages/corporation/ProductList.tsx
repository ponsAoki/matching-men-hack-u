import { CorporateHeaderLine } from "@/components/layouts/corporation/CorporateHeaderLine";
import { Loading } from "@/components/pages/Loading";
import { useProducts } from "@/hooks/useProduct";
import { ProductCard } from "./ProductCard";

export const ProductList = () => {
  const { products } = useProducts();

  if(!products) return <Loading />


  return (
    <>
      <CorporateHeaderLine />
      <div className="flex justify-center font-bold mt-5">プロダクト一覧</div>
      <div className="grid mx-20 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 mt-5">
        {products.map((product) => {
          return (
            <ProductCard
              user_id={product.user_id}
              genre={product.genre}
              detailInfo={product.detailInfo}
              filePath={product.filePath}
              createDate={product.createDate}
            />
          )
        })}
      </div>
    </>
  )
}