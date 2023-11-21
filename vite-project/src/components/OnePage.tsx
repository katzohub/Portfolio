import LeftHeadertable from "./LeftHeadertable";
import GameSnake from "./GameSnake";
import { Box } from "@mui/material";

const OnePage = () => {
  return (
    <>
      <Box
        style={{
          minHeight: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            minHeight: "100vh",
            width: "100vw",
            maxWidth: "1700px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              maxWidth: "600px",
              height: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <LeftHeadertable />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "600px",
            }}
          >
            <GameSnake />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default OnePage;
