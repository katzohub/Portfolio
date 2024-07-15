import { FC } from "react";
import { ListItemButton, ListItemText, Collapse } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { LeftContact } from "../../Pages";
import { useIntl } from "react-intl";
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
    <>
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
        <LeftContact />
      </Collapse>
    </>
  );
};

export default AboutContactCollapse;
