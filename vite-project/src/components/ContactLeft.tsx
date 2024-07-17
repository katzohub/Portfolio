import { FC } from "react";
import { ListItemButton, ListItemText, Collapse } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import EmailIcon from "@mui/icons-material/Email";
// import ShareIcon from "@mui/icons-material/Share";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { useIntl } from "react-intl";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import usePageStyles from "../styles/stylePages";
import LeftContact from "./LeftContact";
// TODO reapain component
type ContactLeftProps = {
  isTrue: boolean;
  isScreen: boolean;
  handleClickContact?: () => void | undefined;
  activeContactButton?: string;
  openContact: boolean;
  nameCollapse: string;
};

const ContactLeft: FC<ContactLeftProps> = ({
  isTrue,
  isScreen,
  handleClickContact,
  activeContactButton,
  openContact,
  nameCollapse,
}) => {
  const classes = usePageStyles();
  const intl = useIntl();

  return (
    <>
      {isTrue ? (
        <>
          <ListItemButton
            className={classes.aboutContactContainer}
            onClick={() => {
              if (handleClickContact) {
                handleClickContact();
              }
            }}
            sx={(theme) => ({
              padding: "8px 16px 8px 0px",
              color:
                activeContactButton === "contact"
                  ? theme.myColors.colorFFF
                  : theme.myColors.colorNonActive,
            })}
          >
            {openContact ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            {/* TODO ADD ICON NO URGENT PROPS */}
            <ListItemText primary={intl.formatMessage({ id: nameCollapse })} />
          </ListItemButton>
        </>
      ) : null}
      <Collapse
        className={classes.aboutCollapseContact}
        in={openContact || !isTrue}
        timeout="auto"
        unmountOnExit
      >
        {isScreen ? (
          <LeftContact
            myFirstInfo={
              <a
                href="mailto:tomasolsiak1@gmail.com"
                className={classes.leftContactLink}
              >
                <ListItemButton className={classes.leftContactBtn}>
                  <EmailIcon className={classes.leftContactIcon} />
                  <ListItemText primary="tomasolsiak1@gmail.com" />
                </ListItemButton>
              </a>
            }
            mySecondInfo={
              <a href="tel:+421915515974" className={classes.leftContactLink}>
                <ListItemButton className={classes.leftContactBtn}>
                  <LocalPhoneIcon className={classes.leftContactIcon} />
                  <ListItemText primary="+421 915 515 974" />
                </ListItemButton>
              </a>
            }
          />
        ) : (
          <LeftContact
            myFirstInfo={
              <a
                target="_blank"
                href="https://instagram.com/tomasolsiak?igshid=YzAwZjE1ZTI0Zg%3D%3D&utm_source=qr"
                className={classes.leftFindMeIn}
              >
                <ListItemButton className={classes.leftContactBtn}>
                  <FaInstagram className={classes.leftContactIcon} />
                  <ListItemText
                    primary={intl.formatMessage({
                      id: "contact.instagramAccount",
                    })}
                  />
                </ListItemButton>
              </a>
            }
            // rechange link
            mySecondInfo={
              <a
                target="_blank"
                href="https://www.twitch.tv/settings/profile"
                className={classes.leftFindMeIn}
              >
                <ListItemButton className={classes.leftContactBtn}>
                  <FaXTwitter className={classes.leftContactIcon} />
                  <ListItemText
                    primary={intl.formatMessage({
                      id: "contact.twitchAccount",
                    })}
                  />
                </ListItemButton>
              </a>
            }
          />
        )}
      </Collapse>
    </>
  );
};

export default ContactLeft;
