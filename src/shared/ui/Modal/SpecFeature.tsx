import { useCallback } from "react"
import { ThemeSwitcher } from "../../../features/ThemeSwitcher/ui/ThemeSwitcher"
import type { IActive } from "../../../types/types"
import { MyButton } from "../Button/MyButton"
import { ModalComponent } from "../CCModal"
import style from "./SpecFeature.module.css"

const SpecFeature = (props:IActive) => {
  const handleClick = useCallback(() => {
    props.setIsActive(prev => !prev);
  }, []);

  return (
    <div  className={style.modalForm}>
      <ModalComponent post = {{
        id:1,
        title: "",
        body: '',
        size: 'sm'
      }}>
        <ModalComponent.Button>
          <ThemeSwitcher/>
          <MyButton onClick={handleClick} >
            О проекте
          </MyButton>
        </ModalComponent.Button>
      </ModalComponent>
    </div>
  );
}

export default SpecFeature