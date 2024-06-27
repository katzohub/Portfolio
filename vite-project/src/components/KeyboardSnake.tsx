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
        <>
          <Box className={classes.snakeArrowContainer}>
            <div className={classes.snakeUp}>
              <MyButton>
                {" "}
                <FaCaretUp />
              </MyButton>
            </div>
            <Box className={classes.snakeArrowWrap}>
              <div className={classes.snakeArrowLeft}>
                <MyButton>
                  <FaCaretLeft />
                </MyButton>
              </div>
              <div className={classes.snakeArrowDown}>
                <MyButton>
                  <FaCaretDown />
                </MyButton>
              </div>
              <div className={classes.snakeArrowRight}>
                <MyButton>
                  <FaCaretRight />
                </MyButton>
              </div>
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default KeyboardSnake;
