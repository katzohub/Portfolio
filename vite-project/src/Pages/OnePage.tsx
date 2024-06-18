import { FC } from "react";
import { LeftHeadertable, GameSnake } from "../components";
import { Box } from "@mui/material";
import usePageStyles from "../styles/style";

const OnePage: FC = () => {
  const classes = usePageStyles();
  return (
    <Box className={classes.backColor}>
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
    </Box>
  );
};

export default OnePage;
