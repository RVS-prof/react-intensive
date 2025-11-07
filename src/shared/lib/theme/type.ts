import type { ReactNode } from "react";

export interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
  toggleTheme: () => void;
}

export interface IProps {
  children: ReactNode;
}