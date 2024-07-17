import { FC, ReactNode } from "react";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import usePageStyles from "../styles/stylePages";
import { useIntl } from "react-intl";

type ChangeButtonProps = {
  text: string;
  myIcon: ReactNode;
  myCondition: boolean;
  changeText: (translate: string, changeText: string) => void;
};

const ChangeButton: FC<ChangeButtonProps> = ({
  text,
  myIcon,
  myCondition,
  changeText,
}) => {
  const classes = usePageStyles();
  const intl = useIntl();
  return (
    <>
      <ListItemButton
        className={classes.aboutHoverBtnEffect}
        sx={(theme) => ({
          width: "100%",
          padding: "8px 16px 8px 0px",
          color: myCondition
            ? theme.myColors.colorFFF
            : theme.myColors.colorNonActive,
          "& svg": {
            color: myCondition
              ? theme.myColors.colorFFF
              : theme.myColors.colorNonActive,
          },
          [theme.breakpoints.down("md")]: {
            paddingLeft: "2.5px",
          },
        })}
        onClick={() => changeText("about.bio", "bio")}
      >
        <ChevronRightIcon />

        <ListItemIcon>{myIcon}</ListItemIcon>

        <ListItemText
          className={classes.aboutBtnText}
          primary={intl.formatMessage({ id: text })}
        />
      </ListItemButton>
    </>
  );
};

export default ChangeButton;
