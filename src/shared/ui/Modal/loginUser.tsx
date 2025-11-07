import { useNavigate } from 'react-router';
import { ModalComponent } from '../CCModal';
import style from './Infoject.module.css'
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
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Введите числовой ID"
              style={{
                padding: '10px',
                fontSize: '16px',
                width: '200px',
                marginRight: '10px',
                border: `2px solid ${isButtonDisabled ? '#ccc' : '#4CAF50'}`
              }}
            />
            
            <MyButton
              onClick={handleButtonClick}
              disabled={isButtonDisabled}
              style={{
                padding: '10px 20px',
                fontSize: '16px',
                backgroundColor: isButtonDisabled ? '#cccccc' : '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: isButtonDisabled ? 'not-allowed' : 'pointer'
              }}
            >
              Перейти по ID
            </MyButton>
            {inputValue.trim() !== '' && isNaN(Number(inputValue)) && (
              <p style={{ color: 'red', marginTop: '10px' }}>
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