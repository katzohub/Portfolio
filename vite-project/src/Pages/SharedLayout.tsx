import { FC } from "react";
import TopNav from "../components/TopNav";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { Box } from "@mui/material";
import usePageStyles from "../styles/style";

const SharedLayout: FC = () => {
  const classes = usePageStyles();
  return (
    <>
      <Box className={classes.backColor}>
        <TopNav />
        <Outlet />
        <Footer />
      </Box>
    </>
  );
};

export default SharedLayout;
