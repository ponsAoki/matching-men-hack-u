import { ReactNode } from "react"
import { CorporateHeaderLine } from "@/components/organisms/CorporateHeaderLine"

type Props = {
  children: ReactNode
}

export const CorporateLayout = ({children}: Props) => {

  return (
    <>
      <CorporateHeaderLine />
      <main>{ children }</main>
    </>
  )
}

