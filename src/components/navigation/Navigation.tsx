import React from "react";
import { Box, Drawer } from "@mui/material";
import { DrawerList } from "../../shared/UI/DrawerList";
import { Outlet } from "react-router";

export const Navigation = () => {
  return (
    <Box component="nav" sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
          },
        }}
      >
        <DrawerList />
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
        <Outlet />
      </Box>
    </Box>
  );
};
