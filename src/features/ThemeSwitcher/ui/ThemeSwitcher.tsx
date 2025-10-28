import { useContext } from 'react'
import { ThemeContext } from '../../../shared/lib/theme/ThemeProvider'
import styles from './ThemeSwitcher.module.css'
import { MyButton } from '../../../shared/ui/Button/MyButton'

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <MyButton 
      className={styles.themeSwitcher}
      onClick={toggleTheme}
      aria-label={`Переключить на ${theme === 'light' ? 'тёмную' : 'светлую'} тему`}
    >
      <span className={styles.icon}>
        {theme === 'light' ? '🌙' : '☀️'}
      </span>
      <span className={styles.text}>
        {theme === 'light' ? 'Тёмная' : 'Светлая'}
      </span>
    </MyButton>
  )
}