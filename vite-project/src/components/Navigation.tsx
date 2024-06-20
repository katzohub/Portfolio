import { FC } from "react";
import { Grid, Box, Typography } from "@mui/material";
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
      text: "GitHub",
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
    <Grid
      sx={{ width: "100%" }}
      className={
        isNavigationLink
          ? classes.containerNavlinksTop
          : classes.containerNavlinksDown
      }
    >
      <Box className={classes.navBoxItemCenter}>
        {isNavigationLink
          ? falseNavgationData.map((item) => {
              const { goUrl, text } = item;
              return (
                <NavLink to={goUrl} className={classes.navBoxCenter}>
                  {text}
                </NavLink>
              );
            })
          : trueNavgationData.map((item) => {
              const { goUrl, icon, text } = item;
              return (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={goUrl}
                  className={classes.navLinkLeft}
                >
                  {text && (
                    <Typography className="github-link"> {text}</Typography>
                  )}
                  {icon}
                </a>
              );
            })}
      </Box>
    </Grid>
  );
};

export default Navigation;
