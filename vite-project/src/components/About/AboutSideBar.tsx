import { FC, useState } from "react";
import {
  Box,
  Collapse,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  List,
} from "@mui/material";
import AboutNavButton from "./AboutNavButton";
import FolderIcon from "@mui/icons-material/Folder";
import SchoolIcon from "@mui/icons-material/School";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useIntl } from "react-intl";

import usePageStyles from "../../styles/stylePages";

type AboutSideBarProps = {
  changeText: (translate: string, changeText: string) => void;
  activeButton: string;
};

const AboutSideBar: FC<AboutSideBarProps> = ({ changeText, activeButton }) => {
  const classes = usePageStyles();
  const intl = useIntl();
  const [open, setOpen] = useState<boolean>(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Box
        sx={(theme) => ({
          paddingLeft: "35px",
          [theme.breakpoints.down("md")]: { paddingLeft: "0" },
        })}
      >
        <AboutNavButton
          text={"about.bio"}
          myIcon={<FolderIcon className={classes.aboutIconBio} />}
          myCondition={activeButton === "bio"}
          changeText={() => changeText("about.bio", "bio")}
        />
        <AboutNavButton
          text={"about.interests"}
          myIcon={<FolderIcon className={classes.aboutIconInterest} />}
          myCondition={activeButton === "interests"}
          changeText={() => changeText("about.interests", "interests")}
        />
        <ListItemButton
          className={classes.aboutHoverBtnEffect}
          sx={(theme) => ({
            padding: "8px 16px 8px 0px",
            color:
              activeButton === "education"
                ? theme.myColors.colorFFF
                : theme.myColors.colorNonActive,
            [theme.breakpoints.down("md")]: {
              paddingLeft: "2.5px",
            },
          })}
          onClick={() => {
            handleClick();
          }}
        >
          {open ? <ExpandLess /> : <ExpandMore />}
          <ListItemIcon>
            <FolderIcon className={classes.aboutIconEducation} />
          </ListItemIcon>
          <ListItemText
            className={classes.aboutBtnText}
            primary={intl.formatMessage({ id: "about.education" })}
          />
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List
            component="div"
            disablePadding
            sx={(theme) => ({
              [theme.breakpoints.down("md")]: {
                width: "100%",

                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              },
            })}
          >
            <AboutNavButton
              text={"about.primary-school"}
              myIcon={<SchoolIcon />}
              myCondition={activeButton === "primary-school"}
              changeText={() =>
                changeText("about.primary-school", "primary-school")
              }
            />
            <AboutNavButton
              text={"about.high-school"}
              myIcon={<SchoolIcon />}
              myCondition={activeButton === "high-school"}
              changeText={() => changeText("about.high-school", "high-school")}
            />
          </List>
        </Collapse>
      </Box>
    </>
  );
};

export default AboutSideBar;
