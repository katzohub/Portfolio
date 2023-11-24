import { useState } from "react";
import {
  List,
  ListSubheader,
  ListItemButton,
  ListItemText,
  Collapse,
  Box,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ListItem from "@mui/material/ListItem";
import ContactForm from "./ContactForm";
import LeftContact from "./LeftContact";
import usePageStyles from "../stylePages";

const ContactMe = () => {
  const [openFindMe, setOpenFindMe] = useState(false);
  const [activeContactButton, setActiveContactButton] = useState<string>("");

  const handleClickContact = () => {
    setOpenFindMe(!openFindMe);
  };
  const classes = usePageStyles();
  return (
    <>
      <Box className={classes.contactContainer}>
        <List
          className={classes.contactList}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader
              component="div"
              id="nested-list-subheader"
              sx={{ position: "relative", left: "30px" }}
              className={classes.contactLeftWrap}
            >
              {" "}
              contact
              <div className={classes.contactRighttext}>_contact_me</div>
            </ListSubheader>
          }
        >
          {/* LeftContact */}
          <LeftContact />

          <ListItemButton
            onClick={() => {
              handleClickContact();
              setActiveContactButton((prevState) =>
                prevState === "contact" ? "" : "contact"
              );
            }}
            style={{
              color: activeContactButton === "contact" ? "#fff" : "#607B96",
            }}
            className={classes.contactBoxNoavigation}
          >
            {openFindMe ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            <ListItemText primary="find-me-also-in" />
          </ListItemButton>
          <Collapse in={openFindMe} timeout="auto" unmountOnExit>
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
              <a
                href="https://instagram.com/tomasolsiak?igshid=YzAwZjE1ZTI0Zg%3D%3D&utm_source=qr"
                className={classes.leftContactLink}
              >
                <ListItemButton className={classes.leftContactBtn}>
                  <ShareIcon className={classes.leftContactIcon} />
                  <ListItemText primary="Instagram account" />
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
              <a
                href="https://www.twitch.tv/settings/profile"
                className={classes.leftContactLink}
              >
                <ListItemButton className={classes.leftContactBtn}>
                  <ShareIcon className={classes.leftContactIcon} />
                  <ListItemText primary="Twitch profile" />
                </ListItemButton>
              </a>
            </ListItem>
          </Collapse>
        </List>
        <ContactForm />
      </Box>
    </>
  );
};

export default ContactMe;
