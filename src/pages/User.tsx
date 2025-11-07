import { Outlet } from "react-router"
import LayoutHeader from "../widgets/LayoutHeader/LayoutHeader"

export const User = () => {
  return (
    <>
      <LayoutHeader />
      <Outlet />
    </>
  )
}
