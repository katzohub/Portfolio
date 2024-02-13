import { useState } from "react";
import {
  List,
  ListSubheader,
  ListItemButton,
  ListItemText,
  Collapse,
  Box,
  Divider,
} from "@mui/material";
import { useIntl } from "react-intl";
import ShareIcon from "@mui/icons-material/Share";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ListItem from "@mui/material/ListItem";
import ContactForm from "./ContactForm";
import LeftContact from "./LeftContact";
import usePageStyles from "../styles/stylePages";

const ContactMe = () => {
  const [openFindMeContact, setOpenFindMeContact] = useState<boolean>(false);
  const [openFindMe, setOpenFindMe] = useState<boolean>(false);
  const [activeContactButton, setActiveContactButton] = useState<string>("");
  const [activeButton, setActiveButton] = useState<string>("");
  const handleClickContact = () => {
    setOpenFindMe(!openFindMe);
    console.log("openFindMe:", openFindMe);
  };
  const intl = useIntl();
  const handleClickContactOne = () => {
    setOpenFindMeContact(!openFindMeContact);
    console.log("openFindMeContact:", openFindMeContact);
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
              {intl.formatMessage({ id: "contact.LeftCard" })}
              <div className={classes.contactRighttext}>
                {intl.formatMessage({ id: "contact.contact" })}
              </div>
            </ListSubheader>
          }
        >
          {/* LeftContact */}
          <Box className={classes.contactBoxMinWidth}>
            <LeftContact />
          </Box>
          <ListItemButton
            sx={{
              "&:hover": {
                color: "#fff !important",
                transition: "color 0.2s ease-in",
              },
            }}
            className={classes.contactBoxMaxWidth}
            onClick={() => {
              handleClickContactOne();
              setActiveButton((prevState) =>
                prevState === "contact" ? "" : "contact"
              );
            }}
            style={{
              color: activeButton === "contact" ? "#fff" : "#607B96",
            }}
          >
            {openFindMeContact ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}

            <ListItemText primary="contact" />
            {openFindMeContact ? (
              <Divider
                sx={(theme) => ({
                  position: "relative",
                  top: "25px",
                  left: "-40px",
                  background: theme.myColors.colorLinie,
                  height: "2px",
                  zIndex: 9,
                  width: "100vw",
                })}
              />
            ) : (
              ""
            )}
          </ListItemButton>
          <Collapse in={openFindMeContact} timeout="auto" unmountOnExit>
            <LeftContact />
          </Collapse>

          <ListItemButton
            sx={{
              "&:hover": {
                color: "#fff !important",
                transition: "color 0.2s ease-in",
              },
            }}
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

            <ListItemText
              primary={intl.formatMessage({ id: "contact.findMeIn" })}
            />
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
                className={classes.leftFindMeIn}
              >
                <ListItemButton className={classes.leftContactBtn}>
                  <ShareIcon className={classes.leftContactIcon} />
                  <ListItemText
                    primary={intl.formatMessage({
                      id: "contact.instagramAccount",
                    })}
                  />
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
                className={classes.leftFindMeIn}
              >
                <ListItemButton className={classes.leftContactBtn}>
                  <ShareIcon className={classes.leftContactIcon} />
                  <ListItemText
                    primary={intl.formatMessage({
                      id: "contact.twitchAccount",
                    })}
                  />
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
