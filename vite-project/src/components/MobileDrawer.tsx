import { FC } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Navigation from "./Navigation";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const item = {
  py: "14px",
  px: 3,
};

const itemCategory = {
  py: 1.5,
  px: 3,
};

type MobileDrawerProps = {
  myOnOpen: boolean;
  myOnCloseFn: () => void;
  onSelectItem: (path: string) => void;
};
const MobileDrawer: FC<MobileDrawerProps> = ({
  myOnOpen,
  myOnCloseFn,
  onSelectItem,
}) => {
  const drawerWidth = 256;

  return (
    <>
      <Drawer
        variant="temporary"
        PaperProps={{ style: { width: drawerWidth } }}
        open={myOnOpen}
        onClose={myOnCloseFn}
        anchor="right"
        className="draweritshere"
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
              onClick={myOnCloseFn}
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
          <Navigation isNavigationLink={true} onSelectItem={onSelectItem} />
        </List>
      </Drawer>
    </>
  );
};

export default MobileDrawer;
