import React from "react";
import { useParams } from "react-router";
import { getHeroById } from "./api/fetchHeroes";
import { Alert, Box, CircularProgress, Typography } from "@mui/material";
import { useRequest } from "ahooks";

export const HeroById = () => {
  const { heroId } = useParams();

  const {
    data: hero,
    loading,
    error,
  } = useRequest(() => getHeroById(heroId as string), {
    ready: !!heroId,
  });

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">Failed to load hero</Alert>;

  return (
    <Box>
      <Typography variant="h4">{hero.name}</Typography>
      <img src={hero.image} alt={hero.name} />
      <Typography>Status: {hero.status}</Typography>
      <Typography>Species: {hero.species}</Typography>
    </Box>
  );
};
