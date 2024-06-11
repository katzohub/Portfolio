import { FC } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useIntl } from "react-intl";
import usePageStyles from "../styles/stylePages";

const ThankYou: FC = () => {
  const navigate = useNavigate();
  const classes = usePageStyles();
  const intl = useIntl();
  const handleButtonClick = () => {
    navigate("/contact-me");
  };

  return (
    <Box className={classes.thankYouContainer}>
      <Typography className={classes.thankYouHeading} variant="h2">
        {intl.formatMessage({ id: "thankYou.thankYou" })}
      </Typography>
      <p className={classes.thankYouText}>
        {intl.formatMessage({ id: "thankYou.thankYouText" })}
      </p>
      <Button
        className={classes.thankYouBtn}
        variant="contained"
        sx={{ textTransform: "lowercase" }}
        onClick={handleButtonClick}
      >
        {intl.formatMessage({ id: "thankYou.thankYouBtn" })}
      </Button>
    </Box>
  );
};

export default ThankYou;
