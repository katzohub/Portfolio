import { FC } from "react";
import { Grid, Box } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useIntl } from "react-intl";
import { NavLink } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import usePageStyles from "../styles/style";

type NavigationProps = {
  isNavigationLink: boolean;
};

const Navigation: FC<NavigationProps> = ({ isNavigationLink }) => {
  const classes = usePageStyles();
  const intl = useIntl();

  const trueNavgationData = [
    {
      goUrl: "https://twitter.com/TomOliak140446",
      icon: <TwitterIcon />,
    },
    {
      goUrl: "https://www.facebook.com/tomas.olsiak.37/",
      icon: <FacebookIcon />,
    },
    {
      goUrl:
        "https://www.linkedin.com/in/tom%C3%A1%C5%A1-ol%C5%A1iak-232196260/",
      icon: <LinkedInIcon />,
    },
    {
      goUrl: "https://github.com/katzohub/",
      icon: <GitHubIcon />,
    },
  ];
  const falseNavgationData = [
    {
      goUrl: "/",
      text: intl.formatMessage({ id: "nav.home" }),
    },
    {
      goUrl: "/about-me",
      text: intl.formatMessage({ id: "nav.about" }),
    },
    {
      goUrl: "/projects",
      text: intl.formatMessage({ id: "nav.project" }),
    },
    {
      goUrl: "/contact-me",
      text: intl.formatMessage({ id: "nav.contact" }),
    },
  ];

  return (
    <div>
      <Grid>
        <Grid container className={classes.navContainerThreeBottom}>
          <Grid item>
            <Box className={classes.navBoxItemCenter}>
              {isNavigationLink
                ? trueNavgationData.map((item) => {
                    const { goUrl, icon } = item;
                    return (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={goUrl}
                        className={classes.navLinkLeft}
                      >
                        {icon}
                      </a>
                    );
                  })
                : falseNavgationData.map((item) => {
                    const { goUrl, text } = item;
                    return <NavLink to={goUrl}>{text}</NavLink>;
                  })}
            </Box>
            {/* TODO A element --> classname changed or add object structures */}
            {/* <Grid item>
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
      <Grid item>
        <Box className={classes.navBoxContact}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/katzohub/"
            className={classes.navLinkContact}
          >
            <span className={classes.navTextLink}>katzohub</span> <GitHubIcon />
          </a>
        </Box> */}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Navigation;
