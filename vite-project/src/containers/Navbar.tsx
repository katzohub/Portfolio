import { FC, useState, useEffect } from "react";
import SwitchContainer from "../components/SwitchContainer";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import usePageStyles from "../styles/style";
import Navigation from "../components/Navigation";
import MobileDrawer from "../components/MobileDrawer";

type NavbarProps = {
  isTopnav: boolean;
  text?: string;
};

const Navbar: FC<NavbarProps> = ({ isTopnav, text }) => {
  const classes = usePageStyles();
  const [open, setOpen] = useState(false);

  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    handleDrawerClose();
  }, [pathname]);

  const onSelectItem = (path: string) => {
    if (path === pathname) {
      console.log("run handleDrawerClose");
      handleDrawerClose();
      return;
    }
    console.log("run navigate");
    navigate(path);
  };
  const navigateFullSCreen = (path: string) => {
    navigate(path);
  };

  return (
    <Box sx={{ width: "100vw", display: "flex", justifyContent: "center" }}>
      <nav
        className={isTopnav ? classes.navContainer : classes.bottomNavContainer}
      >
        <Box>
          <Typography className={classes.navLink}>{text}</Typography>
        </Box>
        {isTopnav && <SwitchContainer />}

        <Box
          sx={(theme) => ({
            display: "block",
            [theme.breakpoints.down("md")]: {
              display: isTopnav ? "none" : "block",
            },
          })}
        >
          <Navigation
            isNavigationLink={isTopnav}
            onSelectItem={navigateFullSCreen}
          />
        </Box>
        {isTopnav && (
          <>
            <MenuIcon
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              sx={(theme) => ({
                display: "none",
                [theme.breakpoints.down("md")]: {
                  display: "block",
                  position: "absolute",
                  right: "10px",
                  height: "56px",
                  borderLeft: `2px solid ${theme.myColors.colorLinie}`,
                  paddingLeft: "10px",
                  fontSize: "2.2rem",
                  transition: "transform 0.3s ease",
                  cursor: "pointer",
                  color: theme.myColors.textColorNav,
                  "&:hover": {
                    transition: "color 0.3s",
                    color: theme.myColors.colorFFF,
                  },
                },
              })}
            />
            <MobileDrawer
              myOnOpen={open}
              myOnCloseFn={handleDrawerClose}
              onSelectItem={onSelectItem}
            />
          </>
        )}
      </nav>
    </Box>
  );
};

export default Navbar;
