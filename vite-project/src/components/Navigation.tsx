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
import { NavigationProps } from "../types";

const Navigation = ({ isNavigationLink, onSelectItem }: NavigationProps) => {
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
              const { goUrl, text, icon, dataCy } = item;
              return (
                <StyledNavigationTopWrapp
                  key={index}
                  className={`${pathname === goUrl ? "active" : ""}`}
                  onClick={() => onSelectItem && onSelectItem(goUrl)}
                  data-cy={dataCy}
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
              const { goUrl, icon, text, dataCy, aria } = item;
              return (
                <StyledNavigationLinkMinScreen
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={goUrl}
                  data-cy={dataCy}
                  aria-label={aria}
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
