import { Card, CardContent, Typography } from "@mui/material";
import React, { useId } from "react";

const Overview = ({ data }) => {
  const id = useId();

  return (
    <div className='row'>
      <div className='col-4'></div>
      <div className='col-8'>
        <h5 className='text-start'>Fresh Entry & Exit in Portfolio</h5>
        <hr style={{ color: "white", width: "25%" }} />
        <div className='d-flex flex-wrap'>
          {data.freshEntryAndExit.map((el, i) => {
            console.log(el, "this is theeeeeeeeeeeeeeeeeeeeeeeee");
            return (
              <Card
                key={id}
                style={{
                  display: "block",
                  width: 268,
                  backgroundColor: "#0e1422",
                  borderRadius: 5,
                  color: "#fff",
                  marginRight: 20,
                  marginBottom: 20,
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(.95)",
                  },
                }}>
                <CardContent style={{ padding: 15, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                  <Typography variant='body1' gutterBottom>
                    {el?.date}
                  </Typography>
                  <Typography variant='body1' gutterBottom>
                    <button className={`btn btn-${el?.action === "Disposal" ? "danger" : "success"}`}>{el.action}</button>
                  </Typography>
                  <Typography variant='body1' gutterBottom>
                    Share Qty.: {el?.quantity}
                  </Typography>
                  <Typography variant='body1' gutterBottom>
                    Holdings: {el?.postTransactionHolding}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Overview;
