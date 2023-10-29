import { Box, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import React from "react";
import { listOfAllVariables } from "../../../Utils/DemoJSON";

const CalculateCorrelation = () => {
  console.log(listOfAllVariables, "list of all variables in correlation");

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ color: "white" }}>
      <Typography sx={{ fontWeight: "bold", fontSize: "h5.fontSize", marginBottom: "10px" }}>Calculate Correlation</Typography>
      <Box>
        <Box sx={{ minWidth: 100, display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
          <FormControl sx={{ width: "40%" }}>
            <h7>Select Variable A</h7>
            {/* <InputLabel id='demo-simple-select-label'>Age</InputLabel> */}
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={age}
              label='Age'
              onChange={handleChange}
              sx={{
                marginTop: "5px",
                color: "white",
                border: "1px solid",
                borderColor: "white",
                "& .MuiSelect-select": {
                  color: "white", // Change to your desired select color
                },
              }}>
              {listOfAllVariables.map((el, i) => {
                return <MenuItem value={el?.name}>{el?.name}</MenuItem>;
              })}
            </Select>
          </FormControl>
          <FormControl sx={{ width: "40%" }}>
            <h7>Select Variable B</h7>
            {/* <InputLabel id='demo-simple-select-label'>Age</InputLabel> */}
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={age}
              label='Age'
              onChange={handleChange}
              sx={{
                marginTop: "5px",
                color: "white",
                border: "1px solid",
                borderColor: "white",
                "& .MuiSelect-select": {
                  color: "white", // Change to your desired select color
                },
              }}>
              {listOfAllVariables.map((el, i) => {
                return <MenuItem value={el?.name}>{el?.name}</MenuItem>;
              })}
            </Select>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default CalculateCorrelation;
