import React from "react";
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
          boxShadow: "174px 174px 174px ",
          filter: "blur(174px)",
          bottom: -120,
          right: -70,
          [theme.breakpoints.down("lg")]: {
            bottom: -25,
            right: -70,
          },
          [theme.breakpoints.down("md")]: {
            bottom: 425,
            right: -170,
          },
        })}
      />
    </>
  );
};

export default BackroundGlassSnakeRight;
