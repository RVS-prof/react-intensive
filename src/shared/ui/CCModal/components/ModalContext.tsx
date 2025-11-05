import { createContext, useContext } from 'react';
import type { IModalContextType } from '../../../../app/types/types';

export const ModalContext = createContext<IModalContextType | undefined>(undefined);

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('Modal components must be used within a Modal');
  }
  return context;
};