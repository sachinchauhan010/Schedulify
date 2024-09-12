import ThemeBtn from "./themeBtn"
import Login from "./Login"



function Header() {
  return (
    <div className="flex flex-row justify-end items-center gap-x-8 p-3">
      <ThemeBtn/>
      <Login/>
    </div>
  )
}

export default Header
