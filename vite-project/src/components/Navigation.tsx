import React, { FC } from "react";
import { Grid, Box, Typography } from "@mui/material";
import { useIntl } from "react-intl";
import { NavLink } from "react-router-dom";
import {
  trueNavigationData,
  falseNavigationData,
} from "../constants/Navigation";
import usePageStyles from "../styles/style";

type NavigationProps = {
  isNavigationLink: boolean;
  toggleMenu?: () => void;
};

const Navigation: FC<NavigationProps> = ({ isNavigationLink, toggleMenu }) => {
  const classes = usePageStyles();
  const intl = useIntl();
  console.log(toggleMenu);

  return (
    <Grid sx={{ width: "100%" }}>
      <Box
        className={
          isNavigationLink
            ? classes.navBoxItemCenter
            : classes.navBoxItemCenterBottom
        }
      >
        {isNavigationLink
          ? trueNavigationData.map((item, index) => {
              const { goUrl, text, icon } = item;
              return (
                <NavLink
                  to={goUrl}
                  className={classes.navBoxCenter}
                  key={index}
                  onClick={() => {
                    if (toggleMenu) toggleMenu(); // Zavolá toggleMenu, pokud je definováno
                  }}
                >
                  <Typography
                    variant="caption"
                    className={classes.iconMobileMenu}
                  >
                    {icon}
                  </Typography>
                  {intl.formatMessage({ id: text })}
                </NavLink>
              );
            })
          : falseNavigationData.map((item, index) => {
              const { goUrl, icon, text } = item;
              return (
                <a
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={goUrl}
                  className={classes.navLinkLeft}
                >
                  {text && (
                    <Typography className="github-link">{text}</Typography>
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
