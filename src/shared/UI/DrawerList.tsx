import React from "react";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { useThemeMode } from "../../theme/theme-context";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Heroes", to: "/heroes" },
  { label: "About", to: "/about" },
];

export const DrawerList = () => {
  const { mode, setMode } = useThemeMode();

  const toggleMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        bgcolor: "primary.main",
        color: "#fff",
      }}
    >
      <List sx={{ flexGrow: 1 }}>
        {navLinks.map(({ label, to }) => (
          <ListItem key={label} disablePadding>
            <ListItemButton
              component={NavLink}
              to={to}
              sx={{
                "&.active": {
                  backgroundColor: "action.selected",
                },
              }}
            >
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Box sx={{ p: 2 }}>
        <Button fullWidth variant="contained" onClick={toggleMode}>
          {mode === "light" ? "Night" : "Light"}
        </Button>
      </Box>
    </Box>
  );
};
