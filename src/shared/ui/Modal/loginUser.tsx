import { NavLink } from 'react-router';
import { ModalComponent } from '../CCModal';
import style from './Infoject.module.css'
import type { ILoginUser } from './type';
import { useRef } from 'react';

const LoginUser = (props:ILoginUser) => {
  const handleClick = () => {
    props.setLogin(false);
  };
  const user = useRef(0)
  
  return (
    <div  className={style.modalBack} onClick={handleClick}>
      <ModalComponent post = {{
        id:1,
        title: 'Login 👤',
        body: '',
        size: 'lg'
      }}>
        <ModalComponent.Header>
        </ModalComponent.Header>
        <ModalComponent.Children>
          <div>
            <input type='number' value={user}/>
            <NavLink
              key={value}
              to={'/user/:' + value}
              role="tab"
            >

            </NavLink>
          </div>
        </ModalComponent.Children>
      </ModalComponent>
    </div>
  );
}

export default LoginUser