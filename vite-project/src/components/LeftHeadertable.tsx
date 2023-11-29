import { Grid, Box, Typography } from "@mui/material";
import { FaChevronRight } from "react-icons/fa";
import usePageStyles from "../style";

const LeftHeadertable = () => {
  const classes = usePageStyles();
  return (
    <>
      <Box className={classes.leftHeaderContainer}>
        <div className={classes.leftHeaderGreen}></div>
        <div className={classes.leftHeaderPurple}></div>

        <Grid container direction="column" className={classes.leftHeaderBox}>
          <Box>
            <Typography variant="h3" className={classes.leftHeaderH3}>
              Hi all. I am
            </Typography>
            <Typography variant="h1" className={classes.leftHeaderH1}>
              Tomas Olsiak
            </Typography>
            <Typography variant="h2" className={classes.leftHeaderH2}>
              <FaChevronRight
                style={{ fontSize: "1.5rem", position: "relative", top: "2px" }}
              />{" "}
              Front End Developer
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2" className={classes.leftHeaderP}>
              // complete the game to continue
            </Typography>
            <Typography variant="body2" className={classes.leftHeaderP}>
              // you can also see it on my Github page
            </Typography>
            <Typography variant="body2">
              <span className={classes.leftHeaderSpanOne}>const </span>
              <span className={classes.leftHeaderSpanTwo}>githubLink</span>
              <span className={classes.leftHeaderSpanThree}> = </span>
              <span>
                {" "}
                <a
                  target="_blank"
                  href="https://github.com/katzohub/Game-Seven-App"
                  className={classes.leftHeaderSpanFour}
                >
                  “https://github.com/gameSnake”
                </a>
              </span>
            </Typography>
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default LeftHeadertable;
