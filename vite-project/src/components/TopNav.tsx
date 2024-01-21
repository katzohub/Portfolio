import { useContext } from "react";
import { MenuContext } from "../MenuProvider";
import { useThemeContext } from "../themeContext";
import { Grid, Switch, Box, Typography } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import usePageStyles from "../style";
import { Theme } from "@mui/material/styles";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

const TopNav = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);
  const { themeMode, toggleTheme } = useThemeContext();
  const switchChecked = themeMode === "dark";
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleNavLinkClick = (path: string) => {
    setIsMenuOpen(false);
    navigate(path);
  };
  const classes = usePageStyles();
  return (
    <>
      <nav className={classes.navContainer}>
        <Grid item>
          <Box className={classes.navBoxItem}>
            <div className={classes.navLink}>tomas-olsiak</div>
          </Box>
        </Grid>

        <Grid item sx={{ position: "relative", left: "20px" }}>
          <Box className={classes.navBoxItem}>
            <Switch
              className={classes.switch}
              icon={
                <LightModeIcon
                  fontSize="small"
                  className={classes.switchLightIcon}
                />
              }
              checkedIcon={
                <DarkModeIcon
                  fontSize="small"
                  className={classes.switchDarkIcon}
                />
              }
              checked={switchChecked}
              onChange={toggleTheme}
            />
          </Box>
        </Grid>

        <Grid item>
          <Grid container className={classes.navContainerThree}>
            <Grid item>
              <Box className={classes.navBoxItemCenter}>
                <NavLink to="/" className={classes.navLinkLeft}>
                  _hello
                </NavLink>
              </Box>
            </Grid>
            <Grid item>
              <Box className={classes.navBoxItemCenter}>
                <NavLink to="/about-me" className={classes.navBoxCenter}>
                  _about-me
                </NavLink>
              </Box>
            </Grid>
            <Grid item>
              <Box className={classes.navBoxItemCenter}>
                <NavLink to="/projects" className={classes.navBoxRight}>
                  _projects
                </NavLink>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        {/* right */}
        <Grid item>
          <Box className={classes.navBoxContact}>
            <NavLink to="contact-me" className={classes.navLinkContact}>
              _contact-me
            </NavLink>
          </Box>
        </Grid>
      </nav>
      {/* // Mobile Navigation */}
      <nav className={classes.mobileNavigationContainer}>
        <Box className={classes.boxMobileNav}>
          <Typography
            sx={(theme: Theme) => ({
              color: isMenuOpen
                ? theme.myColors.colorFFF
                : theme.myColors.textColorNav,
            })}
          >
            tomas-olsiak
          </Typography>
          {isMenuOpen ? (
            <CloseIcon
              onClick={toggleMenu}
              className={classes.iconCloseMobileNav}
              sx={(theme: Theme) => ({
                color: isMenuOpen
                  ? theme.myColors.colorFFF
                  : theme.myColors.textColorNav,
              })}
            />
          ) : (
            <MenuIcon
              onClick={toggleMenu}
              className={classes.iconMobileNav}
              sx={(theme: Theme) => ({
                color: isMenuOpen
                  ? theme.myColors.colorFFF
                  : theme.myColors.textColorNav,
              })}
            />
          )}
        </Box>

        <Grid
          container
          direction="column"
          alignItems={"flex-start"}
          justifyContent={"start"}
          sx={(theme: Theme) => ({
            position: "absolute",
            overflow: "hidden",
            width: "100%",
            minHeight: isMenuOpen ? "100vh" : "0",
            backgroundColor: isMenuOpen
              ? theme.myColors.generalBackground
              : "transparent",

            color: "white",
            padding: "10px 20px",
            flexDirection: "column",
            transition: "max-height 0.3s ease, background-color 0.3s ease",
            visibility: isMenuOpen ? "visible" : "hidden",
            zIndex: 10,
          })}
        >
          <NavLink
            onClick={() => handleNavLinkClick("/")}
            to="/"
            className={classes.linkHomeMobileNav}
          >
            _hello
          </NavLink>
          <NavLink
            onClick={() => handleNavLinkClick("/about-me")}
            to="/about-me"
            className={classes.nextLinkMobileNav}
          >
            _about-me
          </NavLink>
          <NavLink
            onClick={() => handleNavLinkClick("/projects")}
            to="/projects"
            className={classes.nextLinkMobileNav}
          >
            _projects
          </NavLink>
          <NavLink
            onClick={() => handleNavLinkClick("/contact-me")}
            to="contact-me"
            className={classes.nextLinkMobileNav}
          >
            _contact-me
          </NavLink>
          <nav className={classes.bootomNavContainer}>
            <Grid item sx={{ position: "relative", left: "20px" }}>
              <Box className={classes.navBoxItem}>
                <div className={classes.navLink}>find me in:</div>
              </Box>
            </Grid>

            <Grid item>
              <Grid container className={classes.navContainerThreeBottom}>
                <Grid item>
                  <Box className={classes.navBoxItemCenter}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://twitter.com/TomOliak140446"
                      className={classes.navLinkLeft}
                    >
                      <TwitterIcon />
                    </a>
                  </Box>
                </Grid>
                <Grid item>
                  <Box className={classes.navBoxItemCenter}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.facebook.com/tomas.olsiak.37/"
                      className={classes.navBoxCenter}
                    >
                      <FacebookIcon />
                    </a>
                  </Box>
                </Grid>
                <Grid item>
                  <Box className={classes.navBoxItemCenter}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.linkedin.com/in/tom%C3%A1%C5%A1-ol%C5%A1iak-232196260/"
                      className={classes.navBoxRight}
                    >
                      <LinkedInIcon />
                    </a>
                  </Box>
                </Grid>
                <Grid item>
                  <Box className={classes.navBoxItemCenter}>
                    <a
                      className={classes.navBoxRight}
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/katzohub/"
                    >
                      <GitHubIcon />
                    </a>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </nav>
        </Grid>
        {/* //bottom nav */}
        <nav className={classes.bootomNavContainer}>
          <Grid item sx={{ position: "relative", left: "20px" }}>
            <Box className={classes.navBoxItem}>
              <div className={classes.navLink}>find me in:</div>
            </Box>
          </Grid>

          <Grid item>
            <Grid container className={classes.navContainerThreeBottom}>
              <Grid item>
                <Box className={classes.navBoxItemCenter}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://twitter.com/TomOliak140446"
                    className={classes.navLinkLeft}
                  >
                    <TwitterIcon />
                  </a>
                </Box>
              </Grid>
              <Grid item>
                <Box className={classes.navBoxItemCenter}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/tomas.olsiak.37/"
                    className={classes.navBoxCenter}
                  >
                    <FacebookIcon />
                  </a>
                </Box>
              </Grid>
              <Grid item>
                <Box className={classes.navBoxItemCenter}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/tom%C3%A1%C5%A1-ol%C5%A1iak-232196260/"
                    className={classes.navBoxRight}
                  >
                    <LinkedInIcon />
                  </a>
                </Box>
              </Grid>
              <Grid item>
                <Box className={classes.navBoxItemCenter}>
                  <a
                    className={classes.navBoxRightMinScreenGit}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/katzohub/"
                  >
                    <GitHubIcon />
                  </a>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </nav>
      </nav>
    </>
  );
};

export default TopNav;
