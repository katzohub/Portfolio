import { FC } from "react";
import { Box } from "@mui/material";
import { useIntl } from "react-intl";
import usePageStyles from "../styles/stylePages";
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
  textHelp,
  textNine,
  textTen,
  textEleven,
  textTwelve,
}) => {
  const intl = useIntl();
  const classes = usePageStyles();
  return (
    <>
      <Box className={classes.tempAboutText}>
        <Box width={10} display="flex" flexDirection="column" alignItems="end">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
          <p>11</p>
          <p>12</p>
          <p>13</p>
          <p>14</p>
          <p>15</p>
          <p>16</p>
        </Box>
        <Box className={classes.tempAboutContainerText}>
          <p className={classes.tempAboutNumber}>/**</p>
          <p>* {intl.formatMessage({ id: "about.aboutTitleCard" })}</p>
          <p>* {textOne}</p>
          <p>* {textTwo}</p>
          <p>* {textThree}</p>
          <p>* {textFour}</p>
          <p>* {textFive}</p>
          <p>* {textSix}</p>
          <p>* {textSeven}</p>
          <p>* {textEight}</p>
          <p>{textHelp}</p>
          <p>* {textNine}</p>
          <p>* {textTen}</p>
          <p>* {textEleven}</p>
          <p>* {textTwelve}</p>
          <p>*/</p>
        </Box>
      </Box>
    </>
  );
};

export default TemplateAbout;
