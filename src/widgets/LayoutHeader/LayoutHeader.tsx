import style from './LayoutHeader.module.css'

export default function LayoutHeader() {
  return (
    <header className={style.mainHeader}>
      <div className={style.mainHeader__icon}>
        <img src="vite.svg" alt="icon" />
        <h3>
          React Internsive
        </h3>
      </div>
      <input type="text" disabled placeholder='Поиск'/>
      <h3>
        Навигационная панель
      </h3>
    </header>
  )
}
