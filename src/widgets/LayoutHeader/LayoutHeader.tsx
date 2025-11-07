import { useId, useState } from 'react'
import { MyButton } from '../../shared/ui/Button/MyButton'
import SpecFeature from '../../shared/ui/Modal/SpecFeature'
import style from './LayoutHeader.module.css'
import Infoject from '../../shared/ui/Modal/Infoject'
import LoginUser from '../../shared/ui/Modal/loginUser'
import { NavLink, useLocation } from 'react-router'
import SpecFeatureUser from '../../shared/ui/Modal/SpecFeatureUser'


export default function LayoutHeader() {
  const page = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [login, setLogin] = useState(false)
  const id = useId()

  return (
    <>
      <header className={style.mainHeader}>
        <div className={style.mainHeader__icon}>
          <NavLink
            key={id}
            to={'/'}
            role="main"
          >
            <img src="vite.svg" alt="icon"/>
            <h3>
              React Internsive
            </h3>
          </NavLink>
        </div>
        <input type="text" disabled placeholder='Поиск'/>
        <MyButton className={style.mainHeader__button} onClick={() => setIsOpen(!isOpen)}>
            Специальные возможности
        </MyButton>
        {page.pathname === '/' ?
          isOpen && <SpecFeature setIsActive={setIsActive} setLogin={setLogin}/> :
          isOpen && <SpecFeatureUser/>
        }
        
        
      </header>
      {isActive && <Infoject setIsActive={setIsActive}/>}
      {login && <LoginUser setLogin={setLogin}/>}
    </>
  )
}