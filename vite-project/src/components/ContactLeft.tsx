import { FC, ReactNode } from "react";
import { ListItemButton, ListItemText, Collapse } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { useIntl } from "react-intl";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaReddit } from "react-icons/fa6";
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
  myIcon?: ReactNode;
};

const ContactLeft: FC<ContactLeftProps> = ({
  isTrue,
  isScreen,
  handleClickContact,
  activeContactButton,
  openContact,
  nameCollapse,
  myIcon,
}) => {
  const classes = usePageStyles();
  const intl = useIntl();

  return (
    <>
      <>
        <ListItemButton
          className={classes.aboutContactContainer}
          onClick={() => {
            if (handleClickContact) {
              handleClickContact();
            }
          }}
          sx={(theme) => ({
            display: isTrue ? "flex" : "none",
            padding: "8px 16px 8px 0px",

            color:
              activeContactButton === "contact"
                ? theme.myColors.colorFFF
                : theme.myColors.colorNonActive,
            [theme.breakpoints.down("md")]: {
              display: isTrue ? "flex" : "flex",
              paddingLeft: "2.5px",
            },
          })}
        >
          {openContact ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          {myIcon}
          <ListItemText
            primary={intl.formatMessage({ id: nameCollapse })}
            sx={{ paddingLeft: "10px" }}
          />
        </ListItemButton>
      </>

      <Collapse
        className={classes.aboutCollapseContact}
        in={openContact}
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
                <ListItemButton
                  className={classes.leftContactBtn}
                  sx={(theme) => ({
                    [theme.breakpoints.down("md")]: { paddingLeft: "35px" },
                  })}
                >
                  <EmailIcon className={classes.leftContactIcon} />
                  <ListItemText primary="tomasolsiak1@gmail.com" />
                </ListItemButton>
              </a>
            }
            mySecondInfo={
              <a href="tel:+421915515974" className={classes.leftContactLink}>
                <ListItemButton
                  className={classes.leftContactBtn}
                  sx={(theme) => ({
                    [theme.breakpoints.down("md")]: { paddingLeft: "35px" },
                  })}
                >
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
                <ListItemButton
                  className={classes.leftContactBtn}
                  sx={(theme) => ({
                    [theme.breakpoints.down("md")]: { paddingLeft: "25px" },
                  })}
                >
                  <FaInstagram style={{ fontSize: "24px" }} />
                  <ListItemText
                    sx={{ paddingLeft: "10px" }}
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
                href="https://x.com/TOM3K_R34DY"
                className={classes.leftFindMeIn}
              >
                <ListItemButton
                  className={classes.leftContactBtn}
                  sx={(theme) => ({
                    [theme.breakpoints.down("md")]: { paddingLeft: "25px" },
                  })}
                >
                  <FaXTwitter style={{ fontSize: "24px" }} />
                  <ListItemText
                    sx={{ paddingLeft: "10px" }}
                    primary={intl.formatMessage({
                      id: "contact.twitchAccount",
                    })}
                  />
                </ListItemButton>
              </a>
            }
            myThirdInfo={
              <a
                target="_blank"
                href="https://www.reddit.com/user/New-Bench9932/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button"
                className={classes.leftFindMeIn}
              >
                <ListItemButton
                  className={classes.leftContactBtn}
                  sx={(theme) => ({
                    [theme.breakpoints.down("md")]: { paddingLeft: "25px" },
                  })}
                >
                  <FaReddit style={{ fontSize: "24px" }} />
                  <ListItemText
                    sx={{ paddingLeft: "10px" }}
                    // primary={intl.formatMessage({
                    //   id: "contact.twitchAccount",
                    // })}
                    // TODO reapain text
                    primary="Reddit"
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
