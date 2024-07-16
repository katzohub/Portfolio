import { FC, ReactNode } from "react";
import { List, ListItem } from "@mui/material";
// import EmailIcon from "@mui/icons-material/Email";
// import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

type LeftContactProps = {
  myFirstInfo: ReactNode;
  mySecondInfo: ReactNode;
};

const LeftContact: FC<LeftContactProps> = ({ myFirstInfo, mySecondInfo }) => {
  return (
    <>
      <nav aria-label="main mailbox folders">
        <List sx={{ paddingTop: "0px !important", overflow: "hidden" }}>
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
            {" "}
            {myFirstInfo}
            {/*  <a
              href="mailto:tomasolsiak1@gmail.com"
              className={classes.leftContactLink}
            >
           
               <ListItemButton className={classes.leftContactBtn}>
                <EmailIcon className={classes.leftContactIcon} />
                <ListItemText primary="tomasolsiak1@gmail.com" />
              </ListItemButton> 
            </a>*/}
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
            {/* <a href="tel:+421915515974" className={classes.leftContactLink}>
            
               <ListItemButton className={classes.leftContactBtn}>
                <LocalPhoneIcon className={classes.leftContactIcon} />
                <ListItemText primary="+421 915 515 974" /> 
              </ListItemButton>
            </a> */}
          </ListItem>
        </List>
      </nav>
    </>
  );
};

export default LeftContact;
