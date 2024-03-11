import React from "react";
import CustomTable from "../../Components/CustomTable/CustomTable";
import AppLayout from "../../AppLayout/AppLayout";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const InvestorsModule = () => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <AppLayout>
      <div className='p-4'>
        <div className='row mt-4'>
          <h4>INVESTORS MODULE</h4>
          <hr style={{ color: "white" }} />
          <div className='col-4 ps-0'>
            <h4>Individual Investors</h4>
            <hr />
            <div className='d-flex justify-content-around'>
              <div className='pt-2 pb-2'>Name</div>
              <div className='pt-2 pb-2'>Networth(Crs.)</div>
            </div>
            <div className='' style={{ overflowY: "auto", maxHeight: "50%" }}>
              {arr.map(() => {
                return (
                  <Card
                    sx={{
                      backgroundColor: "#0e1422",
                      color: "white",
                      borderRadius: 4,
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                      marginBottom: "8px",
                    }}>
                    <CardContent sx={{ display: "flex", flexDirection: "row", alignItems: "center", paddingBottom: "10px !important" }}>
                      <div style={{ flex: 2, paddingRight: "16px" }}>
                        <div style={{ marginBottom: "8px" }}>
                          <Typography variant='6'>Premji Associates</Typography>
                          <Typography variant='body1'>Company Holdings : 10</Typography>
                        </div>
                      </div>
                      <div style={{ flex: 2 }}>
                        <div>
                          <Typography variant='h5'>123,123</Typography>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
          <div className='col-4 ps-0'>
            <h4>Institutional Investors</h4>
            <hr />
            <div className='d-flex justify-content-around'>
              <div className='pt-2 pb-2'>Name</div>
              <div className='pt-2 pb-2'>Networth(Crs.)</div>
            </div>
            <div className='' style={{ overflowY: "auto", maxHeight: "50%" }}>
              {arr.map(() => {
                return (
                  <Card
                    sx={{
                      backgroundColor: "#0e1422",
                      color: "white",
                      borderRadius: 4,
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                      marginBottom: "8px",
                    }}>
                    <CardContent sx={{ display: "flex", flexDirection: "row", alignItems: "center", paddingBottom: "10px !important" }}>
                      <div style={{ flex: 2, paddingRight: "16px" }}>
                        <div style={{ marginBottom: "8px" }}>
                          <Typography variant='6'>President Of India</Typography>
                          <Typography variant='body1'>Company Holdings : 10</Typography>
                        </div>
                      </div>
                      <div style={{ flex: 2 }}>
                        <div>
                          <Typography variant='h5'>123,123</Typography>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
          <div className='col-4 ps-0'>
            <h4>FII Investors</h4>
            <hr />
            <div className='d-flex justify-content-around'>
              <div className='pt-2 pb-2'>Name</div>
              <div className='pt-2 pb-2'>Networth(Crs.)</div>
            </div>
            <div className='' style={{ overflowY: "auto", maxHeight: "50%" }}>
              {arr.map(() => {
                return (
                  <Card
                    sx={{
                      backgroundColor: "#0e1422",
                      color: "white",
                      borderRadius: 4,
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                      marginBottom: "8px",
                    }}>
                    <CardContent sx={{ display: "flex", flexDirection: "row", alignItems: "center", paddingBottom: "10px !important" }}>
                      <div style={{ flex: 2, paddingRight: "16px" }}>
                        <div style={{ marginBottom: "8px" }}>
                          <Typography variant='6'>Government Of Singapore</Typography>
                          <Typography variant='body1'>Company Holdings : 10</Typography>
                        </div>
                      </div>
                      <div style={{ flex: 2 }}>
                        <div>
                          <Typography variant='h5'>123,123</Typography>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default InvestorsModule;
