import type { PropsWithChildren } from 'react';
import styles from './Modal.module.css';

export const ModalChildren: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles['button']}>
    {children}
  </div>;
};