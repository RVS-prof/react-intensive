import type { IActive } from '../../../types/types'
import style from './Infoject.module.css'

const Infoject = (props:IActive) => {
  const handleClick = () => {
    props.setIsActive(false);
  };

  return (
    <div  className={style.modalBack} onClick={handleClick}>
      <div className={style.modalForm} onClick={e => e.stopPropagation()}>
        <h1>
          О проекте
        </h1>
        <h3>
          React-приложение с современным пользовательским интерфейсом, включающим систему модальных окон, переключатель тем и адаптивный дизайн. Проект демонстрирует лучшие практики разработки на React с использованием TypeScript, модульной структуры и компонентного подхода.
        </h3>
      </div>
    </div>
  )
}

export default Infoject