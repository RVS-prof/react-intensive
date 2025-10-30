import styles from './Modal.module.css';
import { ModalHeader } from './ModalHeader'
import { ModalBody } from './ModalBody'
import { ModalFooter } from './ModalFooter'
import { ModalContext } from './ModalContext';
import type { IPostCard } from '../../../../types/types';

export const ModalComponent = ({children, post}: IPostCard) => {
  return (
    <ModalContext.Provider value={{post}}>
        <div className={styles.modal}>
          {children}
        </div>
    </ModalContext.Provider>
  );
};

ModalComponent.Header = ModalHeader
ModalComponent.Body = ModalBody
ModalComponent.Footer = ModalFooter