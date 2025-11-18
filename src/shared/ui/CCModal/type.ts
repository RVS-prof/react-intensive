import type { ReactNode } from "react";

export interface IModal {
  id : number;
  title : string;
  body : string;
  size: 'sm' | 'md' | 'lg';
}

export interface IModalContextType {
  post: IModal
  children?: ReactNode;
}