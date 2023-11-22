import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ShareIcon from "@mui/icons-material/Share";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Box } from "@mui/material";
import ContactForm from "./ContactForm";
import { useState } from "react";

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
          <Collapse timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                sx={{
                  color: "#607B96",
                  position: "relative",
                  left: "15px",
                  "&:hover": {
                    color: "#fff",
                  },
                }}
              >
                <EmailIcon />
                <ListItemText
                  sx={{
                    fontFamily: "Fira Code",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                    paddingLeft: "10px",
                  }}
                  primary="tomasolsiak1@gmail.com"
                />
              </ListItemButton>
              <ListItemButton
                sx={{
                  color: "#607B96",
                  position: "relative",
                  left: "15px",
                  "&:hover": {
                    color: "#fff",
                  },
                }}
              >
                <LocalPhoneIcon />
                <ListItemText
                  sx={{
                    fontFamily: "Fira Code",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                    paddingLeft: "10px",
                  }}
                  primary="+421 515 974"
                />
              </ListItemButton>
            </List>
          </Collapse>

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
            <List component="div" disablePadding>
              <ListItemButton
                sx={{
                  color: "#607B96",
                  position: "relative",
                  left: "15px",
                  "&:hover": {
                    color: "#fff",
                  },
                }}
              >
                <ShareIcon fontSize="small" />

                <ListItemText
                  sx={{
                    fontFamily: "Fira Code",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                    paddingLeft: "10px",
                  }}
                  primary="Instagram accaunt"
                />
              </ListItemButton>
              <ListItemButton
                sx={{
                  color: "#607B96",
                  position: "relative",
                  left: "15px",
                  "&:hover": {
                    color: "#fff",
                  },
                }}
              >
                <ShareIcon fontSize="small" />
                <ListItemText
                  sx={{
                    fontFamily: "Fira Code",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                    paddingLeft: "10px",
                  }}
                  primary="Twich profile"
                />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
        <ContactForm />
      </Box>
    </>
  );
};

export default ContactMe;
