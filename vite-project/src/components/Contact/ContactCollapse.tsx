import { useState } from "react";
import {
  Collapse,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ShareIcon from "@mui/icons-material/Share";
// import { LeftContact } from "../../components";
import { useIntl } from "react-intl";
import usePageStyles from "../../styles/stylePages";

const ContactCollapse = () => {
  const [openFindMeContact, setOpenFindMeContact] = useState<boolean>(false);
  const [openFindMe, setOpenFindMe] = useState<boolean>(false);
  const [activeContactButton, setActiveContactButton] = useState<string>("");
  const [activeButton, setActiveButton] = useState<string>("");
  const handleClickContact = () => {
    setOpenFindMe(!openFindMe);
  };
  const classes = usePageStyles();
  const intl = useIntl();
  const handleClickContactOne = () => {
    setOpenFindMeContact(!openFindMeContact);
  };
  return (
    <>
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
          sx={(theme) => ({
            [theme.breakpoints.down("md")]: {
              display: "flex",
              justifyContent: "center",
              position: "relative",
            },

            "&:hover": {
              color: "#fff",
              transition: "color 0.3s ease-in",
              ".MuiListItemText-primary": {
                color: "#fff",
                transition: "color 0.3s ease-in",
              },
              "& svg": {
                color: "#fff",
                transition: "color 0.3s ease-in",
              },
            },
          })}
        >
          <a
            target="_blank"
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
              "& svg": {
                color: "#fff",
                transition: "color 0.3s ease-in",
              },
            },
          })}
        >
          <a
            target="_blank"
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
    </>
  );
};

export default ContactCollapse;
