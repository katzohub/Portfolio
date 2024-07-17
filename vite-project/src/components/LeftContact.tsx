import { FC, ReactNode } from "react";
import { List, ListItem } from "@mui/material";

type LeftContactProps = {
  myFirstInfo: ReactNode;
  mySecondInfo: ReactNode;
};

const LeftContact: FC<LeftContactProps> = ({ myFirstInfo, mySecondInfo }) => {
  return (
    <>
      <nav aria-label="main mailbox folders">
        <List
          sx={(theme) => ({
            paddingTop: "0px !important",
            overflow: "hidden",
            [theme.breakpoints.down("md")]: {
              padding: "0px !important",
            },
          })}
        >
          <ListItem
            disablePadding
            sx={(theme) => ({
              [theme.breakpoints.down("md")]: {
                display: "flex",
                justifyContent: "center",
              },

              "&:hover": {
                transition: "color 0.3s ease-in",
                color: "#fff",
                ".MuiListItemText-primary": {
                  color: "#fff",
                  transition: "color 0.3s ease-in",
                },
                "& svg": { color: "#fff", transition: "color 0.3s ease-in" },
              },
            })}
          >
            {myFirstInfo}
          </ListItem>
          <ListItem
            disablePadding
            sx={(theme) => ({
              [theme.breakpoints.down("md")]: {
                display: "flex",
                justifyContent: "center",
              },
              "&:hover": {
                color: "#fff",
                transition: "color 0.3s ease-in",
                ".MuiListItemText-primary": {
                  color: "#fff",
                  transition: "color 0.3s ease-in",
                },
                "& svg": { color: "#fff", transition: "color 0.3s ease-in" },
              },
            })}
          >
            {mySecondInfo}
          </ListItem>
        </List>
      </nav>
    </>
  );
};

export default LeftContact;
