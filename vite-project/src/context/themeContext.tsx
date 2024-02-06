import { createContext, useContext, useState, useMemo } from "react";
import { CssBaseline } from "@mui/material";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";
import { themeOptions } from "../theme/palete";
import { themeOptionsDark } from "../theme/paleteDark";

interface ThemeContextType {
  themeMode: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "useThemeContext must be used within a CustomThemeProvider"
    );
  }
  return context;
};

export const CustomThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [themeMode, setThemeMode] = useState<string>(
    localStorage.getItem("themeMode") || "light"
  );

  const toggleTheme = () => {
    setThemeMode((prevMode) => {
      const newMode = prevMode === "light" ? "dark" : "light";
      localStorage.setItem("themeMode", newMode);
      return newMode;
    });
  };

  const theme = useMemo(() => {
    return createTheme(themeMode === "dark" ? themeOptions : themeOptionsDark);
  }, [themeMode]);

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
      <CssBaseline />
    </ThemeContext.Provider>
  );
};
