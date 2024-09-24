import { useState, forwardRef, ReactElement, Ref } from "react";
import { Box, Dialog, DialogContent, TextField } from "@mui/material";
import Slide from "@mui/material/Slide";
import { useIntl } from "react-intl";
import { StyledSubmitFormBtn } from "../components/Contact/StyledContact";
import {
  StyledRating,
  StyledContainerModal,
  StyledIconButton,
  StyledWrapIconBtnText,
  StyledDialogTitle,
  StyledWrapLegend,
  StyledTypographyLegend,
  StyledDialogActions,
} from "./StyledRateUs";
import { useTheme } from "@mui/material/styles";
import { IconContainerProps } from "@mui/material/Rating";
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

const MotionStyledIconButton = motion(StyledIconButton);

const RateUs = () => {
  const [open, setOpen] = useState(false);
  const intl = useIntl();
  const theme = useTheme(); // Použití useTheme k získání aktuálního tématu

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  // TODO: add function send feedback to database
  //   const handleSendFeedBack = () => {};

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
    <StyledContainerModal>
      <MotionStyledIconButton
        whileHover={{ y: [0, -5, 5, -5, 5, 0] }}
        transition={{ duration: 0.3 }}
        onClick={handleClickOpen}
      >
        <StyledWrapIconBtnText>
          <div>{intl.formatMessage({ id: "rateUs.rate" })}</div>
          <div>{intl.formatMessage({ id: "rateUs.us" })}</div>
        </StyledWrapIconBtnText>
      </MotionStyledIconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        PaperProps={{
          sx: {
            backgroundColor: `${theme.myColors.generalBackground} !important`,
          },
        }}
      >
        <StyledDialogTitle>
          {intl.formatMessage({ id: "rateUs.name.modal" })}
        </StyledDialogTitle>
        <DialogContent>
          <Box sx={{ "& > legend": { mt: 2 } }}>
            <StyledRating
              name="highlight-selected-only"
              defaultValue={2}
              IconContainerComponent={IconContainer}
              getLabelText={(value: number) => customIcons[value].label}
              highlightSelectedOnly
            />
            <StyledWrapLegend>
              <StyledTypographyLegend>
                {intl.formatMessage({ id: "rateUs.very.bad" })}
              </StyledTypographyLegend>
              <StyledTypographyLegend>
                {intl.formatMessage({ id: "rateUs.very.good" })}
              </StyledTypographyLegend>
            </StyledWrapLegend>
          </Box>

          <TextField
            autoFocus
            margin="dense"
            label={intl.formatMessage({ id: "rateUs.placeholder" })}
            type="text"
            fullWidth
            multiline
            rows={4}
            variant="outlined"
          />
        </DialogContent>
        <StyledDialogActions>
          <StyledSubmitFormBtn
            variant="contained"
            color="primary"
            data-cy="close-feedback"
            sx={{ width: "auto" }}
            onClick={handleClose}
          >
            {intl.formatMessage({ id: "rateUs.close.modal" })}
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
            {intl.formatMessage({ id: "rateUs.send" })}
          </StyledSubmitFormBtn>
        </StyledDialogActions>
      </Dialog>
    </StyledContainerModal>
  );
};

export default RateUs;
