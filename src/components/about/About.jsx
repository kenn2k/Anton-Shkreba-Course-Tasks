import { Box, Typography } from "@mui/material";
import React from "react";

export const About = () => {
  return (
    <Box
      sx={{
        width: "auto",
        bgcolor: (theme) => theme.palette.background.default,
        color: (theme) => theme.palette.text.primary,
        height: "100vh",
        p: 2,
      }}
    >
      <Typography variant="h1">About</Typography>
    </Box>
  );
};
