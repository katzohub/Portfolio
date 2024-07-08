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
}) => {
  // const classes = usePageStyles();
  // TODO fix code
  return (
    <>
      <Box
        sx={(theme) => ({
          color: theme.myColors.textColorNav,
          fontFamily: "Fira Code",
          fontSize: "18px",
          fontStyle: "normal",
          fontWeight: 450,
          paddingTop: "120px",
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

        <Typography variant="body2">*</Typography>

        <Typography variant="body2">10 * {textNine}</Typography>

        <Typography variant="body2">11 * {textTen}</Typography>

        <Typography variant="body2">12 * {textEleven}</Typography>

        <Typography variant="body2">13 * {textTwelve}</Typography>

        <Typography variant="body2">*/</Typography>
      </Box>
    </>
  );
};

export default TemplateAbout;
