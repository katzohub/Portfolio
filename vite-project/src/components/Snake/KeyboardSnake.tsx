import { FC } from "react";
import { Box } from "@mui/material";
import {
  FaCaretLeft,
  FaCaretUp,
  FaCaretRight,
  FaCaretDown,
} from "react-icons/fa";
import usePageStyles from "../../styles/style";
import { BigButton } from "../../components/Buttons";

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
              <BigButton>
                <FaCaretUp />
              </BigButton>
            </Box>
            <Box className={classes.snakeArrowWrap}>
              <Box
                sx={{ position: "relative", left: "0px" }}
                onClick={() => handleButtonClick && handleButtonClick("left")}
              >
                <BigButton>
                  <FaCaretLeft />
                </BigButton>
              </Box>
              <Box
                onClick={() => handleButtonClick && handleButtonClick("down")}
              >
                <BigButton>
                  <FaCaretDown />
                </BigButton>
              </Box>
              <Box
                sx={{ position: "relative", right: "0px" }}
                onClick={() => handleButtonClick && handleButtonClick("right")}
              >
                <BigButton>
                  <FaCaretRight />
                </BigButton>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default KeyboardSnake;
