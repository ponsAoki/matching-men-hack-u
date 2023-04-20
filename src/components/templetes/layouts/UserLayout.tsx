import { Header } from "@/components/organisms/Header"
// import { SuccessModal } from "@/components/organisms/SuccessModal"
import { ReactNode } from "react"


type Props = {
  children: ReactNode
}

export const UserLayout = ({ children }: Props) => {
  return (
    <>
      {/* <SuccessModal /> */}
      <Header />
      <main>{children}</main>
    </>

  )
}
