import { ThemeSwitcher } from "../../../features/ThemeSwitcher/ui/ThemeSwitcher"
import type { IActive } from "../../../types/types"
import { MyButton } from "../Button/MyButton"
import style from "./SpecFeature.module.css"

const SpecFeature = (props:IActive) => {
  const handleClick = () => {
    props.setIsActive(prev => !prev);
  };

  return (
    <div className={style.modalForm}>
      <ThemeSwitcher/>
      <MyButton className={style.button} onClick={handleClick}>
        О проекте
      </MyButton>
    </div>
  )
}

export default SpecFeature