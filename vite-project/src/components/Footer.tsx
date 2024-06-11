import { FC } from "react";
import { Grid, Box } from "@mui/material";
import usePageStyles from "../styles/style";
import { useIntl } from "react-intl";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
const Footer: FC = () => {
  const classes = usePageStyles();
  const intl = useIntl();
  return (
    <footer className={classes.bottomNavFooterContainer}>
      <nav className={classes.bottomNavContainer}>
        <Grid item>
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
          </Grid>
        </Grid>
        {/* right */}
        <Grid item>
          <Box className={classes.navBoxContact}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/katzohub/"
              className={classes.navLinkContact}
            >
              <span className={classes.navTextLink}>katzohub</span>{" "}
              <GitHubIcon />
            </a>
          </Box>
        </Grid>
      </nav>
    </footer>
  );
};

export default Footer;
