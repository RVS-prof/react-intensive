import { createContext, useEffect, useState } from "react"
import type { ThemeContextType, IProps } from "../../../app/types/types"

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => {},
  toggleTheme: () => {}
})

export const ThemeProvider = ({children} : IProps) => {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
  }

  useEffect(() => {
    const rootElement = document.getElementById('root');
    if(rootElement){
        if (theme === "dark") {
        rootElement.classList.add('darkTheme')
      } else {
        rootElement.classList.remove('darkTheme')
      }
    }

    localStorage.setItem('theme', theme)
  }, [theme])

  const value: ThemeContextType = {
    theme,
    setTheme,
    toggleTheme
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}
