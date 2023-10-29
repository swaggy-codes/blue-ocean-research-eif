import * as React from "react";
import { Box, Grid, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import { getApiWithoutToken } from "../../../Api/ApiSettings/ApiMethods";
import { combined } from "../../../Utils/DemoJSON";
import classes from "./Economical.module.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";

function createData(id, name, calories, fat, carbs, protein) {
  return {
    id,
    name,
    calories,
    fat,
    carbs,
    protein,
  };
}

// const rows = [
//   createData(1, "Cupcake", 305, 3.7, 67, 4.3),
//   createData(2, "Donut", 452, 25.0, 51, 4.9),
//   createData(3, "Eclair", 262, 16.0, 24, 6.0),
//   createData(4, "Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData(5, "Gingerbread", 356, 16.0, 49, 3.9),
//   createData(6, "Honeycomb", 408, 3.2, 87, 6.5),
//   createData(7, "Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData(8, "Jelly Bean", 375, 0.0, 94, 0.0),
//   createData(9, "KitKat", 518, 26.0, 65, 7.0),
//   createData(10, "Lollipop", 392, 0.2, 98, 0.0),
//   createData(11, "Marshmallow", 318, 0, 81, 2.0),
//   createData(12, "Nougat", 360, 19.0, 9, 37.0),
//   createData(13, "Oreo", 437, 18.0, 63, 4.0),
// ];

const rows = combined.valueOf();

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

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
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

const headCells = [
  {
    id: "year",
    numeric: true,
    disablePadding: false,
    label: "Year",
  },
  {
    id: "high",
    numeric: true,
    disablePadding: false,
    label: "High",
  },
  {
    id: "low",
    numeric: true,
    disablePadding: false,
    label: "Low",
  },
  {
    id: "shorTermDebt",
    numeric: true,
    disablePadding: false,
    label: "Short Term Debt",
  },
  {
    id: "longTermDebt",
    numeric: true,
    disablePadding: false,
    label: "Long Term Debt",
  },
  {
    id: "open",
    numeric: true,
    disablePadding: false,
    label: "Open",
  },
  {
    id: "close",
    numeric: true,
    disablePadding: false,
    label: "Close",
  },
  {
    id: "interestPayments",
    numeric: true,
    disablePadding: false,
    label: "Interest Payments",
  },
  {
    id: "netCorporateTax",
    numeric: true,
    disablePadding: false,
    label: "Net Corporate Tax",
  },
  {
    id: "gdpAtCurrentPrice",
    numeric: true,
    disablePadding: false,
    label: "GDP at current Price",
  },
  {
    id: "corporateTaxAsPercentsgeOfGdp",
    numeric: true,
    disablePadding: false,
    label: "Corporate Tax as % of GDP",
  },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
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
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
            style={{ color: "white", textAlign: "center" }}>
            {headCell.label}
            {/* <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}>
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component='span' sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel> */}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const navigate = useNavigate();
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}>
      <Typography sx={{ flex: "1 1 100%" }} variant='h6' id='tableTitle' component='div'>
        All Variables
      </Typography>
      {numSelected > 0 ? (
        <Typography sx={{ flex: "1 1 100%" }} color='inherit' variant='subtitle1' component='div'>
          {numSelected} selected
        </Typography>
      ) : (
        ""
      )}

      {/* {numSelected > 0 ? (
        <Tooltip title='Delete'>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title='Filter list'>
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )} */}
      <ArrowBackIosNewIcon sx={{ marginRight: "15px", cursor: "pointer" }} onClick={() => navigate("/economical")} />
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const ScreenOne = () => {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(true);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () => stableSort(rows, getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [order, orderBy, page, rowsPerPage]
  );

  const fetchAllVariables = async () => {
    try {
      const res = await getApiWithoutToken("/economical/combined?variables=interest,market,tax");
    } catch (error) {}
  };

  console.log(combined, "this is the array...");

  return (
    <>
      {/* <h1 style={{ color: "white" }}>Economical</h1> */}
      <Box sx={{ minHeight: "100vh" }}>
        <Grid item xs={16}>
          {/* <Typography>helloooooooooooooooooooo</Typography> */}
          <Box sx={{ width: "100%", padding: "0px 25px 25px 25px", color: "white" }}>
            <Paper sx={{ width: "100%", mb: 2, bgcolor: "#020817", border: 1.5, borderColor: "white", borderRadius: "10px", color: "white" }}>
              <EnhancedTableToolbar numSelected={selected.length} />
              <TableContainer>
                <Table
                  sx={{ minWidth: 750, bgcolor: "#020817", border: 1.5, borderColor: "white", borderRadius: "10px", height: "auto" }}
                  aria-labelledby='tableTitle'
                  size={dense ? "small" : "medium"}>
                  <EnhancedTableHead
                    numSelected={selected.length}
                    order={order}
                    orderBy={orderBy}
                    onSelectAllClick={handleSelectAllClick}
                    onRequestSort={handleRequestSort}
                    rowCount={rows.length}
                  />
                  <TableBody>
                    {visibleRows.map((row, index) => {
                      console.log(row, "this is row...");
                      const isItemSelected = isSelected(row.id);
                      const labelId = `enhanced-table-checkbox-${index}`;

                      return (
                        <TableRow
                          hover
                          // onClick={(event) => handleClick(event, row.id)}
                          role='checkbox'
                          aria-checked={isItemSelected}
                          tabIndex={-1}
                          key={row.id}
                          selected={isItemSelected}
                          sx={{ cursor: "pointer" }}>
                          {/* <TableCell padding='checkbox' className={classes.tableCell} style={{ width: "10%", textAlign: "center", color: "white" }}>
                              <Checkbox
                                color='primary'
                                checked={isItemSelected}
                                inputProps={{
                                  "aria-labelledby": labelId,
                                }}
                              />
                            </TableCell> */}
                          {/* <TableCell
                            component='th'
                            id={labelId}
                            scope='row'
                            padding='none'
                            style={{ width: "10%", textAlign: "center", color: "white" }}>
                            {row.name || "N/A"}
                          </TableCell> */}
                          <TableCell align='right' className={classes.tableCell}>
                            {Number(row.year) || "N/A"}
                          </TableCell>
                          <TableCell align='right' style={{ width: "10%", textAlign: "center", color: "white" }}>
                            {row.High || "N/A"}
                          </TableCell>
                          <TableCell align='right' style={{ width: "10%", textAlign: "center", color: "white" }}>
                            {row.Low || "N/A"}
                          </TableCell>
                          <TableCell align='right' style={{ width: "10%", textAlign: "center", color: "white" }}>
                            {row.shortTermDebt || "N/A"}
                          </TableCell>
                          <TableCell align='right' style={{ width: "10%", textAlign: "center", color: "white" }}>
                            {row.longTermDebt || "N/A"}
                          </TableCell>
                          <TableCell align='right' style={{ width: "10%", textAlign: "center", color: "white" }}>
                            {row.Open || "N/A"}
                          </TableCell>
                          <TableCell align='right' style={{ width: "10%", textAlign: "center", color: "white" }}>
                            {row.Close || "N/A"}
                          </TableCell>
                          <TableCell align='right' style={{ width: "10%", textAlign: "center", color: "white" }}>
                            {row.interestPayments || "N/A"}
                          </TableCell>
                          <TableCell align='right' style={{ width: "10%", textAlign: "center", color: "white" }}>
                            {row.netCorporateTax || "N/A"}
                          </TableCell>
                          <TableCell align='right' style={{ width: "10%", textAlign: "center", color: "white" }}>
                            {row.gdpAtCurrentPrice || "N/A"}
                          </TableCell>
                          <TableCell align='right' style={{ width: "10%", textAlign: "center", color: "white" }}>
                            {row.corporateTaxAsPercentsgeOfGdp || "N/A"}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                    {emptyRows > 0 && (
                      <TableRow
                        style={{
                          height: (dense ? 33 : 53) * emptyRows,
                        }}>
                        <TableCell colSpan={6} />
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[10, 25]}
                component='div'
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                style={{ color: "white", bgColor: "#020817" }}
              />
            </Paper>
            <FormControlLabel hidden disabled control={<Switch checked={dense} onChange={handleChangeDense} />} label='Dense padding' />
          </Box>
        </Grid>
        {/* <Grid item xs={8}>
            <Typography>helloooooooooooooooooooo</Typography>
          </Grid> */}
      </Box>
    </>
  );
};

export default ScreenOne;
