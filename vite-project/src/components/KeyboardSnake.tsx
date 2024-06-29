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
  handleButtonClick?: (direction: string) => void;
};

const KeyboardSnake: FC<KeyboardSnakeProps> = ({
  isFunctionKeyboard,
  handleButtonClick,
}) => {
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
            <Box
              sx={{ position: "relative", top: "0px" }}
              onClick={() => handleButtonClick && handleButtonClick("up")}
            >
              <MyButton>
                <FaCaretUp />
              </MyButton>
            </Box>
            <Box className={classes.snakeArrowWrap}>
              <Box
                sx={{ position: "relative", left: "0px" }}
                onClick={() => handleButtonClick && handleButtonClick("left")}
              >
                <MyButton>
                  <FaCaretLeft />
                </MyButton>
              </Box>
              <Box
                onClick={() => handleButtonClick && handleButtonClick("down")}
              >
                <MyButton>
                  <FaCaretDown />
                </MyButton>
              </Box>
              <Box
                sx={{ position: "relative", right: "0px" }}
                onClick={() => handleButtonClick && handleButtonClick("right")}
              >
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
