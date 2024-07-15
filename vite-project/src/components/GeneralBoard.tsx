import { FC, ReactNode } from "react";
import { ListSubheader, Box } from "@mui/material";
import { useIntl } from "react-intl";
import usePageStyles from "../styles/stylePages";

type GeneralBoardProps = {
  generalHeading: string;
  generalText: string;
  leftTemplate: ReactNode;
  postprimaryTemplate?: ReactNode;
  generalTemplate: ReactNode;
};

const GeneralBoard: FC<GeneralBoardProps> = ({
  generalHeading,
  generalText,
  leftTemplate,
  postprimaryTemplate,
  generalTemplate,
}) => {
  const classes = usePageStyles();
  const intl = useIntl();
  return (
    <>
      <Box className={classes.aboutContainer}>
        <Box
          sx={(theme) => ({
            width: "100%",
            height: "100dvh",
            display: "flex",

            [theme.breakpoints.down("md")]: {
              display: "block",
            },
          })}
        >
          <Box
            sx={{ position: "relative" }}
            className={classes.aboutLeftNavContainer}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <Box
              sx={(theme) => ({
                position: "absolute",
                right: "0px",
                top: "0px",
                width: "2px",
                border: `1px solid ${theme.myColors.colorLinie} !important`,
                height: "100vh",
                zIndex: 999,
                background: theme.myColors.colorLinie,
                [theme.breakpoints.down("md")]: {
                  display: "none",
                },
              })}
            ></Box>
            <Box
              sx={(theme) => ({
                width: "100vw",
                height: "56px",
                fontFamily: "Fira Code !important",
                display: "flex",
                justifyContent: "center",
                color: `${theme.myColors.colorFFF} !important`,
                fontSize: "16px !important",
                fontStyle: "normal",
                position: "relative",
                fontWeight: 400,
                [theme.breakpoints.down("md")]: {
                  width: "auto !important",
                  borderBottom: `1px solid transparent`,
                  left: "0px",
                  display: "none",
                },
              })}
            >
              <Box
                sx={(theme) => ({
                  width: "95%",
                  height: "100%",
                  background: theme.myColors.generalBackground,
                  zIndex: 500,
                  borderBottom: `2px solid ${theme.myColors.colorLinie}`,
                  display: "flex",
                  alignItems: "center",
                  [theme.breakpoints.down("md")]: {
                    width: "100%",
                  },
                })}
              >
                <Box sx={{ width: "232px" }}>
                  {intl.formatMessage({ id: generalHeading })}
                </Box>

                <Box
                  sx={{
                    paddingLeft: "10px",
                  }}
                >
                  {intl.formatMessage({ id: generalText })}
                </Box>
              </Box>
            </Box>
            <ListSubheader
              component="div"
              id="nested-list-subheader"
              className={classes.aboutMinWidth}
            >
              {intl.formatMessage({ id: generalHeading })}
            </ListSubheader>
            {leftTemplate}
            {postprimaryTemplate}
          </Box>
          {generalTemplate}
        </Box>
      </Box>
    </>
  );
};

export default GeneralBoard;
