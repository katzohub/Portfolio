import { FC } from "react";
import { TopNav, Footer } from "../components";
import { Outlet } from "react-router-dom";
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
