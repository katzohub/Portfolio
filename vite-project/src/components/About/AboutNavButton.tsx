import { FC } from "react";
import { ListItemIcon } from "@mui/material";
import { StyledAboutItemBtnNav, StyledAboutBtnText } from "./StyledAbout";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Theme } from "@mui/system";
import { useIntl } from "react-intl";
import { AboutNavButtonProps } from "../../types";

const AboutNavButton: FC<AboutNavButtonProps> = ({
  text,
  myIcon,
  myCondition,
  changeText,
}) => {
  const intl = useIntl();
  return (
    <>
      <StyledAboutItemBtnNav
        sx={(theme: Theme) => ({
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
        <ListItemIcon>{myIcon}</ListItemIcon>
        <StyledAboutBtnText primary={intl.formatMessage({ id: text })} />
      </StyledAboutItemBtnNav>
    </>
  );
};

export default AboutNavButton;
