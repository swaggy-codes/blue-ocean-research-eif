import React from "react";
import CustomTable from "../../../Components/CustomTable/CustomTable";

const InsiderSAST = ({ data }) => {
  const headers = [
    {
      key: "name",
      numeric: true,
      disablePadding: false,
      heading: "Stock Name",
    },
    {
      key: "clientName",
      numeric: true,
      disablePadding: false,
      heading: "Client Name",
    },
    {
      key: "clientCategory",
      numeric: true,
      disablePadding: false,
      heading: "Client Category",
    },
    {
      key: "action",
      numeric: true,
      disablePadding: false,
      heading: "Action",
    },
    {
      key: "date",
      numeric: true,
      disablePadding: false,
      heading: "Date",
    },
    {
      key: "quantity",
      numeric: true,
      disablePadding: false,
      heading: "Quantity",
    },
    {
      key: "postTransactionHolding",
      numeric: true,
      disablePadding: false,
      heading: "Post Transaction Holding",
    },
    {
      key: "tradedPerc",
      numeric: true,
      disablePadding: false,
      heading: "Traded(%)",
    },
    {
      key: "regulation",
      numeric: true,
      disablePadding: false,
      heading: "Regulation (Insider/SAST)",
    },
    {
      key: "mode",
      numeric: true,
      disablePadding: false,
      heading: "Mode",
    },
  ];
  return (
    <div>
      <CustomTable headers={headers} data={data} />
    </div>
  );
};

export default InsiderSAST;
