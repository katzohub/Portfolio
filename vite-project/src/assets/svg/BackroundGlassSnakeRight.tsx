import { Box } from "@mui/material";

const BackroundGlassSnakeRight = () => {
  return (
    <>
      <Box
        sx={(theme) => ({
          width: 400,
          height: 400,
          transform: "rotate(5.51deg)",
          transformOrigin: "0 0",
          opacity: 0.4,
          position: "absolute",
          background: theme.myColors.colorCircleRight,
          filter: "blur(174px)",
          bottom: -70,
          right: -70,

          zIndex: "-1 !important",
          [theme.breakpoints.down("lg")]: {
            bottom: -55,
            right: -70,
          },
          [theme.breakpoints.down("md")]: {
            width: 300,
            height: 300,
            bottom: -30,
            right: -170,
          },
          [theme.breakpoints.down("sm")]: {
            display: "none",
          },
        })}
      />
    </>
  );
};

export default BackroundGlassSnakeRight;
