import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const ScreenOne = () => {
  return (
    <>
      <h1 style={{ color: "white" }}>Economical</h1>
      <Box sx={{ minHeight: "100vh" }}>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={8}>
            <Typography>helloooooooooooooooooooo</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography>helloooooooooooooooooooo</Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ScreenOne;
