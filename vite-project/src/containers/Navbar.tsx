import { FC, useState } from "react";
import Switcher from "../components/Switcher";
import { Box, Typography } from "@mui/material";
import usePageStyles from "../styles/style";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import Navigation from "../components/Navigation";

type NavbarProps = {
  isTopnav: boolean;
  text: string;
};

const Navbar: FC<NavbarProps> = ({ isTopnav, text }) => {
  const classes = usePageStyles();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  console.log(isTopnav === !isMenuOpen);

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
        {isTopnav === !isMenuOpen ? (
          <MenuIcon
            onClick={toggleMenu}
            sx={(theme) => ({
              display: "none",
              [theme.breakpoints.down("md")]: {
                display: "block",
                position: "absolute",
                right: "10px",
                height: "56px",
                borderLeft: "2px solid #fff",
                color: "#fff",
                paddingLeft: "10px",
                fontSize: "2.2rem",
                transition: "transform 0.3s ease",
                cursor: "pointer",
              },
            })}
          />
        ) : (
          <>
            {isTopnav && (
              <CloseIcon
                onClick={toggleMenu}
                // className={classes.iconCloseMobileNav}
                sx={(theme) => ({
                  display: "none",
                  [theme.breakpoints.down("md")]: {
                    display: "block",
                    position: "absolute",
                    right: "10px",
                    height: "56px",
                    borderLeft: "2px solid #fff",
                    color: "#fff",
                    paddingLeft: "10px",
                    fontSize: "2.2rem",
                    transition: "transform 0.3s ease",
                    cursor: "pointer",
                  },
                })}
              />
            )}
          </>
        )}
      </nav>
    </>
  );
};

export default Navbar;
