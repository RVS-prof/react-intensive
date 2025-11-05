import UserTabs from "../widgets/UserTabs/UserTabs"

export const User = () => {
  const idd : number = 123

  return (
    <>
      <header>
        <UserTabs userId={idd}/>
      </header>
    </>
  )
}
