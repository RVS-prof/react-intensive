import { useCallback } from "react"
import { ThemeSwitcher } from "../../../features/ThemeSwitcher/ui/ThemeSwitcher"
import { MyButton } from "../Button/MyButton"
import { ModalComponent } from "../CCModal"
import style from "./SpecFeature.module.css"
import type { ISpecFeature } from "./type"

const SpecFeature = (props : ISpecFeature) => {
  const handleClick = useCallback(() => {
    props.setIsActive(prev => !prev);
  }, []);

  const login = useCallback(() => {
    props.setLogin(prev => !prev);
  }, []);

  return (
    <div  className={style.modalForm}>
      <ModalComponent post = {{
        id:1,
        title: "",
        body: '',
        size: 'sm'
      }}>
        <ModalComponent.Children>
          <ThemeSwitcher/>
          <MyButton onClick={handleClick} >
            О проекте
          </MyButton>
          <MyButton onClick={login} >
            Войти в аккаунт
          </MyButton>
        </ModalComponent.Children>
      </ModalComponent>
    </div>
  );
}

export default SpecFeature