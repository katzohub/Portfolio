import { FC } from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import { FaChevronRight } from "react-icons/fa";
import { useIntl } from "react-intl";
// import Blue from "../assets/img/boobleBackground/Blue.png";
// import Green from "../assets/img/boobleBackground/Green.png";
import usePageStyles from "../styles/style";

const LeftHeadertable: FC = () => {
  const classes = usePageStyles();
  const intl = useIntl();

  return (
    <>
      <Box className={classes.leftHeaderContainer}>
        {/* TODO Canva redesign and change color */}
        {/* <img className={classes.leftHeaderGreen} src={Blue} alt="" />
        <img className={classes.leftHeaderPurple} src={Green} alt="" /> */}
        <Grid container direction="column" className={classes.leftHeaderBox}>
          <Box>
            <Typography variant="h3" className={classes.leftHeaderH3}>
              {intl.formatMessage({ id: "home.name" })}
            </Typography>
            <Typography variant="h1" className={classes.leftHeaderH1}>
              {intl.formatMessage({ id: "home.nameHeader" })}
            </Typography>
            <Typography variant="h2" className={classes.leftHeaderH2}>
              <FaChevronRight
                style={{ fontSize: "1.5rem", position: "relative", top: "2px" }}
              />{" "}
              {intl.formatMessage({ id: "home.myWork" })}
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2" className={classes.leftHeaderP}>
              // {intl.formatMessage({ id: "home.posTitleOne" })}
            </Typography>
            <Typography variant="body2" className={classes.leftHeaderP}>
              // {intl.formatMessage({ id: "home.posTitleTwo" })}
            </Typography>
            <Typography variant="body2" className={classes.mobileLeftHeaderP}>
              // {intl.formatMessage({ id: "home.posTitleMobile" })}
            </Typography>

            <Typography variant="body2">
              <span className={classes.leftHeaderSpanOne}>const </span>
              <span className={classes.leftHeaderSpanTwo}>githubLink</span>
              <span className={classes.leftHeaderSpanThree}> = </span>
              <span>
                {" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/katzohub/Portfolio/tree/main/vite-project/src/components"
                  className={classes.leftHeaderSpanFour}
                >
                  “https://github.com/gameSnake”
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/katzohub"
                  className={classes.leftHeaderSpanFourMobile}
                >
                  “https://github.com/katzohub”
                </a>
              </span>
            </Typography>
          </Box>
          <Button
            variant="outlined"
            sx={{
              background:
                "linear-gradient(150deg, rgba(23, 85, 83, 0.70) 0%, rgba(67, 217, 173, 0.09) 100%)",
              boxShadow: "0px 2px 0px rgba(255, 255, 255, 0.30) inset",
              borderRadius: 8,
              border: "1px #0C1616 solid",
              backdropFilter: "blur(64px)",
            }}
          >
            <Typography
              variant="caption"
              sx={(theme) => ({
                display: "block",
                [theme.breakpoints.down("md")]: {
                  display: "none",
                },
              })}
            >
              Spustiť hru snake v novom okne
            </Typography>
            <Typography
              variant="caption"
              sx={(theme) => ({
                display: "none",
                [theme.breakpoints.down("md")]: {
                  display: "block",
                },
              })}
            >
              Spustiť hru snake pre mobilne zariadenia
            </Typography>
          </Button>
          <Button
            variant="outlined"
            sx={{
              background:
                "linear-gradient(150deg, rgba(23, 85, 83, 0.70) 0%, rgba(67, 217, 173, 0.09) 100%)",
              boxShadow: "0px 2px 0px rgba(255, 255, 255, 0.30) inset",
              borderRadius: 8,
              border: "1px #0C1616 solid",
              backdropFilter: "blur(64px)",
            }}
          >
            Stiahnúť CV
          </Button>
        </Grid>
      </Box>
    </>
  );
};

export default LeftHeadertable;
