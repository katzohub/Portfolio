import { FC } from "react";
import { Box } from "@mui/material";
import { GameSnake } from "../components/Home";

const SnakeGame: FC = () => {
  return (
    <Box
      sx={{
        height: "100dvh",
        color: "#fff",
        background: "#dab07a",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <GameSnake isFullWindow={false} />
    </Box>
  );
};

export default SnakeGame;
