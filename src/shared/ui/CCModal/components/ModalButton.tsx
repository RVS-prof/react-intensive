import styles from './Modal.module.css';
import { useModalContext } from './ModalContext';

export const ModalButton = () => {
  const { children } = useModalContext();
  return <div className={styles.button}>
    {children}
  </div>;
};