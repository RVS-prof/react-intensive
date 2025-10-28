import { useContext } from 'react'
import { ThemeContext } from '../../../shared/lib/theme/ThemeProvider'
import styles from './ThemeSwitcher.module.css'
import { MyButton } from '../../../shared/ui/Button/MyButton'

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <MyButton 
      className={styles.switcher}
      onClick={toggleTheme}
      aria-label={`Переключить на ${theme === 'light' ? 'тёмную' : 'светлую'} тему`}
    >
      <span className={styles.icon}>
        {theme === 'light' ? '🌙' : '☀️'}
      </span>
    </MyButton>
  )
}