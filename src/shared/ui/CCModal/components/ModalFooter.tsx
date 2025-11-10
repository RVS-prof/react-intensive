import type { PropsWithChildren } from 'react';
import styles from './Modal.module.css';

export const ModalFooter: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles['body']}>{children}</div>;
};