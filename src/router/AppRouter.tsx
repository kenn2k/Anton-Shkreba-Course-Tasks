import React from "react";

import { Heroes } from "../components/heroes/Heroes";
import { Home } from "../components/home/Home";
import { About } from "../components/about/About";
import { Route, Routes } from "react-router";
import { Navigation } from "../components/navigation/Navigation";
import { Alert } from "@mui/material";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="heroes/:heroId?" element={<Heroes />} />
        <Route path="about" element={<About />} />
      </Route>
      <Route
        path="*"
        element={<Alert severity="error">404: Page Not Found</Alert>}
      />
    </Routes>
  );
};
