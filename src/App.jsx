import { useEffect, useState } from "react"

import { ThemeProvider } from "./contexts/theme"
import Header from "./components/Header.jsx"
import FileUpload from "./components/FileUpload.jsx"

function App() {

  const [themeMode, setThemeMode] = useState('dark')

  const lightTheme = () => {
    setThemeMode('light')
  }

  const darkTheme = () => {
    setThemeMode('dark')
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark')
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

 
  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="dark:bg-[#09090b] min-h-screen dark:text-[#fafafa] sm:px-4 lg:px-6">
        <Header />
        <FileUpload />
      </div>
    </ThemeProvider>
  )
}

export default App
