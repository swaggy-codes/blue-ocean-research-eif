import { Box, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import React, { useState } from "react";
import { listOfAllVariables } from "../../../Utils/DemoJSON";
import { getCorrelationImage, getCorrelationStats, getVariableDetails } from "../../../Api/ApiCalls/data";
import { useEffect } from "react";
import { Image } from "@mui/icons-material";
import GraphImage from "../../../Assets/images/graph_image.jpeg";

const CalculateCorrelation = () => {
  console.log(listOfAllVariables, "list of all variables in correlation");
  const [variableOne, setVariableOne] = useState({ name: "", endpoint: "", value: "" });
  const [variableTwo, setVarialeTwo] = useState({ name: "", endpoint: "", value: "" });

  const handleVariableChangeOne = async (e) => {
    setVariableOne((v) => ({ ...v, endpoint: e.target.value }));
    try {
      const res = await getVariableDetails(e.target.value);
      if (res?.status === 200) {
        setVariableOne((v) => ({
          endpoint: "",
        }));
      }
    } catch (error) {}
  };

  const handleVariableChangeTwo = async (e) => {
    setVarialeTwo((v) => ({ ...v, endpoint: e.target.value }));
    try {
      const res = await getVariableDetails(e.target.value);
      if (res?.status === 200) {
        setVarialeTwo((v) => ({
          endpoint: "",
        }));
      }
    } catch (error) {}
  };

  const fetchCorrelationStatsAndGraph = async () => {
    if (Boolean(variableOne?.endpoint !== "" && variableTwo?.endpoint !== "")) {
      try {
        const res = await getCorrelationStats(variableOne?.endpoint, variableTwo?.endpoint, variableOne?.value, variableTwo?.value);
        const res2 = await getCorrelationImage(variableOne?.endpoint, variableTwo?.endpoint, variableOne?.value, variableTwo?.value);
      } catch (error) {}
    }
  };

  useEffect(() => {
    fetchCorrelationStatsAndGraph();
  }, [variableOne?.endpoint, variableTwo?.endpoint]);

  return (
    <Box sx={{ color: "white" }}>
      <Typography sx={{ fontWeight: "bold", fontSize: "h5.fontSize", marginBottom: "10px" }}>Calculate Correlation</Typography>
      {/* first row */}
      <Box>
        <Box sx={{ minWidth: 100, display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
          <FormControl sx={{ width: "40%" }}>
            <h6>Select Variable A</h6>
            {/* <InputLabel id='demo-simple-select-label'>Age</InputLabel> */}
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={variableOne?.endpoint}
              label='Age'
              onChange={(e) => handleVariableChangeOne(e)}
              // renderValue={() => {
              //   if (variableOne?.endpoint.length === 0) {
              //     return <em>Placeholder</em>;
              //   }
              // }}
              sx={{
                marginTop: "5px",
                color: "white",
                border: "1px solid",
                borderColor: "white",
                "& .MuiSelect-select": {
                  color: "white", // Change to your desired select color
                },
              }}>
              <MenuItem disabled value=''>
                <em>Select Variable</em>
              </MenuItem>
              {listOfAllVariables.map((el, i) => {
                return <MenuItem value={el?.name}>{el?.name}</MenuItem>;
              })}
            </Select>
          </FormControl>
          <FormControl sx={{ width: "40%" }}>
            <h6>Select Variable B</h6>
            {/* <InputLabel id='demo-simple-select-label'>Age</InputLabel> */}
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              name='variableTwo'
              value={variableTwo?.endpoint}
              label='Age'
              onChange={(e) => handleVariableChangeTwo(e)}
              sx={{
                marginTop: "5px",
                color: "white",
                border: "1px solid",
                borderColor: "white",
                "& .MuiSelect-select": {
                  color: "white", // Change to your desired select color
                },
              }}>
              <MenuItem disabled value=''>
                <em>Select Variable</em>
              </MenuItem>
              {listOfAllVariables.map((el, i) => {
                return (
                  <MenuItem value={el?.value} name={el?.name}>
                    {el?.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Box>
      </Box>
      {/* second row */}
      <Box>
        <Box sx={{ minWidth: 100, display: "flex", flexDirection: "row", justifyContent: "space-around", marginTop: "10px" }}>
          <FormControl sx={{ width: "40%" }}>
            <h6>Select Variable A's Value</h6>
            {/* <InputLabel id='demo-simple-select-label'>Age</InputLabel> */}
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={variableOne?.endpoint}
              label='Age'
              onChange={(e) => handleVariableChangeOne(e)}
              // renderValue={() => {
              //   if (variableOne?.endpoint.length === 0) {
              //     return <em>Placeholder</em>;
              //   }
              // }}
              sx={{
                marginTop: "5px",
                color: "white",
                border: "1px solid",
                borderColor: "white",
                "& .MuiSelect-select": {
                  color: "white", // Change to your desired select color
                },
              }}>
              <MenuItem disabled value=''>
                <em>Select Variable</em>
              </MenuItem>
              {listOfAllVariables.map((el, i) => {
                return <MenuItem value={el?.name}>{el?.name}</MenuItem>;
              })}
            </Select>
          </FormControl>
          <FormControl sx={{ width: "40%" }}>
            <h6>Select Variable B's Value</h6>
            {/* <InputLabel id='demo-simple-select-label'>Age</InputLabel> */}
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              name='variableTwo'
              value={variableTwo?.endpoint}
              label='Age'
              onChange={(e) => handleVariableChangeTwo(e)}
              sx={{
                marginTop: "5px",
                color: "white",
                border: "1px solid",
                borderColor: "white",
                "& .MuiSelect-select": {
                  color: "white", // Change to your desired select color
                },
              }}>
              <MenuItem disabled value=''>
                <em>Select Variable</em>
              </MenuItem>
              {listOfAllVariables.map((el, i) => {
                return (
                  <MenuItem value={el?.value} name={el?.name}>
                    {el?.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Typography sx={{ fontWeight: "bold", fontSize: "h5.fontSize", marginBottom: "10px", marginTop: "10px" }}>Correlation Graph</Typography>
      <Box>
        <img src={GraphImage} width='500' height='300' />
      </Box>
    </Box>
  );
};

export default CalculateCorrelation;
