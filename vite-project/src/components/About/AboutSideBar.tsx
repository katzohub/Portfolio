import { FC, useState } from "react";
import { Collapse, ListItemIcon } from "@mui/material";
import {
  StyledAboutSidebarContainer,
  StyledAboutIconBio,
  StyledAboutIconInterest,
  StyledAboutItemBtn,
  StyledAboutIconEducation,
  StyledAboutBtnText,
  StyledAboutCollapseList,
} from "./StyledAbout";
import { Theme } from "@mui/system";
import AboutNavButton from "./AboutNavButton";
import SchoolIcon from "@mui/icons-material/School";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useIntl } from "react-intl";
import { AboutSideBarProps } from "../../types";

const AboutSideBar: FC<AboutSideBarProps> = ({ changeText, activeButton }) => {
  const intl = useIntl();
  const [open, setOpen] = useState<boolean>(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <StyledAboutSidebarContainer>
        <AboutNavButton
          text={"about.bio"}
          myIcon={<StyledAboutIconBio />}
          myCondition={activeButton === "bio"}
          changeText={() => changeText("about.bio", "bio")}
        />
        <AboutNavButton
          text={"about.interests"}
          myIcon={<StyledAboutIconInterest />}
          myCondition={activeButton === "interests"}
          changeText={() => changeText("about.interests", "interests")}
        />
        <StyledAboutItemBtn
          sx={(theme: Theme) => ({
            color:
              activeButton === "education"
                ? theme.myColors.colorFFF
                : theme.myColors.colorNonActive,
          })}
          onClick={() => {
            handleClick();
          }}
        >
          {open ? <ExpandLess /> : <ExpandMore />}
          <ListItemIcon>
            <StyledAboutIconEducation />
          </ListItemIcon>
          <StyledAboutBtnText
            primary={intl.formatMessage({ id: "about.education" })}
          />
        </StyledAboutItemBtn>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <StyledAboutCollapseList disablePadding>
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
          </StyledAboutCollapseList>
        </Collapse>
      </StyledAboutSidebarContainer>
    </>
  );
};

export default AboutSideBar;
