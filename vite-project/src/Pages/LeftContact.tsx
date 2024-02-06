import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import usePageStyles from "../styles/stylePages";

const LeftContact = () => {
  const classes = usePageStyles();
  return (
    <>
      <nav aria-label="main mailbox folders">
        <List sx={{ paddingTop: "0px !important" }}>
          <ListItem
            disablePadding
            sx={{
              "&:hover": {
                transition: "color 0.3s ease-in",
                color: "#fff",
                ".MuiListItemText-primary": {
                  color: "#fff",
                  transition: "color 0.3s ease-in",
                },
                "& svg": { color: "#fff", transition: "color 0.3s ease-in" },
              },
            }}
          >
            <a
              href="mailto:tomasolsiak1@gmail.com"
              className={classes.leftContactLink}
            >
              <ListItemButton className={classes.leftContactBtn}>
                <EmailIcon className={classes.leftContactIcon} />
                <ListItemText primary="tomasolsiak1@gmail.com" />
              </ListItemButton>
            </a>
          </ListItem>
          <ListItem
            disablePadding
            sx={{
              "&:hover": {
                color: "#fff",
                transition: "color 0.3s ease-in",
                ".MuiListItemText-primary": {
                  color: "#fff",
                  transition: "color 0.3s ease-in",
                },
                "& svg": { color: "#fff", transition: "color 0.3s ease-in" },
              },
            }}
          >
            <a href="tel:+421915515974" className={classes.leftContactLink}>
              <ListItemButton className={classes.leftContactBtn}>
                <LocalPhoneIcon className={classes.leftContactIcon} />
                <ListItemText primary="+421 915 515 974" />
              </ListItemButton>
            </a>
          </ListItem>
        </List>
      </nav>
    </>
  );
};

export default LeftContact;
