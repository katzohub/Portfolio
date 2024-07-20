import { FC, ReactNode } from "react";
import { ListItemText, Collapse } from "@mui/material";
import {
  StyledListButtonsCollapse,
  StyledBtnText,
  StyledCollapseButton,
  StyledEmailIcon,
  StyledPhoneButton,
  StyledIconPhone,
  StyledBtnInstagram,
  StyledTextInstagram,
  StyledTextNavigate,
  StyledTextNavigateContact,
} from "./StyledButtons";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useIntl } from "react-intl";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaReddit } from "react-icons/fa6";
import { DropdownButtons } from "../Buttons";

// TODO reapain component
type ContactLeftProps = {
  isTrue: boolean;
  isScreen: boolean;
  handleClickContact?: () => void | undefined;
  activeContactButton?: string;
  openContact: boolean;
  nameCollapse: string;
  myIcon?: ReactNode;
};

const ButtonCollapse: FC<ContactLeftProps> = ({
  isTrue,
  isScreen,
  handleClickContact,
  activeContactButton,
  openContact,
  nameCollapse,
  myIcon,
}) => {
  const intl = useIntl();

  return (
    <>
      <>
        <StyledListButtonsCollapse
          activeContactButton={activeContactButton}
          isTrue={isTrue}
          onClick={() => {
            if (handleClickContact) {
              handleClickContact();
            }
          }}
        >
          {openContact ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          {myIcon}
          <StyledBtnText primary={intl.formatMessage({ id: nameCollapse })} />
        </StyledListButtonsCollapse>
      </>

      <Collapse in={openContact} timeout="auto" unmountOnExit>
        {isScreen ? (
          <DropdownButtons
            myFirstInfo={
              <StyledTextNavigateContact href="mailto:tomasolsiak1@gmail.com">
                <StyledCollapseButton>
                  <StyledEmailIcon />
                  <ListItemText primary="tomasolsiak1@gmail.com" />
                </StyledCollapseButton>
              </StyledTextNavigateContact>
            }
            mySecondInfo={
              <StyledTextNavigateContact href="tel:+421915515974">
                <StyledPhoneButton>
                  <StyledIconPhone />
                  <ListItemText primary="+421 915 515 974" />
                </StyledPhoneButton>
              </StyledTextNavigateContact>
            }
          />
        ) : (
          <DropdownButtons
            myFirstInfo={
              <StyledTextNavigate
                target="_blank"
                href="https://instagram.com/tomasolsiak?igshid=YzAwZjE1ZTI0Zg%3D%3D&utm_source=qr"
              >
                <StyledBtnInstagram>
                  <FaInstagram style={{ fontSize: "24px" }} />
                  <StyledTextInstagram
                    primary={intl.formatMessage({
                      id: "contact.instagramAccount",
                    })}
                  />
                </StyledBtnInstagram>
              </StyledTextNavigate>
            }
            // rechange link
            mySecondInfo={
              <StyledTextNavigate
                target="_blank"
                href="https://x.com/TOM3K_R34DY"
              >
                <StyledBtnInstagram>
                  <FaXTwitter style={{ fontSize: "24px" }} />
                  <StyledBtnText
                    primary={intl.formatMessage({
                      id: "contact.twitchAccount",
                    })}
                  />
                </StyledBtnInstagram>
              </StyledTextNavigate>
            }
            myThirdInfo={
              <StyledTextNavigate
                target="_blank"
                href="https://www.reddit.com/user/New-Bench9932/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button"
              >
                <StyledBtnInstagram>
                  <FaReddit style={{ fontSize: "24px" }} />
                  <StyledBtnText primary="Reddit" />
                </StyledBtnInstagram>
              </StyledTextNavigate>
            }
          />
        )}
      </Collapse>
    </>
  );
};

export default ButtonCollapse;
