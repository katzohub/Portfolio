import React, { FC, useState, useEffect, useRef, useCallback } from "react";
import { PointSnake, KeyboardSnake } from "../Snake";
import { useIntl } from "react-intl";
import { MiniCircle } from "../../assets/svg";
import { Box, Typography } from "@mui/material";
import {
  BackroundGlassSnakeLeft,
  BackroundGlassSnakeRight,
} from "../../assets/svg";
import {
  ContainerSnake,
  StyledMiniCircleWrapper,
  StyledSnakeGameArea,
  StyledSnakeScreenLogo,
  StyledStartGameBtn,
  StyledTextStartGame,
  StyledContainerContinue,
  StyledTextContinue,
  StyledContainerStart,
  StyledContainerGameOver,
  StyledTextGameOver,
  StyledContainerStartGame,
  StyledSnakeBoxSetting,
  StyledSnakeArrowTextFirst,
  StyledSnakeArrowTextSecond,
  StyledSnakeContainerFood,
  StyledSnakeFoodLeft,
  StyledSnakePointContainer,
} from "./StyledHome";
import { Coordinate, GameSnakeProps } from "../../types";

const gridSize = 20;
const gridHeight = 34;
const cellSize = 12;

const initialSnake: Coordinate[] = [
  { x: 10, y: 10 },
  { x: 9, y: 10 },
  { x: 8, y: 10 },
  { x: 7, y: 10 },
];
const initialCandy: Coordinate = { x: 5, y: 5 };

