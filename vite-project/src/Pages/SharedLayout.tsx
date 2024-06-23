import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import usePageStyles from "../styles/style";
import { Navbar } from "../containers";
import { useIntl } from "react-intl";

const SharedLayout: FC = () => {
  const classes = usePageStyles();
  const intl = useIntl();

  return (
    <>
      <Box className={classes.backColor}>
        <Navbar isTopnav={true} text={intl.formatMessage({ id: "nav.name" })} />

        <Outlet />
        <Navbar
          isTopnav={false}
          text={intl.formatMessage({ id: "footer.findMeIn" })}
        />
      </Box>
    </>
  );
};

export default SharedLayout;
