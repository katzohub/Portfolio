import { FC } from "react";
import { Box } from "@mui/material";
import {
  FaCaretLeft,
  FaCaretUp,
  FaCaretRight,
  FaCaretDown,
} from "react-icons/fa";
import usePageStyles from "../styles/style";
import MyButton from "./MyButton";

type KeyboardSnakeProps = {
  isFunctionKeyboard: boolean;
};

const KeyboardSnake: FC<KeyboardSnakeProps> = ({ isFunctionKeyboard }) => {
  const classes = usePageStyles();
  return (
    <>
      {isFunctionKeyboard ? (
        <>
          <Box className={classes.snakeArrowContainer}>
            <div className={classes.snakeUp}>
              <FaCaretUp />
            </div>
            <Box className={classes.snakeArrowWrap}>
              <div className={classes.snakeArrowLeft}>
                <FaCaretLeft />
              </div>
              <div className={classes.snakeArrowDown}>
                <FaCaretDown />
              </div>
              <div className={classes.snakeArrowRight}>
                <FaCaretRight />
              </div>
            </Box>
          </Box>
        </>
      ) : (
        <Box>
          <Box className={classes.snakeArrowContainer}>
            <Box sx={{ position: "relative", top: "0px" }}>
              <MyButton>
                <FaCaretUp />
              </MyButton>
            </Box>
            <Box className={classes.snakeArrowWrap}>
              <Box sx={{ position: "relative", left: "0px" }}>
                <MyButton>
                  <FaCaretLeft />
                </MyButton>
              </Box>
              <Box>
                <MyButton>
                  <FaCaretDown />
                </MyButton>
              </Box>
              <Box sx={{ position: "relative", right: "0px" }}>
                <MyButton>
                  <FaCaretRight />
                </MyButton>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default KeyboardSnake;
