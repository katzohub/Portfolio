import { FC, useState } from "react";
import Switcher from "../components/Switcher";
import { Box, Typography } from "@mui/material";
import usePageStyles from "../styles/style";
// import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import Navigation from "../components/Navigation";
import MobileDrawer from "../components/MobileDrawer";

type NavbarProps = {
  isTopnav: boolean;
  text: string;
};

const Navbar: FC<NavbarProps> = ({ isTopnav, text }) => {
  const classes = usePageStyles();
  const drawerWidth = 256;
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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

        {isTopnav && (
          <MenuIcon
            onClick={toggleMenu}
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
        )}
        <MobileDrawer
          PaperProps={{ style: { width: drawerWidth } }}
          open={isMenuOpen}
          toggleMenu={toggleMenu}
          onClose={toggleMenu}
          variant="temporary"
        />
      </nav>
    </>
  );
};

export default Navbar;
