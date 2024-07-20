import { FC, ReactNode } from "react";
import { ListItemIcon } from "@mui/material";
import { StyledAboutItemBtnNav, StyledAboutBtnText } from "./StyledAbout";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Theme } from "@mui/system";
import { useIntl } from "react-intl";

type ChangeButtonProps = {
  text: string;
  myIcon: ReactNode;
  myCondition: boolean;
  changeText: (translate: string, changeText: string) => void;
};

const AboutNavButton: FC<ChangeButtonProps> = ({
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
