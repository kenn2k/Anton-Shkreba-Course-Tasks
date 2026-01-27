import React from "react";
import { BrowserRouter } from "react-router";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from "./theme/theme";
import { ThemeContext, ThemeMode } from "./theme/theme-context";
import { useState } from "react";
import { AppRouter } from "./router/AppRouter";
const App = () => {
  const [mode, setMode] = useState<ThemeMode>("light");

  const theme = mode === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppRouter />
        </ThemeProvider>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};

export default App;
