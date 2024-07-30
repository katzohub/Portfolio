import { FC, useState, useEffect } from "react";
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
import { motion, AnimatePresence } from "framer-motion";

const MontionStyledAboutSidebarContainer = motion(StyledAboutSidebarContainer);

const AboutSideBar: FC<AboutSideBarProps> = ({ changeText, activeButton }) => {
  const intl = useIntl();
  const [open, setOpen] = useState<boolean>(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  return (
    <AnimatePresence>
      {isReady && (
        <>
          <MontionStyledAboutSidebarContainer
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <AboutNavButton
              text={"about.bio"}
              testCy="btn-bio"
              myIcon={<StyledAboutIconBio />}
              myCondition={activeButton === "bio"}
              changeText={() => changeText("about.bio", "bio")}
            />
            <AboutNavButton
              testCy="btn-interests"
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
                data-cy="btn-collapse-education"
                primary={intl.formatMessage({ id: "about.education" })}
              />
            </StyledAboutItemBtn>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <StyledAboutCollapseList disablePadding>
                <AboutNavButton
                  testCy="btn-primary-school"
                  text={"about.primary-school"}
                  myIcon={<SchoolIcon />}
                  myCondition={activeButton === "primary-school"}
                  changeText={() =>
                    changeText("about.primary-school", "primary-school")
                  }
                />
                <AboutNavButton
                  testCy="btn-high-school"
                  text={"about.high-school"}
                  myIcon={<SchoolIcon />}
                  myCondition={activeButton === "high-school"}
                  changeText={() =>
                    changeText("about.high-school", "high-school")
                  }
                />
              </StyledAboutCollapseList>
            </Collapse>
          </MontionStyledAboutSidebarContainer>
        </>
      )}
    </AnimatePresence>
  );
};

export default AboutSideBar;
