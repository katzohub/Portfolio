import { FC } from "react";
import { ListItemButton, Box, ListItemText, Collapse } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LeftContact from "../LeftContact";
import { useIntl } from "react-intl";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import usePageStyles from "../../styles/stylePages";

type AboutContactCollapseProps = {
  handleClickContact: () => void;
  activeContactButton: string;
  openContact: boolean;
};

const AboutContactCollapse: FC<AboutContactCollapseProps> = ({
  handleClickContact,
  activeContactButton,
  openContact,
}) => {
  const classes = usePageStyles();
  const intl = useIntl();

  return (
    <Box sx={{ display: "none" }}>
      <ListItemButton
        className={classes.aboutContactContainer}
        onClick={() => {
          handleClickContact();
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
        <ListItemText
          primary={intl.formatMessage({ id: "contact.LeftCard" })}
        />
      </ListItemButton>
      <Collapse
        className={classes.aboutCollapseContact}
        in={openContact}
        timeout="auto"
        unmountOnExit
      >
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
      </Collapse>
    </Box>
  );
};

export default AboutContactCollapse;
