import { Header } from "@/components/organisms/Header"
import { ReactNode } from "react"


type Props = {
  children: ReactNode
}

export const UserLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>

  )
}
