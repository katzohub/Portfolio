import { FC } from "react";
import { Typography } from "@mui/material";
import { StyledAboutTemplateContainer } from "./StyledAbout";
import { TemplateRow } from "..";
import { TextProps } from "../../types";

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
  textThirteen,
  textTwentyOne,
  textTwentyTwo,
  textTwentyThree,
  textTwentyFour,
  textTwentyFive,
  textTwentySix,
}) => {
  return (
    <>
      <StyledAboutTemplateContainer>
        <Typography variant="body2">/** </Typography>
        <TemplateRow myNumber="1" text={textOne} />
        <TemplateRow myNumber="2" text={textTwo} />
        <TemplateRow myNumber="3" text={textThree} />
        <TemplateRow myNumber="4" text={textFour} />
        <TemplateRow myNumber="5" text={textFive} />
        <TemplateRow myNumber="6" text={textSix} />
        <TemplateRow myNumber="7" text={textSeven} />
        <TemplateRow myNumber="8" text={textEight} />
        <TemplateRow myNumber="9" text={textNine} />
        <TemplateRow myNumber="10" text={textTen} />
        <TemplateRow myNumber="11" text={textEleven} />
        <TemplateRow myNumber="12" text={textTwelve} />
        <TemplateRow myNumber="13" text={textThirteen} />
        <TemplateRow myNumber="14" text={textFourteen} />
        <TemplateRow myNumber="15" text={textFifteen} />
        <TemplateRow myNumber="16" text={textSixteen} />
        <TemplateRow myNumber="17" text={textSeventeen} />
        <TemplateRow myNumber="18" text={textEighteen} />
        <TemplateRow myNumber="19" text={textNineteen} />
        <TemplateRow myNumber="20" text={textTwenty} />
        <TemplateRow myNumber="21" text={textTwentyOne} />
        <TemplateRow myNumber="22" text={textTwentyTwo} />
        <TemplateRow myNumber="23" text={textTwentyThree} />
        <TemplateRow myNumber="24" text={textTwentyFour} />
        <TemplateRow myNumber="25" text={textTwentyFive} />
        <TemplateRow myNumber="26" text={textTwentySix} />
        <Typography variant="body2">*/</Typography>
      </StyledAboutTemplateContainer>
    </>
  );
};

export default TemplateAbout;
