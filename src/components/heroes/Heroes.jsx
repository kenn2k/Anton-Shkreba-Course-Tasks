import React, { useEffect, useState } from "react";
import { Alert, Box, CircularProgress, Drawer } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import { getHeroes } from "./api/fetchHeroes";
import { useNavigate, useParams } from "react-router";
import { HeroById } from "./HeroById";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", flex: 1 },
  { field: "status", headerName: "Status", width: 120 },
];

export const Heroes = () => {
  const navigate = useNavigate();

  const { heroId } = useParams();
  const isDrawerOpen = Boolean(heroId);

  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchHeroesData() {
      try {
        const data = await getHeroes();
        setHeroes(data);
      } catch (err) {
        setError("Failed fetching data");
      } finally {
        setLoading(false);
      }
    }
    fetchHeroesData();
  }, []);

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <DataGrid
          rows={heroes}
          columns={columns}
          onRowClick={(params) => navigate(`/heroes/${params.id}`)}
          sx={(theme) => ({
            "& .MuiDataGrid-row": {
              backgroundColor:
                theme.palette.mode === "light"
                  ? theme.palette.action.hover
                  : theme.palette.background.paper,
            },

            "& .MuiDataGrid-row:hover": {
              backgroundColor:
                theme.palette.mode === "light"
                  ? theme.palette.primary.light
                  : theme.palette.primary.dark,
            },
          })}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 15 },
            },
          }}
          pageSizeOptions={[15]}
          disableRowSelectionOnClick
        />
      </Box>

      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => navigate("/heroes")}
      >
        <Box sx={{ width: 360, p: 2 }}>
          {heroId && (
            <HeroById heroes={heroes} loading={loading} error={error} />
          )}
        </Box>
      </Drawer>
    </>
  );
};
