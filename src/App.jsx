import React, { useState } from "react";
import { AppRouter } from "./router/AppRouter";
import { BrowserRouter } from "react-router";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from "./theme/theme";
import { ThemeContext } from "./theme/theme-context";

const App = () => {
  const [mode, setMode] = useState("light");

  const theme = mode === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppRouter mode={mode} setMode={setMode} />
        </ThemeProvider>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};

export default App;
