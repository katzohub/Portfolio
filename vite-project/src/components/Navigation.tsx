import { FC } from "react";
import {
  Grid,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
} from "@mui/material";
import { useIntl } from "react-intl";
import { useLocation } from "react-router-dom";

import {
  trueNavigationData,
  falseNavigationData,
} from "../constants/Navigation";
import usePageStyles from "../styles/style";

type NavigationProps = {
  isNavigationLink: boolean;
  onSelectItem?: (path: string) => void;
};

const Navigation: FC<NavigationProps> = ({
  isNavigationLink,
  onSelectItem,
}) => {
  const classes = usePageStyles();
  const intl = useIntl();
  const location = useLocation();
  const { pathname } = location;

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
                <ListItemButton
                  key={index}
                  className={`${classes.navBoxCenter} ${
                    pathname === goUrl ? "active" : ""
                  }`}
                  onClick={() => onSelectItem && onSelectItem(goUrl)}
                  sx={{
                    "&:hover": {
                      "& .MuiListItemIcon-root, & .MuiListItemText-root": {
                        transition: "color .2s",
                        color: "#fff",
                      },
                    },
                  }}
                >
                  <ListItemIcon className={classes.iconMobileMenu}>
                    {icon}
                  </ListItemIcon>
                  <ListItemText>
                    {" "}
                    {intl.formatMessage({ id: text })}
                  </ListItemText>
                </ListItemButton>
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
