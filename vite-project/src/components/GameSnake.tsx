import React, { FC, useState, useEffect, useRef, useCallback } from "react";
import PointSnake from "./PointSnake";
import { useIntl } from "react-intl";
// import Green from "../assets/img/boobleBackground/Green.png";
// import Blue from "../assets/img/boobleBackground/Blue.png";
import KeyboardSnake from "./KeyboardSnake";
import MiniCircle from "../assets/svg/MiniCircle";
import { Box, Typography, Button } from "@mui/material";
import screenLogo from "../assets/img/screenGame.png";
import usePageStyles from "../styles/style";

const gridSize = 20;
const gridHeight = 34;
const cellSize = 12;
type Coordinate = { x: number; y: number };
const initialSnake: Coordinate[] = [
  { x: 10, y: 10 },
  { x: 9, y: 10 },
  { x: 8, y: 10 },
  { x: 7, y: 10 },
];
const initialCandy: Coordinate = { x: 5, y: 5 };

interface GameSnakeProps {
  isFullWindow: boolean;
}

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
          // endGame();
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
    console.log("clicked id", direction);

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
  const classes = usePageStyles();
  return (
    <div
      className={
        isFullWindow ? classes.snakeContainer : classes.snakeContainerFullWidth
      }
    >
      {/* TODO Canva redesign and change color */}
      {/* <img className={classes.snakeBackEffectPurple} src={Green} alt="" />
      <img className={classes.snakeBackEffectGreen} src={Blue} alt="" /> */}
      <div style={{ position: "absolute", top: 5, left: 5 }}>
        <MiniCircle />
      </div>
      <div style={{ position: "absolute", top: 5, right: 5 }}>
        <MiniCircle />
      </div>
      <div style={{ position: "absolute", bottom: 5, right: 5 }}>
        <MiniCircle />
      </div>
      <div style={{ position: "absolute", bottom: 5, left: 5 }}>
        <MiniCircle />
      </div>
      <Box
        ref={gameAreaRef}
        sx={{
          position: "relative",
          height: `${gridHeight * cellSize}px`,
          width: `${gridSize * cellSize}px`,
          borderRadius: "8px",
          background: "rgba(1, 22, 39, 0.84)",
          boxShadow: " 1px 5px 11px 0px rgba(2, 18, 27, 0.71) inset",
        }}
        className={
          isFullWindow ? classes.snakeGameArea : classes.snakeGameAreaFullWidth
        }
        tabIndex={0}
        onKeyDown={handleKeyPress}
        onKeyUp={handleKeyUp}
      >
        {!gameStarted && (
          <>
            {!gameStarted && (
              <img
                src={screenLogo}
                alt="Game screen logo"
                className={classes.snakeScreenLogo}
              />
            )}
            <Button
              variant="text"
              size="small"
              sx={{
                top: "70%",
                width: "100%",
                display: "flex",
                alignItems: "center",
                color: "#607B96",
                fontFamily: "Fira Code",
                fontStyle: "normal",
                fontWeight: 450,
                lineHeight: "normal",
                cursor: "pointer",
              }}
              onClick={startGame}
            >
              <Typography
                variant="h4"
                fontSize={15}
                sx={{
                  borderRadius: "8px",
                  background: "rgba(1, 22, 39, 0.84)",
                  boxShadow: "1px 5px 11px 0px rgba(2, 18, 27, 0.71) inset ",
                  height: "30px",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#43D9AD",
                  fontFamily: "Fira Code",
                  fontStyle: "normal",
                  fontWeight: 450,
                  lineHeight: "100%",
                }}
              >
                {intl.formatMessage({ id: "home.startGame" })}
              </Typography>
            </Button>
          </>
        )}
        {gameStarted && (
          <>
            {snake.map((part, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  top: `${part.y * cellSize}px`,
                  left: `${part.x * cellSize}px`,
                  height: `${cellSize}px`,
                  width: `${cellSize}px`,
                  backgroundColor: `rgba(0,255,0,${1 - i / snake.length})`,
                }}
              />
            ))}
            <div
              style={{
                position: "absolute",
                top: `${candy.y * cellSize}px`,
                left: `${candy.x * cellSize}px`,
                height: `${cellSize}px`,
                width: `${cellSize}px`,
                backgroundColor: "#00ff00",
                borderRadius: "50%",
              }}
            />
            {hasWon && (
              <>
                <Box
                  sx={{
                    width: "240px",
                    position: "absolute",
                    bottom: 50,
                    left: 0,
                    zIndex: "9",
                  }}
                >
                  <Typography
                    variant="h4"
                    fontSize={20}
                    sx={{
                      borderRadius: "8px",
                      background: "rgba(1, 22, 39, 0.84)",
                      boxShadow:
                        "1px 5px 11px 0px rgba(2, 18, 27, 0.71) inset ",
                      height: "60px",
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#43D9AD",
                      fontFamily: "Fira Code",
                      fontStyle: "normal",
                      fontWeight: 450,
                      lineHeight: "100%",
                    }}
                  >
                    {intl.formatMessage({ id: "home.wellDone" })}
                  </Typography>

                  <Button
                    variant="text"
                    color="success"
                    size="small"
                    sx={{
                      position: "relative",
                      top: "25px",
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      color: "#607B96",
                      fontFamily: "Fira Code",
                      fontStyle: "normal",
                      fontWeight: 450,
                      lineHeight: "normal",
                      cursor: "pointer",
                    }}
                    onClick={startGame}
                  >
                    <Typography variant="body2" fontSize={15}>
                      play-again
                    </Typography>
                  </Button>
                </Box>
              </>
            )}
            {gameOver && (
              <Box
                sx={{
                  width: "240px",
                  position: "absolute",
                  bottom: 50,
                  left: 0,
                  zIndex: "9",
                }}
              >
                <Typography
                  variant="h4"
                  fontSize={20}
                  sx={{
                    borderRadius: "8px",
                    background: "rgba(1, 22, 39, 0.84)",
                    boxShadow: "1px 5px 11px 0px rgba(2, 18, 27, 0.71) inset ",
                    height: "60px",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#43D9AD",
                    fontFamily: "Fira Code",
                    fontStyle: "normal",
                    fontWeight: 450,
                    lineHeight: "100%",
                  }}
                >
                  {intl.formatMessage({ id: "home.gameOver" })}
                </Typography>

                <Button
                  variant="text"
                  color="success"
                  size="small"
                  sx={{
                    position: "relative",
                    top: "25px",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    color: "#607B96",
                    fontFamily: "Fira Code",
                    fontStyle: "normal",
                    fontWeight: 450,
                    lineHeight: "normal",
                    cursor: "pointer",
                  }}
                  onClick={startGame}
                >
                  <Typography variant="body2" fontSize={15}>
                    {intl.formatMessage({ id: "home.tryAgain" })}
                  </Typography>
                </Button>
              </Box>
            )}
          </>
        )}
      </Box>

      <Box>
        <Box
          className={
            isFullWindow
              ? classes.snakeBoxSetting
              : classes.snakeBoxSettingFullWidth
          }
        >
          <Typography
            variant="body2"
            className={
              isFullWindow
                ? classes.snakeArrowTextOne
                : classes.snakeBoxSettingFullWidthFullWidth
            }
          >
            // {intl.formatMessage({ id: "home.useKeyboard" })}
          </Typography>
          <Typography
            variant="body2"
            className={
              isFullWindow
                ? classes.snakeArrowTextTwo
                : classes.snakeArrowTextTwoFullWidth
            }
          >
            // {intl.formatMessage({ id: "home.usePlay" })}
          </Typography>
          <Box
            className={isFullWindow ? "" : classes.containerKeyboardFullWidth}
          >
            <KeyboardSnake
              isFunctionKeyboard={isFullWindow}
              handleButtonClick={handleButtonClick}
            />
          </Box>
        </Box>

        <Box
          className={
            isFullWindow
              ? classes.snakeContainerFood
              : classes.snakeContainerFoodFullWidth
          }
        >
          <Typography variant="body2" className={classes.snakeFoodLeft}>
            // {intl.formatMessage({ id: "home.lastFood" })}
          </Typography>

          {Array.from({ length: 10 }, (_, index) => (
            <PointSnake key={index} index={index} candyCount={candyCount} />
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default GameSnake;
