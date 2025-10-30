import { createContext, useContext } from 'react';
import type { IPostCard } from '../../../../types/types';

export const ModalContext = createContext<IPostCard | undefined>(undefined);

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('Modal components must be used within a Modal');
  }
  return context;
};