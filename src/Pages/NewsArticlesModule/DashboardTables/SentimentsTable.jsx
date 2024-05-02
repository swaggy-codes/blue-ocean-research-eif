import React, { useEffect, useMemo, useState } from "react";
import { alpha } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  Switch,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Toolbar,
  Typography,
  Paper,
  FormControlLabel,
  Checkbox,
  Tooltip,
  IconButton,
} from "@mui/material";

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: false,
    label: "Company",
  },
  {
    id: "sentiments",
    numeric: true,
    disablePadding: false,
    label: "Sentiments",
  },
  {
    id: "salience",
    numeric: true,
    disablePadding: false,
    label: "Salience",
  },
];

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
        {headCells.map((headCell) => (
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
        ))}
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

const SentimentsTable = ({ props }) => {
  const { sentiments } = props;

  console.log(sentiments?.data, ":::::::::::");

  const [page, setPage] = useState(0);
  const [order, setOrder] = useState("asc");
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selected, setSelected] = React.useState([]);
  const [orderBy, setOrderBy] = useState("calories");

  // console.log(sentiments?.data, "KLKLKLLKL");

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = sentiments?.data?.data.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
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

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - sentiments?.data?.data.length) : 0;

  const visibleRows = useMemo(
    () => stableSort(sentiments?.data || [], getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [order, orderBy, page, rowsPerPage, sentiments?.data]
  );

  return (
    <>
      {sentiments?.loading === false ? (
        <>
          <Box sx={{ width: "100%" }}>
            <Paper sx={{ width: "100%", mb: 2 }}>
              {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
              <TableContainer>
                <Table
                  sx={{ minWidth: 750, bgcolor: "#020817", border: 1.5, borderColor: "white", borderRadius: "10px", height: "auto" }}
                  aria-labelledby='tableTitle'
                  size={dense ? "small" : "medium"}>
                  <EnhancedTableHead
                    numSelected={selected.length}
                    order={order}
                    orderBy={orderBy}
                    // onSelectAllClick={handleSelectAllClick}
                    onRequestSort={handleRequestSort}
                    rowCount={sentiments?.data?.length}
                  />
                  <TableBody>
                    {visibleRows.map((el, index) => {
                      const isItemSelected = isSelected(el.name);
                      const labelId = `enhanced-table-checkbox-${index}`;

                      return (
                        <TableRow
                          hover
                          onClick={(event) => handleClick(event, el.name)}
                          role='checkbox'
                          aria-checked={isItemSelected}
                          tabIndex={-1}
                          key={el.name}
                          selected={isItemSelected}
                          sx={{ cursor: "pointer" }}>
                          {/* <TableCell padding='checkbox'>
                            <Checkbox
                              color='primary'
                              checked={isItemSelected}
                              inputProps={{
                                "aria-labelledby": labelId,
                              }}
                            />
                          </TableCell> */}
                          <TableCell
                            component='th'
                            id={labelId}
                            scope='row'
                            padding='none'
                            // align='center'
                            style={{ width: "10%", textAlign: "center", color: "white" }}>
                            {el.name || "N/A"}
                          </TableCell>
                          <TableCell style={{ textAlign: "center", color: "white" }} align='center'>
                            {el.sentiment.toFixed(2)}
                          </TableCell>
                          <TableCell style={{ textAlign: "center", color: "white" }} align='center'>
                            {el.salience.toFixed(2)}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                    {emptyRows > 0 && (
                      <TableRow
                        style={{
                          height: (dense ? 33 : 53) * emptyRows,
                        }}>
                        <TableCell colSpan={1} />
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
              {/* <TablePagination
                sx={{ bgColor: "black" }}
                rowsPerPageOptions={[10, 25]}
                component='div'
                count={sentiments?.data?.data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                style={{ color: "black", bgColor: "#020817" }}
              /> */}
            </Paper>
            {/* <FormControlLabel control={<Switch checked={dense} onChange={handleChangeDense} />} label='Dense padding' /> */}
          </Box>
        </>
      ) : (
        "No records found."
      )}
    </>
  );

  // return (
  //   <>
  //     <div className='rounded-md border w-full'>Sentiments Table</div>
  //   </>
  // );
};

export default SentimentsTable;
