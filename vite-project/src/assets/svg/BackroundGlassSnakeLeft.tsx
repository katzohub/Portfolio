import { Box } from "@mui/material";

const BackroundGlassSnakeLeft = () => {
  return (
    <>
      <Box
        sx={(theme) => ({
          width: 300,
          height: 300,
          transform: "rotate(-94.30deg)",
          transformOrigin: "0 0",
          opacity: 0.4,
          position: "absolute",
          background: theme.myColors.colorCircleLeft,
          filter: "blur(174px)",
          top: 200,
          left: -90,

          [theme.breakpoints.down("md")]: {
            top: 350,
            left: -100,
          },
          [theme.breakpoints.down("sm")]: {
            top: 500,
            left: 50,
          },
        })}
      />
    </>
  );
};

export default BackroundGlassSnakeLeft;
