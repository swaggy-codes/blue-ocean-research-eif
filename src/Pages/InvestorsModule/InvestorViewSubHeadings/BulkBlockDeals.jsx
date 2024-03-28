import React from "react";
import CustomTable from "../../../Components/CustomTable/CustomTable";

const BulkBlockDeals = ({ data }) => {
  console.log(data, "props in bbd");

  // Action: "Purchase";
  // avgPrice: "400.25";
  // date: "13 Mar 2024";
  // dealType: "Bulk";
  // exchange: "BSE";
  // name: "ITC Ltd.";
  // percentageTraded: "0.73%";
  // quantity: "91,545,678";

  const headers = [
    {
      key: "date",
      numeric: true,
      disablePadding: false,
      heading: "Date",
    },
    {
      key: "name",
      numeric: false,
      disablePadding: false,
      heading: "Stock Name",
    },
    {
      key: "Action",
      numeric: false,
      disablePadding: false,
      heading: "Action",
    },
    {
      key: "dealType",
      numeric: false,
      disablePadding: false,
      heading: "Deal Type",
    },
    {
      key: "quantity",
      numeric: true,
      disablePadding: false,
      heading: "Quantity",
    },
    {
      key: "avgPrice",
      numeric: false,
      disablePadding: false,
      heading: "Average Price",
    },
    {
      key: "percentageTraded",
      numeric: false,
      disablePadding: false,
      heading: "Percentage Traded(%)",
    },
    {
      key: "exchange",
      numeric: false,
      disablePadding: false,
      heading: "Exchange",
    },
  ];
  return (
    <div>
      <CustomTable headers={headers} data={data} />
    </div>
  );
};

export default BulkBlockDeals;
