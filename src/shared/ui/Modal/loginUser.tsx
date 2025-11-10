import { useNavigate } from 'react-router';
import { ModalComponent } from '../CCModal';
import style from "./loginUser.module.css"
import type { ILoginUser } from './type';
import { useState } from 'react';
import { MyButton } from '../Button/MyButton';

const LoginUser = (props:ILoginUser) => {
  const [inputValue, setInputValue] = useState<string>('');
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (inputValue.trim() !== '' && !isNaN(Number(inputValue))) {
      navigate(`/user/${inputValue}`);
    }
  };

  const handleClick = () => {
    props.setLogin(false);
  };

  const isButtonDisabled = inputValue.trim() === '' || isNaN(Number(inputValue));
  
  return (
    <div  className={style.modalBack} onClick={handleClick}>
      <ModalComponent post = {{
        id:2,
        title: 'Login 👤',
        body: '',
        size: 'lg'
      }}>
        <ModalComponent.Header>
        </ModalComponent.Header>
        <ModalComponent.Children>
          <div>
            <h3>
              Активно всего с 1 по 10 айди пользователей
            </h3>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Введите числовой ID"
              style={
                {border: `2px solid ${isButtonDisabled ? '#ccc' : '#4CAF50'}`}
              }
              className={style.input}
            />
            
            <MyButton
              onClick={handleButtonClick}
              disabled={isButtonDisabled}
              style={{
                backgroundColor: isButtonDisabled ? '#cccccc' : '#4CAF50',
                cursor: isButtonDisabled ? 'not-allowed' : 'pointer'
              }}
              className={style.button}
            >
              Перейти по ID
            </MyButton>
            {inputValue.trim() !== '' && isNaN(Number(inputValue)) && (
              <p>
                Пожалуйста, введите корректный числовой ID
              </p>
            )}
          </div>
        </ModalComponent.Children>
      </ModalComponent>
    </div>
  );
}

export default LoginUser