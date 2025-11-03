import type { IActive } from '../../../types/types'
import { ModalComponent } from '../CCModal';
import style from './Infoject.module.css'

const Infoject = (props:IActive) => {
  const handleClick = () => {
    props.setIsActive(false);
  };
  return (
    <div  className={style.modalBack} onClick={handleClick}>
      <ModalComponent post = {{
        id:1,
        title: "О проекте",
        body: 'React-приложение с современным пользовательским интерфейсом, включающим систему модальных окон, переключатель тем и адаптивный дизайн. Проект демонстрирует лучшие практики разработки на React с использованием TypeScript, модульной структуры и компонентного подхода.',
        size: 'lg'
      }}>
        <ModalComponent.Header>
        </ModalComponent.Header>
        <ModalComponent.Body>
        </ModalComponent.Body>
      </ModalComponent>
    </div>
  );
}

export default Infoject