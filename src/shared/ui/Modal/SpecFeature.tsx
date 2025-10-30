import { ThemeSwitcher } from "../../../features/ThemeSwitcher/ui/ThemeSwitcher"
import type { IActive } from "../../../types/types"
import { MyButton } from "../Button/MyButton"
import { ModalComponent } from "../CCModal"
import style from "./SpecFeature.module.css"

const SpecFeature = (props:IActive) => {
  const handleClick = () => {
    props.setIsActive(prev => !prev);
  };


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
        {/* </ModalComponent.Button>
        <ModalComponent.Button> */}
          <MyButton onClick={handleClick}>
            О проекте
          </MyButton>
        </ModalComponent.Button>
      </ModalComponent>
    </div>
  );
  return (
    <div className={style.modalForm}>
      <ThemeSwitcher/>
      <MyButton onClick={handleClick}>
        О проекте
      </MyButton>
    </div>
  )
}

export default SpecFeature