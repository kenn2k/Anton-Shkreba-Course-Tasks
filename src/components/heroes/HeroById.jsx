import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
// import { getHeroById } from "./api/fetchHeroes";
import { Alert, Box, CircularProgress, Typography } from "@mui/material";

export const HeroById = ({ heroes, loading, error }) => {
  const { heroId } = useParams();

  //* I found a way to find a hero by ID locally from hero
  const hero = heroes.find((char) => String(char.id) === heroId);

  if (!hero) {
    return <Alert severity="error">Hero not found</Alert>;
  }

  // const [hero, setHero] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   async function fetchHero() {
  //     try {
  //       const data = await getHeroById(heroId);
  //       setHero(data);
  //     } catch (e) {
  //       setError("Failed to load hero");
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  //   fetchHero();
  // }, [heroId]);

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <Box>
      <Typography variant="h4">{hero.name}</Typography>
      <img src={hero.image} alt={hero.name} />
      <Typography>Status: {hero.status}</Typography>
      <Typography>Species: {hero.species}</Typography>
    </Box>
  );
};
