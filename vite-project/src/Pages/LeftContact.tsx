import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const LeftContact = () => {
  return (
    <>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <a
              href="mailto:tomasolsiak1@gmail.com"
              style={{ textDecoration: "none", color: "#607B96" }}
            >
              <ListItemButton sx={{ position: "relative", left: "25px" }}>
                <EmailIcon sx={{ marginRight: "10px" }} />
                <ListItemText primary="tomasolsiak1@gmail.com" />
              </ListItemButton>
            </a>
          </ListItem>
          <ListItem disablePadding>
            <a
              href="tel:+421915515974"
              style={{ textDecoration: "none", color: "#607B96" }}
            >
              <ListItemButton sx={{ position: "relative", left: "25px" }}>
                <LocalPhoneIcon sx={{ marginRight: "10px" }} />
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
