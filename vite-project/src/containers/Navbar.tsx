import { FC } from "react";
import Switcher from "../components/Switcher";
import { Box, Typography } from "@mui/material";
import usePageStyles from "../styles/style";
import Navigation from "../components/Navigation";

type NavbarProps = {
  isTopnav: boolean;
  text: string;
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
        <Navigation isNavigationLink={isTopnav} />
      </nav>
    </>
  );
};

export default Navbar;
