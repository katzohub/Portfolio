import { useState } from "react";
import { Collapse, ListItemText } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  StyledContactBtnContainer,
  StyledContactDivider,
  StyledContactBtnOpenFind,
  StyledContactListItem,
  StyledShareIcon,
  StyledLeftContactBtn,
  StyledNavigateText,
} from "./StyledContact";
import { useIntl } from "react-intl";

const ContactCollapse = () => {
  const [openFindMeContact, setOpenFindMeContact] = useState<boolean>(false);
  const [openFindMe, setOpenFindMe] = useState<boolean>(false);
  const [activeContactButton, setActiveContactButton] = useState<string>("");
  const [activeButton, setActiveButton] = useState<string>("");
  const handleClickContact = () => {
    setOpenFindMe(!openFindMe);
  };

  const intl = useIntl();
  const handleClickContactOne = () => {
    setOpenFindMeContact(!openFindMeContact);
  };
  return (
    <>
      <StyledContactBtnContainer
        sx={{
          color: activeButton === "contact" ? "#fff" : "#607B96",
        }}
        onClick={() => {
          handleClickContactOne();
          setActiveButton((prevState) =>
            prevState === "contact" ? "" : "contact"
          );
        }}
      >
        {openFindMeContact ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}

        <ListItemText primary="contact" />
        {openFindMeContact ? <StyledContactDivider /> : ""}
      </StyledContactBtnContainer>

      <StyledContactBtnOpenFind
        sx={{
          color: activeContactButton === "contact" ? "#fff" : "#607B96",
        }}
        onClick={() => {
          handleClickContact();
          setActiveContactButton((prevState) =>
            prevState === "contact" ? "" : "contact"
          );
        }}
      >
        {openFindMe ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}

        <ListItemText
          primary={intl.formatMessage({ id: "contact.findMeIn" })}
        />
      </StyledContactBtnOpenFind>
      <Collapse in={openFindMe} timeout="auto" unmountOnExit>
        <StyledContactListItem disablePadding>
          <StyledNavigateText
            target="_blank"
            href="https://instagram.com/tomasolsiak?igshid=YzAwZjE1ZTI0Zg%3D%3D&utm_source=qr"
          >
            <StyledLeftContactBtn>
              <StyledShareIcon />
              <ListItemText
                primary={intl.formatMessage({
                  id: "contact.instagramAccount",
                })}
              />
            </StyledLeftContactBtn>
          </StyledNavigateText>
        </StyledContactListItem>
        <StyledContactListItem disablePadding>
          <StyledNavigateText
            target="_blank"
            href="https://www.twitch.tv/settings/profile"
          >
            <StyledLeftContactBtn>
              <StyledShareIcon />
              <ListItemText
                primary={intl.formatMessage({
                  id: "contact.twitchAccount",
                })}
              />
            </StyledLeftContactBtn>
          </StyledNavigateText>
        </StyledContactListItem>
      </Collapse>
    </>
  );
};

export default ContactCollapse;