const GameSnake: FC<GameSnakeProps> = ({ isFullWindow }) => {
  const [snake, setSnake] = useState<Coordinate[]>(initialSnake);
  const [candy, setCandy] = useState<Coordinate>(initialCandy);
  const [dir, setDir] = useState<Coordinate>({ x: 1, y: 0 });
  const [speed, setSpeed] = useState<number>(20);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [candyCount, setCandyCount] = useState<number>(0);
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [keyPressed, setKeyPressed] = useState<boolean>(false);
  const [hasWon, setHasWon] = useState<boolean>(false);
  const gameLoopRef = useRef<number | null>(null);
  const gameAreaRef = useRef<HTMLDivElement>(null);
  const intl = useIntl();
  const endGame = useCallback(() => {
    if (gameLoopRef.current) clearInterval(gameLoopRef.current);
    setGameOver(true);
  }, []);

  const wellDoneGame = useCallback(() => {
    if (gameLoopRef.current) clearInterval(gameLoopRef.current);
    setHasWon(true);
  }, []);

  const generateNewCandyPosition = useCallback(() => {
    let newCandy: { x: number; y: number };
    do {
      newCandy = {
        x: Math.floor(Math.random() * gridSize),
        y: Math.floor(Math.random() * gridHeight),
      };
    } while (
      snake.some(
        (segment) => segment.x === newCandy.x && segment.y === newCandy.y
      )
    );
    return newCandy;
  }, [snake]);

  const moveSnake = useCallback(() => {
    if (hasWon) return;
    setSnake((oldSnake) => {
      const newSnake = [...oldSnake];
      const newHead = { x: newSnake[0].x + dir.x, y: newSnake[0].y + dir.y };

      if (
        newHead.x < 0 ||
        newHead.x >= gridSize ||
        newHead.y < 0 ||
        newHead.y >= gridHeight
      ) {
        endGame();
        return oldSnake;
      }

      for (const part of newSnake) {
        if (part.x === newHead.x && part.y === newHead.y) {
          endGame();

          return oldSnake;
        }
      }

      newSnake.unshift(newHead);

      if (newHead.x === candy.x && newHead.y === candy.y) {
        setCandy(generateNewCandyPosition());
        setSpeed((oldSpeed) => oldSpeed + 1);
        setCandyCount((prevCount) => prevCount + 0.5);

        if (candyCount + 1 === 10) {
          wellDoneGame();
          return oldSnake;
        }
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
    if (hasWon) return;
  }, [
    dir,
    candy,
    hasWon,
    endGame,
    wellDoneGame,
    candyCount,
    generateNewCandyPosition,
  ]);

  const startGame = () => {
    setSnake(initialSnake);
    setCandy(initialCandy);
    setDir({ x: 1, y: 0 });
    setSpeed(4);
    setGameOver(false);
    setHasWon(false);
    setCandyCount(0);
    setGameStarted(true);
    setKeyPressed(false);
    gameAreaRef.current?.focus();
  };

  useEffect(() => {
    if (gameOver || !gameStarted) return;

    gameLoopRef.current = window.setInterval(moveSnake, 1000 / speed);

    return () => {
      if (gameLoopRef.current) clearInterval(gameLoopRef.current);
    };
  }, [speed, gameOver, moveSnake, gameStarted]);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (keyPressed) return;
    setKeyPressed(true);
    handleDirectionChange(e.key);
  };

  const handleButtonClick = (direction: string) => {
    handleDirectionChange(direction);
  };

  const handleDirectionChange = (input: string) => {
    const newDir = { ...dir };
    switch (input) {
      case "ArrowUp":
      case "up":
        if (dir.y === 0) {
          newDir.y = -1;
          newDir.x = 0;
        }
        break;
      case "ArrowRight":
      case "right":
        if (dir.x === 0) {
          newDir.x = 1;
          newDir.y = 0;
        }
        break;
      case "ArrowDown":
      case "down":
        if (dir.y === 0) {
          newDir.y = 1;
          newDir.x = 0;
        }
        break;
      case "ArrowLeft":
      case "left":
        if (dir.x === 0) {
          newDir.x = -1;
          newDir.y = 0;
        }
        break;
      default:
        break;
    }
    setDir(newDir);
  };
  const handleKeyUp = () => {
    setKeyPressed(false);
  };

  return (
    <ContainerSnake isFullWindow={isFullWindow}>
      <BackroundGlassSnakeLeft />
      <BackroundGlassSnakeRight />
      <StyledMiniCircleWrapper
        sx={{
          position: "absolute",
          top: 5,
          left: 5,
        }}
      >
        <MiniCircle />
      </StyledMiniCircleWrapper>
      <StyledMiniCircleWrapper sx={{ position: "absolute", top: 5, right: 5 }}>
        <MiniCircle />
      </StyledMiniCircleWrapper>
      <StyledMiniCircleWrapper
        sx={{ position: "absolute", bottom: 5, right: 5 }}
      >
        <MiniCircle />
      </StyledMiniCircleWrapper>
      <StyledMiniCircleWrapper
        sx={{ position: "absolute", bottom: 5, left: 5 }}
      >
        <MiniCircle />
      </StyledMiniCircleWrapper>
      <StyledSnakeGameArea
        ref={gameAreaRef}
        sx={{
          position: "relative",
          height: `${gridHeight * cellSize}px`,
          width: `${gridSize * cellSize}px`,
          borderRadius: "8px",
        }}
        tabIndex={0}
        onKeyDown={handleKeyPress}
        onKeyUp={handleKeyUp}
      >
        {!gameStarted && (
          <>
            {!gameStarted && <StyledSnakeScreenLogo />}
            <StyledStartGameBtn variant="text" size="small" onClick={startGame}>
              <StyledTextStartGame variant="h4" fontSize={15}>
                {intl.formatMessage({ id: "home.startGame" })}
              </StyledTextStartGame>
            </StyledStartGameBtn>
          </>
        )}
        {gameStarted && (
          <>
            {snake.map((part, i) => (
              <Box
                key={i}
                sx={(theme) => ({
                  position: "absolute",
                  top: `${part.y * cellSize}px`,
                  left: `${part.x * cellSize}px`,
                  height: `${cellSize}px`,
                  width: `${cellSize}px`,
                  backgroundColor: `rgba(${theme.myColors.colorSnakeLong},${
                    1 - i / snake.length
                  })`,
                })}
              />
            ))}
            <Box
              sx={(theme) => ({
                position: "absolute",
                top: `${candy.y * cellSize}px`,
                left: `${candy.x * cellSize}px`,
                height: `${cellSize}px`,
                width: `${cellSize}px`,
                backgroundColor: theme.myColors.fotnBtnSnake,
                borderRadius: "50%",
              })}
            />
            {hasWon && (
              <>
                <StyledContainerContinue>
                  <StyledTextContinue variant="h4" fontSize={20}>
                    {intl.formatMessage({ id: "home.wellDone" })}
                  </StyledTextContinue>

                  <StyledContainerStart
                    variant="text"
                    color="success"
                    size="small"
                    onClick={startGame}
                  >
                    <Typography
                      variant="body2"
                      fontSize={15}
                      sx={{ color: "#fff" }}
                    >
                      {intl.formatMessage({ id: "home.playAgain" })}
                    </Typography>
                  </StyledContainerStart>
                </StyledContainerContinue>
              </>
            )}
            {gameOver && (
              <StyledContainerGameOver>
                <StyledTextGameOver variant="h4" fontSize={20}>
                  {intl.formatMessage({ id: "home.gameOver" })}
                </StyledTextGameOver>

                <StyledContainerStartGame
                  variant="text"
                  color="success"
                  size="small"
                  onClick={startGame}
                >
                  <Typography
                    variant="body2"
                    fontSize={15}
                    sx={{ color: "#fff" }}
                  >
                    {intl.formatMessage({ id: "home.tryAgain" })}
                  </Typography>
                </StyledContainerStartGame>
              </StyledContainerGameOver>
            )}
          </>
        )}
      </StyledSnakeGameArea>

      <Box>
        <StyledSnakeBoxSetting isFullWindow={isFullWindow}>
          <StyledSnakeArrowTextFirst>
            // {intl.formatMessage({ id: "home.useKeyboard" })}
          </StyledSnakeArrowTextFirst>
          <StyledSnakeArrowTextSecond variant="body2">
            // {intl.formatMessage({ id: "home.usePlay" })}
          </StyledSnakeArrowTextSecond>
          <Box
            sx={(theme) => ({
              position: isFullWindow ? "" : "relative",
              top: isFullWindow ? "" : "215px",
              [theme.breakpoints.down("md")]: {
                top: isFullWindow ? "" : "-65px",
                left: isFullWindow ? "" : "0px",
              },
            })}
          >
            <KeyboardSnake
              isFunctionKeyboard={isFullWindow}
              handleButtonClick={handleButtonClick}
            />
          </Box>
        </StyledSnakeBoxSetting>

        <StyledSnakeContainerFood isFullWindow={isFullWindow}>
          <StyledSnakeFoodLeft variant="body2">
            // {intl.formatMessage({ id: "home.lastFood" })}
          </StyledSnakeFoodLeft>
          <StyledSnakePointContainer>
            {Array.from({ length: 10 }, (_, index) => (
              <PointSnake key={index} index={index} candyCount={candyCount} />
            ))}
          </StyledSnakePointContainer>
        </StyledSnakeContainerFood>
      </Box>
    </ContainerSnake>
  );
};

export default GameSnake;
