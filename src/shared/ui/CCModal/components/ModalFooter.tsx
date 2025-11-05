import type { IProps } from '../../../../app/types/types';
import styles from './Modal.module.css';

export const ModalFooter = ({ children } : IProps) => {
  return <div className={styles.body}>{children}</div>;
};