import { Grid, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import usePageStyles from "../style";

const TopNav = () => {
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
    </>
  );
};

export default TopNav;
