import { Outlet } from "react-router"
import UserTabs from "../widgets/UserTabs/UserTabs"

export const User = () => {
  return (
    <>
      <header>
        <UserTabs/>
      </header>
      <Outlet />
    </>
  )
}
