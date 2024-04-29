import React, { useEffect, useState } from "react";
import { recommendationsJson, responseFivePaisa, responseICICI, responseIIFL, responseMoneyControl10Stocks, responseSBI } from "../../Utils/DemoJSON";
import Header from "../../Components/Header/Header";
import {
  Box,
  Collapse,
  Grid,
  IconButton,
  Pagination,
  PaginationItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styles from "../../Components/CustomTable/CustomTable.module.css";
import CustomTable from "../../Components/CustomTable/CustomTable";
import {
  fetchFIVEPAISARecommendations,
  fetchICICIRecommendations,
  fetchIIFLRecommendations,
  fetchMCRecommendations,
  fetchSBIRecommendations,
} from "../../Api/ApiCalls/data";
import AppLayout from "../../AppLayout/AppLayout";
import { TableLoader } from "../../Components/CustomLoader/CustomLoader";
import moment from "moment";

function Row(props) {
  const { row, fullData } = props;
  const [open, setOpen] = useState(false);

  console.log("work on this", row);

  return (
    <React.Fragment>
      <TableRow className={""}>
        <TableCell sx={{ fontFamily: "", color: "white" }} component='th' scope='row'>
          {row.name || row?.Name}
          {/* <p className='m-0'>Company's Name | NSE</p> */}
          {/* <hr className='m-0' style={{ color: "white" }} /> */}
          {/* <p className='m-0'>{row?.date || "Date not available"}</p> */}
        </TableCell>
        <TableCell sx={{ fontFamily: "", color: "white" }} align='right'>
          {row?.date || "N/A"}
        </TableCell>
        <TableCell sx={{ fontFamily: "", color: "white" }} align='right'>
          {row.ltp || row.cmp || "N/A"}
        </TableCell>
        <TableCell sx={{ fontFamily: "", color: "white" }} align='right'>
          {row.target || row.target1 || "N/A"}
        </TableCell>
        <TableCell sx={{ fontFamily: "", color: "white" }} align='right'>
          {/* {row?.source2?.map((el) => (el !== undefined ? el + ", " : row?.name)) || "N/A"} */}
          {row?.source2
            ?.map((el, index, array) => {
              return el !== undefined ? el + (index < array.length - 1 ? ", " : "") : row?.name;
            })
            .join("")}
        </TableCell>
        {row?.source !== "SBI" && (
          <TableCell sx={{ fontFamily: "", color: "white" }}>
            <IconButton sx={{ fontFamily: "", color: "white" }} aria-label='expand row' size='small' onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
        )}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box margin={1}>
              <Typography variant='h6' gutterBottom component='p' sx={{ fontFamily: "", color: "white" }}>
                More Data
              </Typography>
              <Typography variant='' component={"p"} sx={{ fontFamily: "", color: "white" }}>
                {/* {console.log(row, "this to show.")} */}
                {row?.source === "ICICI" && (
                  <div className='row'>
                    <div className='col-6'>
                      <p>Duration: {row?.duration || "N/A"}</p>
                      <p>Entry Price: {row?.entryPrice || "N/A"}</p>
                    </div>
                    <div className='col-6'>
                      <p>Potential(%): {row?.potentialPerc || "N/A"}</p>
                      <p>Stop Loss: {row?.stopLoss || "N/A"}</p>
                    </div>
                  </div>
                )}
                {row?.source === "IIFL" && (
                  <div className='row'>
                    <div className='col-6'>
                      <p>High: {row?.high || "N/A"}</p>
                      <p>Low: {row?.low || "N/A"}</p>
                    </div>
                    <div className='col-6'>
                      <p>All Time High: {row?.allTH || "N/A"}</p>
                      <p>Change: {row?.change || "N/A"}</p>
                    </div>
                  </div>
                )}
                {row?.source === "5 PAISA" && (
                  <div className='row'>
                    <div className='col-6'>
                      <p>Target 2: {row?.target2 || "N/A"}</p>
                      <p>
                        Action:{" "}
                        <button className={`btn btn-${row?.action === "SELL" ? "danger" : "success"} recommendations-table-action-button`}>
                          {row.action}
                        </button>
                      </p>
                    </div>
                    <div className='col-6'>
                      <p>Stop Loss: {row?.sl || "N/A"}</p>
                    </div>
                  </div>
                )}
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const tableHeaders = [
  {
    key: "name",
    numeric: false,
    disablePadding: false,
    heading: "Name",
  },
  {
    key: "buy",
    numeric: false,
    disablePadding: false,
    heading: "Buy",
  },
  {
    key: "sell",
    numeric: false,
    disablePadding: false,
    heading: "Sell",
  },
  {
    key: "hold",
    numeric: false,
    disablePadding: false,
    heading: "Hold",
  },
  {
    key: "total",
    numeric: false,
    disablePadding: false,
    heading: "Total",
  },
];

const samllTableRecommendationData = [
  { name: "HDFC Bank", buy: "9", sell: "0", hold: "0", total: "9" },
  { name: "IndusInd Bank", buy: "8", sell: "0", hold: "0", total: "8" },
  { name: "Federal Bank", buy: "5", sell: "0", hold: "0", total: "7" },
  { name: "Infosys", buy: "6", sell: "0", hold: "0", total: "7" },
  { name: "GAIL", buy: "2", sell: "0", hold: "0", total: "5" },
];

const RecommendationsModule = () => {
  const convertArrayToFormat = (dataArray) => {
    return dataArray.map((item) => {
      // console.log(item, "conversion array...");
      return {
        name: item?.name !== "" ? `${item.name.split("<")?.[0]}` : "N/A",
        source: item?.source,
        ltp: item?.ltp,
        date: item?.date,
      };
    });
  };
  const sbiBackUpTwo = convertArrayToFormat(responseSBI);
  // console.log(recommendationsJson, "this is recommendation json");

  const [allRecom, setAllRecom] = useState({ data: [], loading: false });

  // const [allRecom, setAllRecom] = useState({ data: [...responseICICI, ...responseIIFL, ...sbiBackUpTwo, ...responseFivePaisa], loading: false });
  // const [mcResponse, setMcResponse] = useState({ data: responseMoneyControl10Stocks, loading: false });
  const [mcResponse, setMcResponse] = useState({ data: [], loading: false });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const uniqueElements = new Map();

  const fetchRecommndations = async () => {
    // setMcResponse((v) => ({ ...v, loading: true }));

    try {
      const res = await fetchIIFLRecommendations();
      const res2 = await fetchMCRecommendations();
      const res3 = await fetchICICIRecommendations();
      const res4 = await fetchFIVEPAISARecommendations();
      const res5 = await fetchSBIRecommendations();

      if (res?.status === 200 && res3?.status === 200 && res4?.status === 200) {
        const convertArrayToFormat = (dataArray) => {
          return dataArray.map((item) => {
            // console.log(item, "conversion array...");
            return {
              name: item?.name !== "" ? `${item.name.split("<")?.[0]}` : "N/A",
              source: item?.source,
            };
          });
        };

        const sbiBackUp = convertArrayToFormat(res5?.data);
        const sbiBackUpTwo = convertArrayToFormat(responseSBI);

        // const iiflBackUp = convertArrayToFormat(res?.data, "IIFL");

        // const iciciiBackUp = convertArrayToFormat(res3?.data, "ICICI");

        // const fivePaisaBackUp = convertArrayToFormat(res5?.data, "5 PAISA");

        // console.log(sbiBackUp, "this is the sbiiiiiiiii");
        setAllRecom({ data: [...res?.data, ...res3?.data, ...res4?.data, ...sbiBackUp], loading: false });
        // setAllRecom({ data: [...responseICICI, ...responseIIFL, ...sbiBackUpTwo, ...responseFivePaisa], loading: false });
      }
      if (res2?.status === 200) {
        setMcResponse({ data: res2?.data, loading: false });
      }

      // console.log(res2, "responseeeeeee");
    } catch (error) {
      console.log(error);
    }
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const newData = allRecom?.data?.map((item) => {
    const name2 = item.name.replace(/\s+/g, "").toLowerCase();
    return { ...item, name2 };
  });

  const sourcesByLabel = {};

  newData.forEach((item) => {
    // console.log(item, "this is the item");
    const { name2, source } = item;
    if (!sourcesByLabel[name2]) {
      sourcesByLabel[name2] = new Set();
    }
    sourcesByLabel[name2].add(source);
  });
  for (const name2 in sourcesByLabel) {
    sourcesByLabel[name2] = Array.from(sourcesByLabel[name2]);
  }

  const finalArrZ = newData.map((el) => {
    let name2 = el?.name2;
    const arr = sourcesByLabel[name2];
    return { ...el, source2: arr };
  });

  // console.log(finalArrZ, "this is the final array");

  finalArrZ?.filter((obj) => {
    const key = obj.name;
    if (!uniqueElements.has(key)) {
      uniqueElements.set(key, obj);
      return true;
    }
    return false;
  });

  const finalArray = Array.from(uniqueElements.values());

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedData = finalArray.slice(startIndex, endIndex);

  useEffect(() => {
    fetchRecommndations();
  }, []);

  // console.log(finalArray, "these are the recommendations", responseMoneyControl10Stocks);

  return (
    <AppLayout>
      <div className='p-4'>
        {/* <div className='row'>
          <div className='col-lg-12 d-flex justify-content-center'>
            <Header />
          </div>
        </div> */}
        <div className='row mt-4'>
          <h4>RECOMMENDATIONS MODULE</h4>
          <hr style={{ color: "white" }} />
          <div className='col-4 ps-0'>
            <h5>What to do with these stocks?</h5>
            <CustomTable headers={tableHeaders} data={mcResponse?.data} loader={mcResponse?.loading} height={"70%"} />
          </div>
          <div className='col-8 pe-0'>
            <h5>Recommended Stocks</h5>
            <hr style={{ color: "white" }} />
            <TableContainer component={Paper} sx={{ border: "1px solid white" }}>
              <Table aria-label='collapsible table' className={`${styles?.tableWrapper}`}>
                <TableHead className={`${styles?.tableHeadCell}`}>
                  <TableRow sx={{ fontFamily: "", color: "white" }}>
                    <TableCell sx={{ fontFamily: "", color: "white" }}>Name</TableCell>
                    <TableCell sx={{ fontFamily: "", color: "white" }} align='right'>
                      Date
                    </TableCell>
                    <TableCell sx={{ fontFamily: "", color: "white" }} align='right'>
                      LTP/CMP
                    </TableCell>
                    <TableCell sx={{ fontFamily: "", color: "white" }} align='right'>
                      Target
                    </TableCell>
                    <TableCell sx={{ fontFamily: "", color: "white" }} align='right'>
                      Source
                    </TableCell>
                    <TableCell sx={{ fontFamily: "", color: "white" }} />
                  </TableRow>
                </TableHead>
                <TableBody sx={{ fontFamily: "", color: "white" }}>
                  {paginatedData?.map((row) => {
                    {
                      /* console.log(row, "thisd"); */
                    }
                    return <Row key={row.name} row={row} fullData={finalArrZ} sx={{ fontFamily: "", color: "white" }} />;
                  })}
                </TableBody>
              </Table>
              {paginatedData?.length === 0 && (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    backgroundColor: "#020817",
                    color: "white",
                    padding: "1rem",
                  }}>
                  <TableLoader />
                </Box>
              )}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "#020817",
                  color: "white",
                  // marginTop: "1rem",
                  padding: "1rem",
                }}>
                <Pagination
                  count={Math.ceil(finalArray.length / itemsPerPage)}
                  page={currentPage}
                  onChange={(event, newPage) => handlePageChange(newPage)}
                  color='primary'
                  sx={{
                    "& .MuiPaginationItem-root": {
                      color: "white",
                      backgroundColor: "#020817", // Background color for the buttons
                    },
                    "& .MuiPaginationItem-page.Mui-selected": {
                      backgroundColor: "#1E90FF", // Background color for the selected button
                    },
                  }}
                  renderItem={(item) => (
                    <PaginationItem
                      component='div'
                      {...item}
                      sx={{
                        "&:hover": {
                          backgroundColor: "#1E90FF", // Background color on hover
                        },
                      }}
                    />
                  )}
                />
              </Box>
            </TableContainer>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default RecommendationsModule;
