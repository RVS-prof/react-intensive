import { useState } from 'react'
import { MyButton } from '../../shared/ui/Button/MyButton'
import SpecFeature from '../../shared/ui/Modal/SpecFeature'
import style from './LayoutHeader.module.css'
import Infoject from '../../shared/ui/Modal/Infoject'
import LoginUser from '../../shared/ui/Modal/loginUser'


export default function LayoutHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [login, setLogin] = useState(false)

  return (
    <>
      <header className={style.mainHeader}>
        <div className={style.mainHeader__icon}>
          <img src="vite.svg" alt="icon" />
          <h3>
            React Internsive
          </h3>
        </div>
        <input type="text" disabled placeholder='Поиск'/>
        <MyButton className={style.mainHeader__button} onClick={() => setIsOpen(!isOpen)}>
          Специальные возможности
        </MyButton>
        {isOpen && <SpecFeature setIsActive={setIsActive} setLogin={setLogin}/>}
      </header>
      {isActive && <Infoject setIsActive={setIsActive}/>}
      {login && <LoginUser setLogin={setLogin}/>}
    </>
  )
}