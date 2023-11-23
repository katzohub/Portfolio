import { Box } from "@mui/material";

interface TextProps {
  textOne: string;
  textTwo: string;
  textThree: string;
  textFour: string;
  textFive: string;
  textSix: string;
  textSeven: string;
  textEight: string;
  textNine: string;
  textTen: string;
  textEleven: string;
  textTwelve: string;
}

const TemplateAbout: React.FC<TextProps> = ({
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
  return (
    <div>
      <Box
        sx={{
          color: "#607B96",
          fontFamily: "Fira Code",
          fontSize: "18px",
          fontStyle: "normal",
          fontWeight: 450,
          position: "relative",
          top: "150px",
          left: "-25px",
          margin: "0 10px",
          width: "100%",
          height: "90vh",
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
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
        <Box pl={5}>
          <p style={{ position: "relative", left: "-10px" }}>/**</p>
          <p>* About me</p>
          <p>* {textOne}</p>
          <p>* {textTwo}</p>
          <p>* {textThree}</p>
          <p>* {textFour}</p>
          <p>* {textFive}</p>
          <p>* {textSix}</p>
          <p>* {textSeven}</p>
          <p>* {textEight}</p>
          <p>*</p>
          <p>* {textNine}</p>
          <p>* {textTen}</p>
          <p>* {textEleven}</p>
          <p>* {textTwelve}</p>
          <p>*/</p>
        </Box>
      </Box>
    </div>
  );
};

export default TemplateAbout;
