import { useState } from "react";
import { Grid, Box, Typography } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import usePageStyles from "../style";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

const TopNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
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
        <Box
          sx={{
            position: "absolute",
            top: "0",
            width: "100vw",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            textAlign: "center",
            padding: "10px 20px",
            borderBottom: "1px solid #1E2D3D",
            height: "50px",
            backgroundColor: "#010c15",
            zIndex: 9999,
          }}
        >
          <Typography style={{ color: isMenuOpen ? "white" : "#607B96" }}>
            tomas-olsiak
          </Typography>
          {isMenuOpen ? (
            <CloseIcon
              onClick={toggleMenu}
              style={{
                color: "white",
                transition: "transform 0.3s ease",
                cursor: "pointer",
              }}
            />
          ) : (
            <MenuIcon
              onClick={toggleMenu}
              style={{
                color: "#607B96",
                transition: "transform 0.3s ease",
                cursor: "pointer",
              }}
            />
          )}
        </Box>

        <Grid
          container
          direction="column"
          alignItems={"flex-start"}
          justifyContent={"start"}
          sx={{
            position: "absolute",
            marginTop: "50px",
            width: "100%",
            minHeight: isMenuOpen ? "100vh" : "0",
            backgroundColor: isMenuOpen ? "#011627" : "transparent",
            color: "white",
            padding: "10px 20px",
            flexDirection: "column",
            transition: "max-height 0.3s ease, background-color 0.3s ease",
            visibility: isMenuOpen ? "visible" : "hidden",
            zIndex: 10,
          }}
        >
          <NavLink
            onClick={() => handleNavLinkClick("/")}
            to="/"
            style={{
              padding: "10px 0",
              borderBottom: "1px solid #1E2D3D",
              width: "90vw",
              color: "#607B96",
            }}
          >
            _hello
          </NavLink>
          <NavLink
            onClick={() => handleNavLinkClick("/about-me")}
            to="/about-me"
            style={{
              color: "#607B96",
              padding: "10px 0",
              borderBottom: "1px solid #1E2D3D",
              width: "90vw",
            }}
          >
            _about-me
          </NavLink>
          <NavLink
            onClick={() => handleNavLinkClick("/projects")}
            to="/projects"
            style={{
              color: "#607B96",
              padding: "10px 0",
              borderBottom: "1px solid #1E2D3D",
              width: "90vw",
            }}
          >
            _projects
          </NavLink>
          <NavLink
            onClick={() => handleNavLinkClick("/contact-me")}
            to="contact-me"
            style={{
              color: "#607B96",
              padding: "10px 0",
              borderBottom: "1px solid #1E2D3D",
              width: "90vw",
            }}
          >
            _contact-me
          </NavLink>
        </Grid>
        {/* //bottom nav */}
        <nav
          style={{
            position: "absolute",
            bottom: "0",
            left: "0px",
            width: "100vw",
            borderTop: `1px solid #1E2D3D`,
            height: "56px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#010c15",
            zIndex: 999,
          }}
        >
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
