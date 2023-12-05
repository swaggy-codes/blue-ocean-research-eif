import React from "react";
import styles from "./CustomTable.module.css";
import { Avatar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { GroupTags } from "../../Utils/DemoJSON";
// import CustomTag from "../CustomTag/CustomTag";
import moment from "moment";

const CustomTable = ({ headers, data }) => {
  // console.log(data, "data inside the custom table component");
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
    <TableContainer>
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
                    {
                      /* console.log(el, "headerrrrrrrrrrrrrrrrrrrrrrrrrr", el[header?.key]); */
                    }
                    if (header?.key === "image") {
                      return (
                        <TableCell key={`${header.key}_${idx}`}>
                          <Avatar src={el.image?.[0]} />
                        </TableCell>
                      );
                    }

                    return (
                      <TableCell key={`${header.key}_${idx}`} sx={{ fontFamily: "Roboto Slab", color: "white" }}>
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
      {data == false || data == undefined ? (
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
    </TableContainer>
  );
};

export default CustomTable;
