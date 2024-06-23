import { FC } from "react";
import Drawer, { DrawerProps } from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Navigation from "./Navigation";

const item = {
  py: "14px",
  px: 3,
};

const itemCategory = {
  py: 1.5,
  px: 3,
};
interface MobileDrawerProps extends DrawerProps {
  toggleMenu: () => void;
}

const MobileDrawer: FC<MobileDrawerProps> = ({ toggleMenu, ...other }) => {
  return (
    <Drawer
      variant="permanent"
      {...other}
      anchor="right"
      sx={(theme) => ({
        zIndex: 999999,
        "& .MuiDrawer-paperAnchorRight": {
          backgroundColor: theme.myColors.colorDarkBlue,
        },
      })}
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
            onClick={toggleMenu}
            aria-label="delete"
            sx={(theme) => ({
              position: "relative",
              left: "-10px",
              cursor: "pointer",
              color: "rgba(255, 255, 255, 0.7)",
              background: "transparent",
              "&:hover, &:focus": {
                transition: "color .2s,background .2s",
                color: theme.myColors.textColorNav,
                background: "rgba(255, 255, 255, 0.08)",
              },
            })}
          >
            <ChevronRightIcon />
          </IconButton>
        </ListItem>
        <Navigation isNavigationLink={true} />
      </List>
    </Drawer>
  );
};

export default MobileDrawer;
