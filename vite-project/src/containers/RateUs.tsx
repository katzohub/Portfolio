import { useState, forwardRef, ReactElement, Ref } from "react";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import Slide from "@mui/material/Slide";
import { useIntl } from "react-intl";
import { StyledSubmitFormBtn } from "../components/Contact/StyledContact";
import { styled } from "@mui/material/styles";
import Rating, { IconContainerProps } from "@mui/material/Rating";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import { motion } from "framer-motion";
import { TransitionProps } from "@mui/material/transitions";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement;
  },
  ref: Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MotionStyledIconButton = motion(IconButton);

const RateUs = () => {
  const [open, setOpen] = useState(false);
  const intl = useIntl();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  // TODO: add function send feedback to database
  //   const handleSendFeedBack = () => {};

  const StyledRating = styled(Rating)(({ theme }) => ({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    "& .MuiRating-iconEmpty .MuiSvgIcon-root": {
      color: theme.palette.action.disabled,
      fontSize: "5rem",
    },
    "& .MuiRating-iconHover .MuiSvgIcon-root": {
      fontSize: "5rem",
    },
    "& .MuiRating-iconFilled .MuiSvgIcon-root": {
      fontSize: "5rem",
    },
  }));

  const customIcons: Record<
    number,
    { icon: React.ReactElement; label: string }
  > = {
    1: {
      icon: <SentimentVeryDissatisfiedIcon color="error" />,
      label: "Very Dissatisfied",
    },
    2: {
      icon: <SentimentDissatisfiedIcon color="error" />,
      label: "Dissatisfied",
    },
    3: {
      icon: <SentimentSatisfiedIcon color="warning" />,
      label: "Neutral",
    },
    4: {
      icon: <SentimentSatisfiedAltIcon color="success" />,
      label: "Satisfied",
    },
    5: {
      icon: <SentimentVerySatisfiedIcon color="success" />,
      label: "Very Satisfied",
    },
  };
  function IconContainer(props: IconContainerProps) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
  }
  return (
    <Box
      sx={{ position: "fixed", bottom: "76px", left: "64px", zIndex: "999999" }}
    >
      <MotionStyledIconButton
        whileHover={{ y: [0, -5, 5, -5, 5, 0] }}
        transition={{ duration: 0.3 }}
        onClick={handleClickOpen}
        style={{
          backgroundColor: "#d3a05f",
          color: "white",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            fontSize: "0.85rem",
            fontWeight: "bold",
          }}
        >
          <div>Rate</div>
          <div>Us</div>
        </Box>
      </MotionStyledIconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        PaperProps={{
          sx: {
            backgroundColor: "#dab07a",
          },
        }}
      >
        <DialogTitle
          sx={{ fontSize: "1.15rem", fontWeight: "bold", color: "#fff" }}
        >
          Prosím ohodnoťte tuto časť web stránky od 1 do 5
        </DialogTitle>
        <DialogContent>
          <Box sx={{ "& > legend": { mt: 2 } }}>
            <StyledRating
              name="highlight-selected-only"
              defaultValue={2}
              IconContainerComponent={IconContainer}
              getLabelText={(value: number) => customIcons[value].label}
              highlightSelectedOnly
            />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography component="legend" sx={{ color: "#fff" }}>
                Velmi zle
              </Typography>
              <Typography component="legend" sx={{ color: "#fff" }}>
                Velmi dobre
              </Typography>
            </Box>
          </Box>

          <TextField
            autoFocus
            margin="dense"
            label="Prosím napíš čo sa ti páči alebo čo by si zlepšil."
            type="text"
            fullWidth
            multiline
            rows={4}
            variant="outlined"
          />
        </DialogContent>
        <DialogActions sx={{ padding: "0px 20px 24px 20px" }}>
          <StyledSubmitFormBtn
            variant="contained"
            color="primary"
            data-cy="close-feedback"
            sx={{ width: "auto" }}
            onClick={handleClose}
          >
            Zatvoriť
          </StyledSubmitFormBtn>
          <StyledSubmitFormBtn
            sx={{ width: "auto" }}
            type="submit"
            value="Send"
            variant="contained"
            color="primary"
            data-cy="submit-feedback"
            //  add function send feedback to database
            //  onClick={handleSendFeedback}
          >
            {intl.formatMessage({ id: "contact.submit" })}
          </StyledSubmitFormBtn>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default RateUs;
