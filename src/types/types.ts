import type { ReactNode } from "react";

export interface IPost {
  id : number;
  title : string;
  body : string;
}

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

export interface IPostCard {
  post: IPost
}

export interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
  toggleTheme: () => void;
}

export interface IProps {
  children: ReactNode;
}

export interface IActive {
  isActive?: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface WithDataLoadingProps<T> {
  data: T | null;
  isLoading: boolean;
  error?: string | null;
}