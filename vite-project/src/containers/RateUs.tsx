import { useState, FormEvent } from "react";
import { Box, Dialog, DialogContent } from "@mui/material";
import { useIntl } from "react-intl";
import {
  StyledSubmitFormBtn,
  StyledTextField,
} from "../components/Contact/StyledContact";
import {
  StyledRating,
  StyledContainerModal,
  StyledWrapIconBtnText,
  StyledDialogTitle,
  StyledWrapLegend,
  StyledTypographyLegend,
  StyledDialogActions,
  Transition,
  MotionStyledIconButton,
} from "./StyledRateUs";
import { db } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useTheme } from "@mui/material/styles";
import { IconContainerProps } from "@mui/material/Rating";
import { customIcons } from "../constants/dataRateUS";

const RateUs = () => {
  const [open, setOpen] = useState(false);
  const intl = useIntl();
  const theme = useTheme();
  const [currentUrl, setCurrentUrl] = useState("");
  const [message, setMessage] = useState("");
  const [rate, setRate] = useState<number | null>(null);

  const handleOpenModal = () => {
    setCurrentUrl(window.location.href);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleSendFeedBack = async (e: FormEvent) => {
    e.preventDefault();
    const newFeedback = {
      currentUrl,
      message,
      rate,
    };
    try {
      await addDoc(collection(db, "rate_us"), newFeedback);
      setCurrentUrl("");
      setMessage("");
      setRate(null);
      handleCloseModal();
    } catch (err) {
      console.log((err as Error).message);
    }
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
        onClick={handleOpenModal}
      >
        <StyledWrapIconBtnText>
          <div>{intl.formatMessage({ id: "rateUs.rate" })}</div>
          <div>{intl.formatMessage({ id: "rateUs.us" })}</div>
        </StyledWrapIconBtnText>
      </MotionStyledIconButton>
      <Dialog
        open={open}
        onClose={handleCloseModal}
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
              IconContainerComponent={IconContainer}
              getLabelText={(value: number) => customIcons[value].label}
              highlightSelectedOnly
              onChange={(event, newValue) => setRate(newValue)}
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
          <StyledTextField
            name="message"
            label={intl.formatMessage({ id: "rateUs.placeholder" })}
            variant="outlined"
            required
            multiline
            rows={4}
            fullWidth
            margin="normal"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            data-cy="message-feedback"
          />
        </DialogContent>
        <StyledDialogActions>
          <StyledSubmitFormBtn
            variant="contained"
            color="primary"
            data-cy="close-feedback"
            sx={{ width: "auto" }}
            onClick={handleCloseModal}
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
            onClick={handleSendFeedBack}
          >
            {intl.formatMessage({ id: "rateUs.send" })}
          </StyledSubmitFormBtn>
        </StyledDialogActions>
      </Dialog>
    </StyledContainerModal>
  );
};

export default RateUs;
