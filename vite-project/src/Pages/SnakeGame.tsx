import React from "react";
import { Box } from "@mui/material";
import { GameSnake } from "../components/";

const SnakeGame = () => {
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
      <GameSnake />
    </Box>
  );
};

export default SnakeGame;
