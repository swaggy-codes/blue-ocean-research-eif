import React from "react";
import moment from "moment";
import styles from "./CustomTable.module.css";
import { GroupTags } from "../../Utils/DemoJSON";
// import CustomTag from "../CustomTag/CustomTag";
import { Avatar, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Button from "../CustomButton/CustomButton";
import { TableLoader } from "../CustomLoader/CustomLoader";

const CustomTable = ({ headers, data, tableHeading, loader, height }) => {
  console.log(data, "data inside the custom table component", headers);
  const matchesGroupTag = (item) => {
    // console.log(item, "itemmmmmmmmmmmmmmmmmmmmmmmmm");
    return GroupTags.some((tag) => tag?.name === item);
  };

  const getColumnData = (type, data) => {
    console.log(type, "8888888888888888888", data);
    switch (type) {
      case "date":
        return moment(data).local(true).format("ll");

      case "serviceTimings":
        return moment(data?.startTime).format("lll");

      case "serviceTime":
        return moment(data).format("lll");

      case "serviceName":
        return data?.name || "";

      case "serviceCategory":
        return data?.categoryName || "";

      case "totalNumber":
        return data?.length;

      default:
        return "";
    }
  };

  return (
    <>
      {/* <hr style={{ color: "white" }} />
      <div className=''>
        <h4>{tableHeading ? tableHeading : ""}</h4>
      </div> */}
      <hr style={{ color: "white" }} />

      <Box style={{ height: height ? height : "auto", border: "1px solid white", width: "100%", overflowY: "auto", paddingBottom: "5px" }}>
        <TableContainer style={{ height: "100%" }}>
          <Table className={`${styles?.tableWrapper}`}>
            <TableHead>
              <TableRow>
                {headers?.map((val) => (
                  <TableCell className={`${styles?.tableHeadCell}`} key={val?.heading}>
                    {val?.heading}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.length > 0 &&
                data?.map((el, idx) => (
                  <TableRow key={idx}>
                    {data?.length > 0 &&
                      headers?.map((header, idx) => {
                        if (header?.key === "image") {
                          return (
                            <TableCell key={`${header.key}_${idx}`}>
                              <Avatar src={el.image?.[0]} />
                            </TableCell>
                          );
                        }
                        return (
                          <TableCell key={`${header.key}_${idx}`} sx={{ fontFamily: "", color: "white" }}>
                            {/* {header?.type
                          ? getColumnData(header.type, el[header?.key])
                          : Boolean(matchesGroupTag(el[header?.key]) || el[header?.key2] === true)
                          ? el[header?.key2] === true
                            ? "OOOOOOO"
                            : "1111111"
                          : el[header?.key]} */}
                            {header?.key ? el[header?.key] : "--"}
                          </TableCell>
                        );
                      })}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          {(data == false || data == undefined) && loader === false ? (
            <p
              style={{
                display: "flex",
                fontWeight: "400",
                marginTop: "0.75rem",
                color: "white",
                justifyContent: "center",
              }}>
              No record found
            </p>
          ) : (
            ""
          )}
          {loader ? (
            <Box sx={{ margin: "10px", paddingTop: "10px" }}>
              <TableLoader />
            </Box>
          ) : (
            ""
          )}
        </TableContainer>
      </Box>
    </>
  );
};

export default CustomTable;
