import { FC } from "react";
import { ListItemText, Box, Typography } from "@mui/material";
import {
  StyledNavigationContianer,
  StyledNavigationIconMinScreen,
  StyledNavigationTopWrapp,
  StyledNavigationLinkMinScreen,
} from "./StyledComponents";
import { useIntl } from "react-intl";
import { useLocation } from "react-router-dom";
import {
  trueNavigationData,
  falseNavigationData,
} from "../constants/Navigation";

type NavigationProps = {
  isNavigationLink: boolean;
  onSelectItem?: (path: string) => void;
};

const Navigation: FC<NavigationProps> = ({
  isNavigationLink,
  onSelectItem,
}) => {
  const intl = useIntl();
  const location = useLocation();
  const { pathname } = location;

  return (
    <StyledNavigationContianer>
      <Box
        className={
          isNavigationLink
            ? "navigation-top-contianer"
            : "navigation-bottom-contianer"
        }
      >
        {isNavigationLink
          ? trueNavigationData.map((item, index) => {
              const { goUrl, text, icon } = item;
              return (
                <StyledNavigationTopWrapp
                  key={index}
                  className={`${pathname === goUrl ? "active" : ""}`}
                  onClick={() => onSelectItem && onSelectItem(goUrl)}
                >
                  <StyledNavigationIconMinScreen>
                    {icon}
                  </StyledNavigationIconMinScreen>
                  <ListItemText>
                    {intl.formatMessage({ id: text })}
                  </ListItemText>
                </StyledNavigationTopWrapp>
              );
            })
          : falseNavigationData.map((item, index) => {
              const { goUrl, icon, text } = item;
              return (
                <StyledNavigationLinkMinScreen
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={goUrl}
                >
                  {text && (
                    <Typography className="github-link">{text}</Typography>
                  )}
                  {icon}
                </StyledNavigationLinkMinScreen>
              );
            })}
      </Box>
    </StyledNavigationContianer>
  );
};

export default Navigation;
