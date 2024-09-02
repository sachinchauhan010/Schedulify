import ThemeBtn from "./themeBtn"
import Login from "./Login"



function Header() {
  return (
    <div className="flex flex-row justify-end items-center gap-x-6 py-1">
      <ThemeBtn/>
      <Login/>
    </div>
  )
}

export default Header
