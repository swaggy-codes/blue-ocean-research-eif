import React, { useEffect, useState } from "react";
import utf8 from "utf8";
import { telegramData } from "../../Utils/DemoJSON";
import AppLayout from "../../AppLayout/AppLayout";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { fetchTelegramData, getDemo, posLogInDemo } from "../../Api/ApiCalls/data";
import { TableLoader } from "../../Components/CustomLoader/CustomLoader";

const TelegramModule = () => {
  const [telegramRecom, setTelegramRecom] = useState({ data: [], loading: false });
  const [messagesGroup, setMessagesGroup] = useState(telegramRecom?.data?.[0]);

  const handleViewGroupRecom = (el) => {
    console.log(el, "this is the group to view messages");
    setMessagesGroup(el);
  };

  console.log(telegramRecom, "this is the telgram data...");
  const getTeleRecom = async () => {
    setTelegramRecom((v) => ({ ...v, loading: true }));
    try {
      const res = await Promise.resolve(fetchTelegramData());
      if (res?.status === 200) {
        setTelegramRecom(() => ({ data: res?.data, loading: false }));
      }
      console.log(res, "thisssssssssss");
    } catch (error) {
      setTelegramRecom((v) => ({ ...v, loading: false }));
    }
  };

  useEffect(() => {
    getTeleRecom();
  }, []);

  return (
    <AppLayout>
      {" "}
      <div className='p-4'>
        <div className='row mt-4 h-100'>
          {telegramRecom?.loading === false && telegramRecom?.data?.length > 0 && (
            <>
              <h4>TELEGRAM RECOMMENDATIONS</h4>
              <hr style={{ color: "white" }} />
              <div className='col-4 ps-0'>
                <h4>Groups</h4>
                <hr />
                {/* <div className='d-flex justify-content-around'>
              <div className='pt-2 pb-2'>Name</div>
              <div className='pt-2 pb-2'>Networth(Crs.)</div>
            </div> */}
                <div className='' style={{ overflowY: "auto", maxHeight: "60vh" }}>
                  {telegramRecom?.data?.map((el, i) => {
                    return (
                      <Card
                        sx={{
                          backgroundColor: "#0e1422",
                          color: "white",
                          borderRadius: 4,
                          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                          marginBottom: "8px",
                          cursor: "pointer",
                          "&:hover": {
                            transform: "scale(.97)",
                            borderRadius: 4,
                          },
                        }}
                        onClick={() => handleViewGroupRecom(el)}>
                        <CardContent sx={{ display: "flex", flexDirection: "row", alignItems: "center", paddingBottom: "10px !important" }}>
                          <div style={{ flex: 2, paddingRight: "16px" }}>
                            <div style={{ marginBottom: "8px" }}>
                              <Typography variant='6'>{el?.grpName || "N/A"}</Typography>
                              <Typography variant='body1'>Subscribers : {el?.subscribers || "N/A"}</Typography>
                            </div>
                          </div>
                          {/* <div style={{ flex: 2 }}>
                        <div>
                          <Typography variant='h5'>123,123</Typography>
                        </div>
                      </div> */}
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
              <div className='col-8'>
                <ViewGroupRecomComponent props={{ messagesGroup }} />
              </div>
            </>
          )}
          {telegramRecom?.loading === true && (
            <div className='text-center'>
              <TableLoader />
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
};

const ViewGroupRecomComponent = ({ props }) => {
  const { messagesGroup } = props;
  console.log(messagesGroup, "inside the messages component");

  const loginDemo = async () => {
    console.log("this hirt");
    const payload = {
      email: "rohan.khanna@outlook.in",
      otp: "123456",
    };
    try {
      const res = await posLogInDemo(payload);
      console.log(res, "this is the response.");
    } catch (error) {}
  };
  return (
    <>
      <h4>MESSAGES</h4>
      {/* <div className='messages-wrapper'></div> */}
      <hr style={{ color: "white" }} />
      {/* <button className='btn btn-primary' onClick={() => loginDemo()}>
        Click Me
      </button> */}
      <div className='' style={{ overflowY: "auto", maxHeight: "60vh" }}>
        {messagesGroup?.messages?.map((el, i) => {
          console.log(el?.message, "this is the message el");
          let msgOne = utf8.encode(el?.message);
          let messageDecode = utf8.decode(msgOne);
          return (
            <Card
              sx={{
                backgroundColor: "#0e1422",
                color: "white",
                borderRadius: 4,
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                marginBottom: "8px",
                cursor: "pointer",
                "&:hover": {
                  transform: "scale(.99)",
                  borderRadius: 4,
                },
              }}
              key={i + "x"}>
              <CardContent sx={{ display: "flex", flexDirection: "row", alignItems: "center", paddingBottom: "10px !important" }}>
                <div style={{ flex: 2, paddingRight: "16px" }}>
                  <div style={{ marginBottom: "8px" }}>
                    <Typography variant='6'>{messageDecode}</Typography>
                  </div>
                </div>
                {/* <div style={{ flex: 2 }}>
                        <div>
                          <Typography variant='h5'>123,123</Typography>
                        </div>
                      </div> */}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default TelegramModule;
