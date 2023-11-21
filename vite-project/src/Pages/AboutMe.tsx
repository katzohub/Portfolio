import { useState } from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import SchoolIcon from "@mui/icons-material/School";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FolderIcon from "@mui/icons-material/Folder";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Box } from "@mui/material";

const AboutMe = () => {
  const [open, setOpen] = useState(true);
  const [openContact, setOpenContact] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
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
              personal-info
              <div
                style={{
                  color: "#607B96",
                  position: "relative",
                  left: "104px",
                  fontFamily: "Fira Code",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 400,
                }}
              >
                _about_me
              </div>
            </ListSubheader>
          }
        >
          <ListItemButton
            sx={{
              color: "#607B96",
              "&:hover": {
                color: "#fff",
              },
            }}
          >
            <ChevronRightIcon />
            <ListItemIcon>
              <FolderIcon sx={{ color: "#E99287" }} />
            </ListItemIcon>

            <ListItemText
              sx={{
                fontFamily: "Fira Code",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
                position: "relative",
                top: "1px",
                left: "-20px",
              }}
              primary="bio"
            />
          </ListItemButton>
          <ListItemButton
            sx={{
              color: "#607B96",
              "&:hover": {
                color: "#fff",
              },
            }}
          >
            <ChevronRightIcon />
            <ListItemIcon>
              <FolderIcon sx={{ color: "#43D9AD" }} />
            </ListItemIcon>

            <ListItemText
              sx={{
                fontFamily: "Fira Code",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
                position: "relative",
                top: "1px",
                left: "-20px",
              }}
              primary="interests"
            />
          </ListItemButton>

          <ListItemButton
            sx={{
              color: "#607B96",
              "&:hover": {
                color: "#fff",
              },
            }}
            onClick={handleClick}
          >
            {open ? <ExpandLess /> : <ExpandMore />}
            <ListItemIcon>
              <FolderIcon sx={{ color: "#3A49A4" }} />
            </ListItemIcon>
            <ListItemText
              sx={{
                fontFamily: "Fira Code",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
                position: "relative",
                top: "1px",
                left: "-20px",
              }}
              primary="education"
            />
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
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
                <SchoolIcon />
                <ListItemText
                  sx={{
                    fontFamily: "Fira Code",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                    paddingLeft: "10px",
                  }}
                  primary="primary-school"
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
                <SchoolIcon />
                <ListItemText
                  sx={{
                    fontFamily: "Fira Code",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                    paddingLeft: "10px",
                  }}
                  primary="high-school"
                />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton
            onClick={handleClickContact}
            sx={{
              color: "#607B96",
              marginTop: "100px",
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
            <ListItemText primary="contact" />
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
        </List>
        <Box
          sx={{
            position: "relative",

            top: "120px",
            left: "25px",
            width: "100%",
            color: "#607B96",
            fontFamily: "Fira Code",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: 450,
            lineHeight: "150%",
            display: "grid",
            gridTemplateColumns: "auto 1fr",
          }}
        >
          <Box
            width={10}
            display="flex"
            flexDirection="column"
            alignItems="end"
          >
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
            <p>11</p>
            <p>12</p>
            <p>13</p>
            <p>14</p>
            <p>15</p>
            <p>16</p>
          </Box>
          <Box pl={5}>
            <p style={{ position: "relative", left: "-10px" }}>/**</p>
            <p> * About me</p>
            <p> * I have 5 years of еxperience in web</p>
            <p>* development lorem ipsum dolor sit amet,</p>
            <p>* consectetur adipiscing elit, sed do eiusmod</p>
            <p>* tempor incididunt ut labore et dolore</p>
            <p>* magna aliqua. Ut enim ad minim veniam,</p>
            <p>* quis nostrud exercitation ullamco laboris</p>
            <p>* nisi ut aliquip ex ea commodo consequat.</p>
            <p>* Duis aute irure dolor in reprehenderit in</p>
            <p>*</p>
            <p>* Duis aute irure dolor in reprehenderit in</p>
            <p>* voluptate velit esse cillum dolore eu fugiat</p>
            <p>* nulla pariatur. Excepteur sint occaecat</p>
            <p>* officia deserunt mollit anim id est laborum.</p>
            <p>*/</p>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AboutMe;
