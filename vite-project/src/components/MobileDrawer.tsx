import React, { FC, useState, useEffect } from "react";
import { Box, IconButton, Typography, List, ListItem } from "@mui/material";
import { trueNavigationData } from "../constants/Navigation";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import usePageStyles from "../styles/style";

const item = {
  py: "14px",
  px: 3,
};

const itemCategory = {
  py: 1.5,
  px: 3,
};

const MobileDrawer: FC = () => {
  const drawerWidth = 256;
  const [open, setOpen] = useState(false);
  const classes = usePageStyles();

  const handleDrawerOpen = () => {
    console.log("Opening drawer");
    setOpen(true);
  };

  const handleDrawerClose = () => {
    console.log("Closing drawer");
    setOpen(false);
  };

  useEffect(() => {
    console.log("Drawer open state changed:", open);
  }, [open]);

  console.log("isMenuOpen", open);

  return (
    <>
      <MenuIcon
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        sx={(theme) => ({
          display: "none",
          [theme.breakpoints.down("md")]: {
            display: "block",
            position: "absolute",
            right: "10px",
            height: "56px",
            borderLeft: `2px solid $${theme.myColors.colorLinie}`,
            paddingLeft: "10px",
            fontSize: "2.2rem",
            transition: "transform 0.3s ease",
            cursor: "pointer",
            color: theme.myColors.textColorNav,
            "&:hover": {
              transition: "color 0.3s",
              color: theme.myColors.colorFFF,
            },
          },
        })}
      />
      <Box
        sx={{
          ".drawer-open": {
            transform: "translateX(0) !important",
          },
          ".drawer-closed": {
            transform: "translateX(${drawerWidth}px) !important",
          },
        }}
      >
        <Box
          className={open ? "drawer-open" : "drawer-closed"}
          sx={{
            position: "fixed",
            top: 0,
            right: 0,
            height: "100%",
            width: drawerWidth,
            backgroundColor: "darkblue",
            transform: open ? "translateX(0)" : `translateX($${drawerWidth}px)`,
            transition: "transform 0.3s ease",
            zIndex: 99999,
          }}
        >
          <List disablePadding sx={{ position: "relative", height: "100%" }}>
            <ListItem
              sx={{
                ...item,
                ...itemCategory,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <IconButton
                onClick={handleDrawerClose}
                aria-label="close drawer"
                sx={{
                  position: "relative",
                  left: "-10px",
                  cursor: "pointer",
                  color: "rgba(255, 255, 255, 0.7)",
                  background: "transparent",
                  "&:hover, &:focus": {
                    transition: "color .2s,background .2s",
                    color: "white",
                    background: "rgba(255, 255, 255, 0.08)",
                  },
                }}
              >
                <ChevronRightIcon />
              </IconButton>
            </ListItem>
            {trueNavigationData.map((item, index) => {
              const { goUrl, text, icon } = item;
              return (
                <NavLink
                  to={goUrl}
                  className={classes.navBoxCenter}
                  key={index}
                  onClick={(e) => {
                    console.log("NavLink clicked");
                    handleDrawerClose();
                  }}
                >
                  <Typography
                    variant="caption"
                    className={classes.iconMobileMenu}
                  >
                    {icon}
                  </Typography>
                  {text}
                </NavLink>
              );
            })}
          </List>
        </Box>
      </Box>
      <style jsx>{`
        .drawer-open {
          transform: translateX(0) !important;
        }
        .drawer-closed {
          transform: translateX(${drawerWidth}px) !important;
        }
      `}</style>
    </>
  );
};

export default MobileDrawer;
