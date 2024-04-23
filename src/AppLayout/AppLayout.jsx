// import React from "react";
// import Sidebar from "../Components/Sidebar/Sidebar";

// const AppLayout = ({ children }) => {
//   return (
//     <>
//       <div className=''>
//         <Sidebar />
//         <div className=''>{children}</div>
//       </div>
//     </>
//   );
// };

// export default AppLayout;

// _+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+
import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InfoIcon from "@mui/icons-material/Info";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import RecommendIcon from "@mui/icons-material/Recommend";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import StackedBarChartIcon from "@mui/icons-material/StackedBarChart";
import PublicIcon from "@mui/icons-material/Public";
import TelegramIcon from "@mui/icons-material/Telegram";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./AppLayout.module.css";
import Header from "../Components/Header/Header";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const AppLayout = ({ children }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleScreenChange = (el, i) => {
    //  console.log(el, i, "of the scrrenssssss");
    if (i === 0) {
      navigate("/economical");
    } else if (i === 1) {
      navigate("/industrial");
    } else if (i === 2) {
      navigate("/financial");
    } else if (i === 3) {
      navigate("/recommendations");
    } else if (i === 4) {
      navigate("/investors");
    } else if (i === 5) {
      navigate("/global");
    } else if (i === 6) {
      navigate("/telegram-recommendations");
    }
  };

  return (
    <Box
      sx={{ display: "flex", color: "white", bgcolor: "#020817", overFlowY: "hidden", overFlowX: "hidden" }}
      className={`${styles}.customScrollbar custom-scrollbar`}>
      <CssBaseline />
      <AppBar position='fixed' open={open} sx={{ bgcolor: "#020817" }}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            sx={{
              marginRight: 5,
              ...(open && { display: "none", bgcolor: "#020817" }),
            }}>
            <MenuIcon />
          </IconButton>
          <Header />
        </Toolbar>
      </AppBar>
      <Drawer variant='permanent' open={open} className='custom-scrollbar'>
        <DrawerHeader sx={{ bgcolor: "#020817", color: "white" }}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? <ChevronRightIcon sx={{ color: "white" }} /> : <ChevronLeftIcon sx={{ color: "white" }} />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List sx={{ bgcolor: "#020817", color: "white" }}>
          {["Economical", "Industrial", "Financial", "Recommendations", "Investors Module", "Global Module", "Telegram"].map((el, i) => (
            <ListItem
              key={el}
              disablePadding
              onClick={() => {
                handleScreenChange(el, i);
              }}>
              <ListItemButton>
                <ListItemIcon>
                  {i === 0 ? <QueryStatsIcon sx={{ color: "white" }} /> : ""}
                  {i === 1 ? <StackedBarChartIcon sx={{ color: "white" }} /> : ""}
                  {i === 2 ? <PriceChangeIcon sx={{ color: "white" }} /> : ""}
                  {i === 3 ? <RecommendIcon sx={{ color: "white" }} /> : ""}
                  {i === 4 ? <PersonOutlineIcon sx={{ color: "white" }} /> : ""}
                  {i === 5 ? <PublicIcon sx={{ color: "white" }} /> : ""}
                  {i === 6 ? <TelegramIcon sx={{ color: "white" }} /> : ""}
                </ListItemIcon>
                <ListItemText primary={el} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List sx={{ bgcolor: "#020817", color: "white", minHeight: "100%" }} className='custom-scrollbar'>
          {["About Us"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{index % 2 === 0 ? <InfoIcon sx={{ color: "white" }} /> : ""}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component='main' sx={{ flexGrow: 1, p: 3, bgcolor: "#020817", color: "white", width: "500px", height: "100%" }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
};

export default AppLayout;
