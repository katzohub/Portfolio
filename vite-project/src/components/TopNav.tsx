import { useContext } from "react";
import { MenuContext } from "../context/MenuProvider";
import { useThemeContext } from "../context/themeContext";
import { LanguageContext } from "../context/LanguageProvider";
import { Grid, Switch, Box, Typography } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { useIntl } from "react-intl";
import usePageStyles from "../styles/style";
import { Theme } from "@mui/material/styles";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import AmericaFlag from "../svg/AmericaFlag";
import SlovakiaFlag from "../svg/SlovakiaFlag";
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
  const { language, setLanguage } = useContext(LanguageContext);
  const navigate = useNavigate();
  const intl = useIntl();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleNavLinkClick = (path: string) => {
    setIsMenuOpen(false);
    navigate(path);
  };
  const toggleLanguage = () => {
    setLanguage(language === "en-US" ? "sk-SK" : "en-US");
  };
  const classes = usePageStyles();
  return (
    <>
      <nav className={classes.navContainer}>
        <Grid item>
          <Box className={classes.navBoxItem}>
            <div className={classes.navLink}>
              {intl.formatMessage({ id: "nav.name" })}
            </div>
          </Box>
        </Grid>

        <Grid
          item
          className={classes.switchBox}
          sx={{ position: "relative", left: "40px" }}
        >
          <Box className={classes.navBoxItem}>
            <Switch
              className={classes.switch}
              icon={<LightModeIcon className={classes.switchLightIcon} />}
              checkedIcon={<DarkModeIcon className={classes.switchDarkIcon} />}
              checked={switchChecked}
              onChange={toggleTheme}
            />
          </Box>
        </Grid>
        {/* LANGUAGE SWITCH */}
        <Grid
          item
          className={classes.switchBox}
          sx={{
            position: "relative",
            left: "60px",
          }}
        >
          <Box className={classes.navBoxItem}>
            <Switch
              className={classes.switchLanguage}
              icon={<AmericaFlag />}
              checkedIcon={<SlovakiaFlag />}
              checked={language === "sk-SK"}
              onChange={toggleLanguage}
            />
          </Box>
        </Grid>

        <Grid item>
          <Grid container className={classes.navContainerThree}>
            <Grid item>
              <Box className={classes.navBoxItemCenter}>
                <NavLink to="/" className={classes.navLinkLeft}>
                  {intl.formatMessage({ id: "nav.home" })}
                </NavLink>
              </Box>
            </Grid>

            <Grid item>
              <Box className={classes.navBoxItemCenter}>
                <NavLink to="/about-me" className={classes.navBoxCenter}>
                  {intl.formatMessage({ id: "nav.about" })}
                </NavLink>
              </Box>
            </Grid>
            <Grid item>
              <Box className={classes.navBoxItemCenter}>
                <NavLink to="/projects" className={classes.navBoxRight}>
                  {intl.formatMessage({ id: "nav.project" })}
                </NavLink>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        {/* right */}
        <Grid item>
          <Box className={classes.navBoxContact}>
            <NavLink to="contact-me" className={classes.navLinkContact}>
              {intl.formatMessage({ id: "nav.contact" })}
            </NavLink>
          </Box>
        </Grid>
      </nav>
      {/* // Mobile Navigation */}
      <nav className={classes.mobileNavigationContainer}>
        <Box className={classes.boxMobileNav}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              sx={(theme: Theme) => ({
                fontFamily: "Fira Code",
                color: isMenuOpen
                  ? theme.myColors.colorFFF
                  : theme.myColors.textColorNav,
              })}
            >
              {intl.formatMessage({ id: "nav.name" })}
            </Typography>
            <Grid item sx={{ position: "relative", left: "10px" }}>
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
            <Grid item sx={{ position: "relative", left: "25px" }}>
              <Box className={classes.navBoxItem}>
                <Switch
                  className={classes.switchLanguage}
                  icon={<AmericaFlag />}
                  checkedIcon={<SlovakiaFlag />}
                  checked={language === "sk-SK"}
                  onChange={toggleLanguage}
                />
              </Box>
            </Grid>
          </Box>
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
            {intl.formatMessage({ id: "nav.home" })}
          </NavLink>
          <NavLink
            onClick={() => handleNavLinkClick("/about-me")}
            to="/about-me"
            className={classes.nextLinkMobileNav}
          >
            {intl.formatMessage({ id: "nav.about" })}
          </NavLink>
          <NavLink
            onClick={() => handleNavLinkClick("/projects")}
            to="/projects"
            className={classes.nextLinkMobileNav}
          >
            {intl.formatMessage({ id: "nav.project" })}
          </NavLink>
          <NavLink
            onClick={() => handleNavLinkClick("/contact-me")}
            to="contact-me"
            className={classes.nextLinkMobileNav}
          >
            {intl.formatMessage({ id: "nav.contact" })}
          </NavLink>
          <nav className={classes.bootomNavContainer}>
            <Grid item sx={{ position: "relative", left: "20px" }}>
              <Box className={classes.navBoxItem}>
                <div className={classes.navLink}>
                  {intl.formatMessage({ id: "footer.findMeIn" })}:
                </div>
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
              <div className={classes.navLink}>
                {intl.formatMessage({ id: "footer.findMeIn" })}:
              </div>
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
