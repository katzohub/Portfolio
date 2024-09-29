import { useState, useEffect, FormEvent, SyntheticEvent } from "react";
import { Box, Dialog, DialogContent } from "@mui/material";
import { useIntl } from "react-intl";
import { ToastAlert } from "../components";
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

const LOCAL_STORAGE_KEY = "ratedUrls";

const getRatedUrls = (): string[] => {
  const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored) as string[];
    } catch (error) {
      console.error("Failed to parse ratedUrls from localStorage:", error);
      return [];
    }
  }
  return [];
};

// Add a new URL to ratedUrls in localStorage
const addRatedUrl = (url: string): void => {
  const ratedUrls = getRatedUrls();
  if (!ratedUrls.includes(url)) {
    ratedUrls.push(url);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(ratedUrls));
    console.log(`Added "${url}" to ratedUrls in localStorage.`);
  } else {
    console.log(`"${url}" is already in ratedUrls.`);
  }
};

const RateUs = () => {
  const [open, setOpen] = useState(false);
  const intl = useIntl();
  const theme = useTheme();
  const [message, setMessage] = useState("");
  const [rate, setRate] = useState<number | null>(null);
  const [isRated, setIsRated] = useState(false);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState("");

  const handleCloseSnackBar = () => {
    setOpenSnackBar(false);
  };

  useEffect(() => {
    const currentUrl = window.location.href;
    const ratedUrls = getRatedUrls();
    if (ratedUrls.includes(currentUrl)) {
      setIsRated(true);
    }
  }, []);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleSendFeedBack = async (e: FormEvent) => {
    e.preventDefault();

    if (rate === null) {
      setSnackBarMessage(intl.formatMessage({ id: "rateUs.errorSelectSmile" }));
      setOpenSnackBar(true);
      return;
    }

    const newFeedback = {
      currentUrl: window.location.href,
      message,
      rate,
      timestamp: new Date().toISOString(),
    };

    try {
      await addDoc(collection(db, "rate_us"), newFeedback);
      addRatedUrl(window.location.href);
      setMessage("");
      setRate(null);
      setIsRated(true);
      handleCloseModal();
      setSnackBarMessage(intl.formatMessage({ id: "rateUs.thankYou" }));
      setOpenSnackBar(true);
      console.log(`Feedback submitted for "${window.location.href}".`);
    } catch (err) {
      console.log((err as Error).message);
    }
  };

  function IconContainer(props: IconContainerProps) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
  }

  if (isRated) {
    return null;
  }

  const handleRemoveThisComponent = () => {
    const currentUrl = window.location.href;
    addRatedUrl(currentUrl);
    setIsRated(true);
  };

  return (
    <StyledContainerModal>
      <MotionStyledIconButton
        whileHover={{ y: [0, -5, 5, -5, 5, 0] }}
        transition={{ duration: 0.3 }}
        onClick={handleOpenModal}
        data-cy="open-feedback-modal"
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
          <form onSubmit={handleSendFeedBack}>
            <Box sx={{ "& > legend": { mt: 2 } }}>
              <StyledRating
                name="highlight-selected-only"
                IconContainerComponent={IconContainer}
                getLabelText={(value: number) => customIcons[value].label}
                highlightSelectedOnly
                onChange={(e: SyntheticEvent<Element, Event>, newValue) =>
                  setRate(newValue)
                }
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
            <StyledDialogActions>
              <StyledSubmitFormBtn
                variant="contained"
                color="primary"
                data-cy="close-feedback"
                sx={{ width: "auto" }}
                onClick={handleRemoveThisComponent}
              >
                {intl.formatMessage({ id: "rateUs.dontShow" })}
              </StyledSubmitFormBtn>
              <Box
                sx={{
                  display: "flex",
                  gap: "7.5px",
                }}
              >
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
                >
                  {intl.formatMessage({ id: "rateUs.send" })}
                </StyledSubmitFormBtn>
              </Box>
            </StyledDialogActions>
          </form>
        </DialogContent>
      </Dialog>
      <ToastAlert
        openToast={openSnackBar}
        messageToast={snackBarMessage}
        handleClosedToast={handleCloseSnackBar}
      />
    </StyledContainerModal>
  );
};

export default RateUs;
