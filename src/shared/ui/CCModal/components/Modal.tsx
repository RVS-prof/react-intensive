import styles from './Modal.module.css';
import { ModalHeader } from './ModalHeader'
import { ModalBody } from './ModalBody'
import { ModalFooter } from './ModalFooter'
import { ModalChildren } from './ModalChildren';
import { ModalContext } from './ModalContext';
import type { IModalContextType } from '../type';

export const ModalComponent = ({children, post}: IModalContextType) => {
  return (
    <ModalContext.Provider value={{post}}>
        <div className={`${styles['modal']} ${styles[post.size]}`} onClick={e => e.stopPropagation()}>
          {children}
        </div>
    </ModalContext.Provider>
  );
};

ModalComponent.Header = ModalHeader
ModalComponent.Body = ModalBody
ModalComponent.Footer = ModalFooter
ModalComponent.Children = ModalChildren