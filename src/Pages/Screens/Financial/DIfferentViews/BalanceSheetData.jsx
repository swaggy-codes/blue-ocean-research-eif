import React, { useEffect, useMemo, useState } from "react";
import CustomTable from "../../../../Components/CustomTable/CustomTable";
import { Box, TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";
import { balanceSheetDataYearlyINFY, headingForBalanceSheet } from "../../../../Utils/DemoJSON";

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  const style = {
    mt: 2,
    ml: 2,
    width: { sm: 10, md: 30 },
    backgroundColor: { xs: "secondary.light", sm: "#0000ff" },
    boxShadow: 6,
  };

  return (
    <TableHead>
      <TableRow>
        {/* <TableCell padding='checkbox'>
           <Checkbox
             color='primary'
             indeterminate={numSelected > 0 && numSelected < rowCount}
             checked={rowCount > 0 && numSelected === rowCount}
             onChange={onSelectAllClick}
             inputProps={{
               "aria-label": "select all desserts",
             }}
           />
         </TableCell> */}
        {/* {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "center" : "center"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
            width={1}
            style={{ color: "white" }}>
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}>
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component='span' sx={style}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))} */}
      </TableRow>
    </TableHead>
  );
}

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc" ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const BalanceSheetData = ({ props }) => {
  const { balanceSheetData } = props;
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState("asc");
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState("calories");
  //This the screen three logic...
  const [selectFilter, setSelectFilter] = useState("annually");
  const [rowDataToShow, setRowDataToShow] = useState([]);

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rowDataToShow?.length) : 0;

  const visibleRows = useMemo(
    () => stableSort(rowDataToShow || [], getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [order, orderBy, page, rowsPerPage, rowDataToShow]
  );

  useEffect(() => {
    if (selectFilter === "annually" && balanceSheetData?.data?.yearly.length > 0) {
      setRowDataToShow(balanceSheetData?.data?.yearly);
      // console.log(rowDataToShow, "this is the row data...", balanceSheetData?.data?.yearly);
    } else if (selectFilter === "quaterly" && balanceSheetData?.data) {
      setRowDataToShow({ data: balanceSheetData?.data?.quaterly });
    }
  }, [selectFilter]);

  console.log(rowDataToShow, "this is the row data... <<<<<<<<<<<<<<<<< ", balanceSheetData?.data?.yearly);

  return (
    <Box>
      <CustomTable headers={headingForBalanceSheet} data={balanceSheetDataYearlyINFY} />
    </Box>
  );
};

export default BalanceSheetData;
