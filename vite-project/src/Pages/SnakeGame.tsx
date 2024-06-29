import { FC } from "react";
import { Box } from "@mui/material";
import { GameSnake } from "../components/";

const SnakeGame: FC = () => {
  return (
    <Box
      sx={{
        padding: "56px 30px",
        height: "100vh",
        color: "#fff",
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
