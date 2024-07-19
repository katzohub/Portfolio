import { FC } from "react";
import { LeftSectionHome, GameSnake } from "../components/Home";
import { Box } from "@mui/material";
import usePageStyles from "../styles/style";

const Home: FC = () => {
  const classes = usePageStyles();
  return (
    <Box
      sx={(theme) => ({
        width: "100%",
        height: "100dvh",
        paddingTop: "0px",
        paddingBottom: "0px",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "start",
        overflowY: "auto",

        [theme.breakpoints.down("lg")]: {
          display: "flex",
          height: "100dvh",
          flexDirection: "column",

          alignItems: "center",
          alignContent: "center",

          overflowY: "auto",
          overflowX: "hidden",
        },
        [theme.breakpoints.down("md")]: {
          width: "100%",
          height: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          overflowY: "auto",
          alignItems: "center",
        },
        [theme.breakpoints.down("sm")]: {
          display: "block",
          marginTop: "0px",
        },
      })}
    >
      <Box className={classes.pageWrap}>
        <Box className={classes.pageLeftWrap}>
          <LeftSectionHome />
        </Box>
        <Box className={classes.pageRightWrap}>
          <GameSnake isFullWindow={true} />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
