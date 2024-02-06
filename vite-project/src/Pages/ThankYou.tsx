import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import usePageStyles from "../styles/stylePages";

const ThankYou = () => {
  const navigate = useNavigate();
  const classes = usePageStyles();

  const handleButtonClick = () => {
    navigate("/contact-me");
  };

  return (
    <Box className={classes.thankYouContainer}>
      <Typography className={classes.thankYouHeading} variant="h2">
        Thank you! 🤘
      </Typography>
      <p className={classes.thankYouText}>
        Your message has been accepted. You will recieve answer really soon!
      </p>
      <Button
        className={classes.thankYouBtn}
        variant="contained"
        sx={{ textTransform: "lowercase" }}
        onClick={handleButtonClick}
      >
        send-new-message
      </Button>
    </Box>
  );
};

export default ThankYou;
