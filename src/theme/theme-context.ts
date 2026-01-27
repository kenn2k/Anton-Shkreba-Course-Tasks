import { createContext, Dispatch, SetStateAction, useContext } from "react";

export type ThemeMode = "light" | "dark";

type ThemeContextType = {
  mode: ThemeMode;
  setMode: Dispatch<SetStateAction<ThemeMode>>;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const useThemeMode = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useThemeMode must be used within ThemeProvider");
  }
  return context;
};
