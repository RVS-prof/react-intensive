import type { ReactNode } from "react";

export interface IPost {
  id : number,
  title : string,
  body : string
}

export interface IPostCard {
  post : IPost
}

export interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
  toggleTheme: () => void;
}

export interface IProps {
  children: ReactNode;
}