import type { IProps } from '../type';
import styles from './Modal.module.css';

export const ModalButton = ({ children }: IProps) => {
  return <div className={styles.button}>
    {children}
  </div>;
};