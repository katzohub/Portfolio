import { FC, ReactNode } from "react";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import FolderIcon from "@mui/icons-material/Folder";
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
          color: myCondition
            ? theme.myColors.colorFFF
            : theme.myColors.colorNonActive,
          "& svg": {
            color: myCondition
              ? theme.myColors.colorFFF
              : theme.myColors.colorNonActive,
          },
        })}
        onClick={() => changeText("about.bio", "bio")}
      >
        <ChevronRightIcon />

        <ListItemIcon>
          {/* // props  <FolderIcon className={classes.aboutIconBio} />*/}
          {myIcon}
        </ListItemIcon>

        <ListItemText
          className={classes.aboutBtnText}
          primary={intl.formatMessage({ id: text })}
        />
      </ListItemButton>
    </>
  );
};

export default ChangeButton;
