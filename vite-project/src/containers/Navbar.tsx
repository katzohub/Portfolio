import { FC } from "react";
import Switcher from "../components/Switcher";
import { Box, Typography } from "@mui/material";
import usePageStyles from "../styles/style";
import MobileDrawer from "../components/MobileDrawer";
import Navigation from "../components/Navigation";

type NavbarProps = {
  isTopnav: boolean;
  text?: string;
};

const Navbar: FC<NavbarProps> = ({ isTopnav, text }) => {
  const classes = usePageStyles();

  return (
    <>
      <nav
        className={isTopnav ? classes.navContainer : classes.bottomNavContainer}
      >
        <Box>
          <Typography className={classes.navLink}>{text}</Typography>
        </Box>
        {isTopnav && <Switcher />}

        <Box
          sx={(theme) => ({
            display: "block",
            [theme.breakpoints.down("md")]: {
              display: isTopnav ? "none" : "block",
            },
          })}
        >
          <Navigation isNavigationLink={isTopnav} />
        </Box>
        <MobileDrawer />
      </nav>
    </>
  );
};

export default Navbar;
