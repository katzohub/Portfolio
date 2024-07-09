import { FC } from "react";
import { Box, Typography } from "@mui/material";
// import usePageStyles from "../styles/stylePages";
import { TextProps } from "../types";

const TemplateAbout: FC<TextProps> = ({
  textOne,
  textTwo,
  textThree,
  textFour,
  textFive,
  textSix,
  textSeven,
  textEight,
  textNine,
  textTen,
  textEleven,
  textTwelve,
  textFourteen,
  textFifteen,
  textSixteen,
  textSeventeen,
  textEighteen,
  textNineteen,
  textTwenty,
  textTwentyOne,
  textTwentyTwo,
  textTwentyThree,
  textTwentyFour,
  textTwentyFive,
  textTwentySix,
}) => {
  return (
    <>
      <Box
        sx={(theme) => ({
          color: theme.myColors.textColorNav,
          fontFamily: "Fira Code",
          fontSize: "18px",
          fontStyle: "normal",
          fontWeight: 450,
          "& p": {
            fontSize: "clamp(13px, 1vw, 16px)",
            whiteSpace: "nowrap",
            overflow: "hidden",
          },
        })}
      >
        <Typography variant="body2">/** </Typography>

        <Typography variant="body2">1 * {textOne} </Typography>

        <Typography variant="body2">2 * {textTwo} </Typography>

        <Typography variant="body2">3 * {textThree} </Typography>

        <Typography variant="body2">4 * {textFour} </Typography>

        <Typography variant="body2">5 * {textFive} </Typography>

        <Typography variant="body2">6 * {textSix} </Typography>

        <Typography variant="body2">7 * {textSeven} </Typography>

        <Typography variant="body2">8 * {textEight} </Typography>

        {textNine && <Typography variant="body2">10 * {textNine}</Typography>}
        {textTen && <Typography variant="body2">11 * {textTen}</Typography>}
        {textEleven && (
          <Typography variant="body2">12 * {textEleven}</Typography>
        )}
        {textTwelve && (
          <Typography variant="body2">13 * {textTwelve}</Typography>
        )}
        {textFourteen && (
          <Typography variant="body2">14 * {textFourteen}</Typography>
        )}
        {textFifteen && (
          <Typography variant="body2">15 * {textFifteen}</Typography>
        )}
        {textSixteen && (
          <Typography variant="body2">16 * {textSixteen}</Typography>
        )}
        {textSeventeen && (
          <Typography variant="body2">17 * {textSeventeen}</Typography>
        )}
        {textEighteen && (
          <Typography variant="body2">18 * {textEighteen}</Typography>
        )}
        {textNineteen && (
          <Typography variant="body2">19 * {textNineteen}</Typography>
        )}
        {textTwenty && (
          <Typography variant="body2">20 * {textTwenty}</Typography>
        )}
        {textTwentyOne && (
          <Typography variant="body2">21 * {textTwentyOne}</Typography>
        )}
        {textTwentyTwo && (
          <Typography variant="body2">22 * {textTwentyTwo}</Typography>
        )}
        {textTwentyThree && (
          <Typography variant="body2">23 * {textTwentyThree}</Typography>
        )}
        {textTwentyFour && (
          <Typography variant="body2">24 * {textTwentyFour}</Typography>
        )}
        {textTwentyFive && (
          <Typography variant="body2">25 * {textTwentyFive}</Typography>
        )}
        {textTwentySix && (
          <Typography variant="body2">26 * {textTwentySix}</Typography>
        )}

        <Typography variant="body2">*/</Typography>
      </Box>
    </>
  );
};

export default TemplateAbout;
