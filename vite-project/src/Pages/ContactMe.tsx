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
const ContactMe = () => {
  const [openContact, setOpenContact] = useState(false);

  const handleClickContact = () => {
    setOpenContact(!openContact);
  };
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
        }}
      >
        <List
          sx={{
            width: "267px",
            marginTop: "56px",
            borderRight: "2px solid #1E2D3D",
            height: "95vh",
          }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader
              component="div"
              id="nested-list-subheader"
              sx={{
                width: "94vw",
                background: "transparent",
                display: "flex",
                borderBottom: "1px solid #1E2D3D",
                position: "relative",
                left: "30px",
                color: "#fff",
                fontFamily: "Fira Code",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
              }}
            >
              {" "}
              contact
              <div
                style={{
                  color: "#607B96",
                  position: "relative",
                  left: "164px",
                  fontFamily: "Fira Code",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 400,
                }}
              >
                _contact_me
              </div>
            </ListSubheader>
          }
        >
          {/* LeftContact */}
          <LeftContact />

          <ListItemButton
            onClick={handleClickContact}
            sx={{
              color: "#607B96",
              marginTop: "50px",
              fontFamily: "Fira Code",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
              width: "240px",
              position: "relative",
              left: "27px",
              borderTop: "1px solid #1E2D3D",
              borderBottom: "1px solid #1E2D3D",
              "& :hover": {
                color: "#fff",
              },
            }}
          >
            {openContact ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            <ListItemText primary="find-me-also-in" />
          </ListItemButton>
          <Collapse in={openContact} timeout="auto" unmountOnExit>
            <ListItem disablePadding>
              <a
                target="_blank"
                href="https://instagram.com/tomasolsiak?igshid=YzAwZjE1ZTI0Zg%3D%3D&utm_source=qr"
                style={{ textDecoration: "none", color: "#607B96" }}
              >
                <ListItemButton sx={{ position: "relative", left: "25px" }}>
                  <ShareIcon fontSize="small" sx={{ marginRight: "10px" }} />
                  <ListItemText primary="Instagram account" />
                </ListItemButton>
              </a>
            </ListItem>
            <ListItem disablePadding>
              <a
                target="_blank"
                href="https://www.twitch.tv/settings/profile"
                style={{ textDecoration: "none", color: "#607B96" }}
              >
                <ListItemButton sx={{ position: "relative", left: "25px" }}>
                  <ShareIcon fontSize="small" sx={{ marginRight: "10px" }} />
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
