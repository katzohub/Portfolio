import LeftHeadertable from "./LeftHeadertable";
import GameSnake from "./GameSnake";
import { Box } from "@mui/material";
import usePageStyles from "../style";

const OnePage = () => {
  const classes = usePageStyles();
  return (
    <>
      <Box className={classes.pageContainer}>
        <Box className={classes.pageWrap}>
          <Box className={classes.pageLeftWrap}>
            <LeftHeadertable />
          </Box>
          <Box className={classes.pageRightWrap}>
            <GameSnake />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default OnePage;
