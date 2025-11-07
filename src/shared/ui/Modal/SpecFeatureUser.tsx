import { ModalComponent } from "../CCModal"
import style from "./SpecFeature.module.css"
import UserTabs from "../../../widgets/UserTabs/UserTabs"

const SpecFeatureUser = () => {
  return (
    <div  className={style.modalForm}>
      <ModalComponent post = {{
        id:3,
        title: "",
        body: '',
        size: 'sm'
      }}>
        <ModalComponent.Children>
          <UserTabs />
        </ModalComponent.Children>
      </ModalComponent>
    </div>
  );
}

export default SpecFeatureUser