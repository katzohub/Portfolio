import { FC } from "react";
import { Box } from "@mui/material";
import {
  FaCaretLeft,
  FaCaretUp,
  FaCaretRight,
  FaCaretDown,
} from "react-icons/fa";
import {
  StyledSnakeArrowsContainer,
  StyledSnakeArrowUp,
  StyledSnakeArrowsWrapp,
  StyledSnakeArrowLeft,
  StyledSnakeArrowDown,
  StyledSnakeArrowRight,
  StyledSnakeArrowsWrapper,
  StyledSnakeBigBtnContainer,
  StyledSnakeBigBtnLeftWrapp,
  StyledSnakeBigBtnLeftPosition,
} from "./StyledSnake";
import { BigButton } from "../../components/Buttons";
import { KeyboardSnakeProps } from "../../types";

const KeyboardSnake: FC<KeyboardSnakeProps> = ({
  isFunctionKeyboard,
  handleButtonClick,
}) => {
  return (
    <>
      {isFunctionKeyboard ? (
        <>
          <StyledSnakeArrowsContainer>
            <StyledSnakeArrowUp>
              <FaCaretUp />
            </StyledSnakeArrowUp>
            <StyledSnakeArrowsWrapp>
              <StyledSnakeArrowLeft>
                <FaCaretLeft />
              </StyledSnakeArrowLeft>
              <StyledSnakeArrowDown>
                <FaCaretDown />
              </StyledSnakeArrowDown>
              <StyledSnakeArrowRight>
                <FaCaretRight />
              </StyledSnakeArrowRight>
            </StyledSnakeArrowsWrapp>
          </StyledSnakeArrowsContainer>
        </>
      ) : (
        <Box>
          <StyledSnakeArrowsWrapper>
            <StyledSnakeBigBtnContainer
              onClick={() => handleButtonClick && handleButtonClick("up")}
            >
              <BigButton>
                <FaCaretUp />
              </BigButton>
            </StyledSnakeBigBtnContainer>
            <StyledSnakeBigBtnLeftWrapp>
              <StyledSnakeBigBtnLeftPosition
                onClick={() => handleButtonClick && handleButtonClick("left")}
              >
                <BigButton>
                  <FaCaretLeft />
                </BigButton>
              </StyledSnakeBigBtnLeftPosition>
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
            </StyledSnakeBigBtnLeftWrapp>
          </StyledSnakeArrowsWrapper>
        </Box>
      )}
    </>
  );
};

export default KeyboardSnake;
