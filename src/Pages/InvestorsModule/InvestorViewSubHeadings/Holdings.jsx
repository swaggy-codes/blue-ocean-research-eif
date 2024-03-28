import React from "react";
import CustomTable from "../../../Components/CustomTable/CustomTable";

const Holdings = ({ data }) => {
  console.log(data, "props in holdings");
  const headers = [
    {
      key: "name",
      numeric: true,
      disablePadding: false,
      heading: "Stock Name",
    },
    {
      key: "quantityHeld",
      numeric: true,
      disablePadding: false,
      heading: "Quantity Held",
    },
    {
      key: "HoldingPercentage",
      numeric: true,
      disablePadding: false,
      heading: "Holdings(%)",
    },
    {
      key: "ChangeFromPrevQtr",
      numeric: true,
      disablePadding: false,
      heading: "Change From Prev. Qtr.",
    },
    {
      key: "HoldingValue",
      numeric: true,
      disablePadding: false,
      heading: "Holding Value(Crs.)",
    },
  ];
  return (
    <div>
      <CustomTable headers={headers} data={data} />
    </div>
  );
};

export default Holdings;
