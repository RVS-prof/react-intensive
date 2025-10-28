import { ThemeSwitcher } from "../../../features/ThemeSwitcher/ui/ThemeSwitcher"
import { MyButton } from "../Button/MyButton"
import style from "./SpecFeature.module.css"

const SpecFeature = () => {
  return (
    <div className={style.modalForm}>
      <ThemeSwitcher/>
      <MyButton>
        
      </MyButton>
    </div>
  )
}

export default SpecFeature