import type { IProps } from '../../../../types/types';
import styles from './Modal.module.css';

export const ModalButton = ({ children }: IProps) => {
  return <div className={styles.button}>
    {children}
  </div>;
};