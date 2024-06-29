import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { FaChevronRight } from "react-icons/fa";
import { useIntl } from "react-intl";
import { Link } from "@mui/material";
import { MyButton } from "../components/";
import SK from "../assets/SK.png";
// import Blue from "../assets/img/boobleBackground/Blue.png";
// import Green from "../assets/img/boobleBackground/Green.png";
import usePageStyles from "../styles/style";

const LeftHeadertable: FC = () => {
  const classes = usePageStyles();
  const intl = useIntl();
  const openSnakeGame = () => {
    window.open("/game_snake", "_blank", "noopener,noreferrer");
  };
  return (
    <>
      <Box className={classes.leftHeaderContainer}>
        {/* TODO Canva redesign and change color */}
        {/* <img className={classes.leftHeaderGreen} src={Blue} alt="" />
        <img className={classes.leftHeaderPurple} src={Green} alt="" /> */}
        <Box className={classes.leftHeaderBox}>
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
              />
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "25px 0",
              position: "relative",
              top: "-10px",
            }}
          >
            <MyButton myBtnFn={openSnakeGame}>
              {intl.formatMessage({ id: "home.startGameBtn" })}
            </MyButton>

            <MyButton>
              <Link
                href={SK}
                download={"portfolio_design"}
                sx={{
                  width: "100%",
                  height: "100%",
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                {intl.formatMessage({ id: "home.download.cv" })}
              </Link>
            </MyButton>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default LeftHeadertable;
