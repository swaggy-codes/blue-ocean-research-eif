import { Box, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React, { useState } from "react";
import { industriesForScreenTwo, stagesForScreenTwo } from "../../../Utils/DemoJSON";
import AppLayout from "../../../AppLayout/AppLayout";

const Industrial = () => {
  const [companies, setCompanies] = useState([]);
  console.log(industriesForScreenTwo, "this is the industries for screen two");

  console.log(stagesForScreenTwo, "this is the stages for screen two");

  const rows = industriesForScreenTwo.valueOf();

  const handleToggle = (el) => () => {
    console.log(el, "this is the toggle");
    setCompanies(el?.companies);
  };

  return (
    <AppLayout>
      <Box>
        {/* <h1 style={{ color: "white" }}>Industrial</h1> */}
        <h4>INDUSTRIAL MODULE</h4>
        <hr style={{ color: "white" }} />
        <Grid container spacing={2} columns={16}>
          <Grid item xs={6}>
            <Grid spacing={2} columns={16} sx={{ display: "flex", justifyContent: "space-evenly" }}>
              <Grid item xs={8}>
                <h5>Sector</h5>
              </Grid>
              <Grid item xs={8}>
                <h5>Industry</h5>
              </Grid>
            </Grid>
            <List
              sx={{
                width: "100%",
                height: "70vh",
                maxWidth: "auto",
                bgcolor: "#020817",
                border: 1,
                borderColor: "white",
                overflowY: "auto",
              }}>
              {rows?.map((el, i) => {
                const labelId = `checkbox-list-label-${el}`;
                return (
                  <ListItem
                    key={el}
                    secondaryAction={
                      <IconButton edge='end' aria-label='comments'>
                        {/* <CommentIcon /> */}
                      </IconButton>
                    }
                    disablePadding>
                    <ListItemButton role={undefined} onClick={handleToggle(el)} dense>
                      <ListItemIcon></ListItemIcon>
                      <ListItemText id={labelId} primary={`${el?.sector}`} />
                      <ListItemText id={labelId} primary={`${el?.industries}`} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Grid>
          {/* All companies mapped */}
          <Grid item xs={10}>
            <Grid spacing={2} columns={16} sx={{ display: "flex", justifyContent: "space-evenly" }}>
              <Grid item xs={8}>
                <h5>Company ID</h5>
              </Grid>
              <Grid item xs={8}>
                <h5>Company Name</h5>
              </Grid>
            </Grid>
            <List
              sx={{
                width: "100%",
                height: "70vh",
                maxWidth: "auto",
                bgcolor: "#020817",
                border: 1,
                borderColor: "white",
                overflowY: "auto",
              }}>
              {companies?.length > 0 ? (
                companies?.map((el, i) => {
                  const labelId = `checkbox-list-label-${el}`;
                  return (
                    <ListItem
                      key={el}
                      secondaryAction={
                        <IconButton edge='end' aria-label='comments'>
                          {/* <CommentIcon /> */}
                        </IconButton>
                      }
                      disablePadding>
                      <ListItemButton role={undefined} onClick={handleToggle(el)} dense>
                        <ListItemIcon></ListItemIcon>
                        <ListItemText id={labelId} primary={`${el?.companyId}`} />
                        <ListItemText id={labelId} primary={`${el?.companyName}`} />
                      </ListItemButton>
                    </ListItem>
                  );
                })
              ) : (
                <h5>Please select a Sector to view its companies.</h5>
              )}
            </List>
          </Grid>
        </Grid>
      </Box>
    </AppLayout>
  );
};

export default Industrial;
