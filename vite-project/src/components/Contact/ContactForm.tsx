import { useState, useEffect, useRef } from "react";
import { Typography, Snackbar, Alert } from "@mui/material";
import {
  StyledTextField,
  StyledContactFormContainer,
  StyledContactFormWrap,
  StyledContactFormDivider,
  StyledSubmitFormBtn,
  StyledFormTextContainer,
  StyledTextGray,
  StyledTextPink,
  StyledTextOrange,
  StyledTextPurple,
  StyledTextContainerMessage,
  StyledTextMessage,
} from "./StyledContact";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { useIntl } from "react-intl";
import { DisplayDataProps } from "../../types";
import { motion } from "framer-motion";

const MotionStyledContactFormWrap = motion(StyledContactFormWrap);
const MotionStyledFormTextContainer = motion(StyledFormTextContainer);

const ContactForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const navigate = useNavigate();

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});
  const [displayData, setDisplayData] = useState<DisplayDataProps>({
    name: "",
    email: "",
    message: "",
    date: "",
  });
  const handleClose = () => {
    setOpenSnackBar(!openSnackBar);
  };
  const intl = useIntl();
  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = `${
      currentDate.toString().split(" ")[0]
    } ${currentDate.getDate()} ${currentDate.toString().split(" ")[1]}`;
    setDisplayData({ name, email, message, date: formattedDate });
  }, [name, email, message]);

  const [isReady, setIsReady] = useState(false);
  const dataEmailJS = {
    servicesId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  };

  useEffect(() => {
    setIsReady(true);
  }, []);
  const validateName = (name: string) => {
    if (!name.trim()) {
      return intl.formatMessage({ id: "valid.name" });
    }
    if (/\d/.test(name)) {
      return intl.formatMessage({ id: "valid.name.number" });
    }
    return "";
  };

  const validateEmail = (email: string) => {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(email)) {
      return intl.formatMessage({ id: "valid.email" });
    }
    return "";
  };

  const validateMessage = (message: string) => {
    if (message.length < 10) {
      return intl.formatMessage({ id: "valid.message" });
    }
    if (message.length > 1000) {
      return intl.formatMessage({ id: "valid.message.maxLegth" });
    }
    return "";
  };
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setName(newName);
    setErrors((prevErrors) => ({ ...prevErrors, name: validateName(newName) }));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setErrors((prevErrors) => ({
      ...prevErrors,
      email: validateEmail(newEmail),
    }));
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMessage = e.target.value;
    setMessage(newMessage);
    setErrors((prevErrors) => ({
      ...prevErrors,
      message: validateMessage(newMessage),
    }));
  };

  const form = useRef() as React.MutableRefObject<HTMLFormElement>;

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const nameError = validateName(name);
    const emailError = validateEmail(email);
    const messageError = validateMessage(message);

    if (nameError || emailError || messageError) {
      setErrors({ name: nameError, email: emailError, message: messageError });
      return;
    }

    emailjs
      .sendForm(dataEmailJS.servicesId, dataEmailJS.templateId, form.current, {
        publicKey: dataEmailJS.publicKey,
      })
      .then(
        () => {
          navigate("/thank-you");
        },
        (error) => {
          setOpenSnackBar(!openSnackBar);
          throw new Error(error.text);
        }
      );
  };
  return (
    <StyledContactFormContainer>
      <Snackbar
        sx={{ zIndex: 999999 }}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={openSnackBar}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {intl.formatMessage({ id: "error.snack" })} <br />
          {intl.formatMessage({ id: "error.snackTwo" })}
        </Alert>
      </Snackbar>
      {isReady && (
        <MotionStyledContactFormWrap
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <form ref={form} onSubmit={sendEmail}>
            <StyledTextField
              name="user_name"
              label={intl.formatMessage({ id: "contact.name" })}
              variant="outlined"
              required
              fullWidth
              margin="normal"
              type="text"
              value={name}
              onChange={handleNameChange}
              error={!!errors.name && name.trim() !== ""}
              helperText={name.trim() !== "" ? errors.name : ""}
              data-cy="name-field"
            />
            <StyledTextField
              type="email"
              name="user_email"
              label={intl.formatMessage({ id: "contact.email" })}
              variant="outlined"
              required
              fullWidth
              margin="normal"
              value={email}
              onChange={handleEmailChange}
              error={!!errors.email && email.trim() !== ""}
              helperText={email.trim() !== "" ? errors.email : ""}
              data-cy="email-field"
            />
            <StyledTextField
              name="message"
              label={intl.formatMessage({ id: "contact.message" })}
              variant="outlined"
              required
              multiline
              rows={4}
              fullWidth
              margin="normal"
              value={message}
              onChange={handleMessageChange}
              error={!!errors.message && message.trim() !== ""}
              helperText={message.trim() !== "" ? errors.message : ""}
              data-cy="message-area"
            />

            <StyledSubmitFormBtn
              type="submit"
              value="Send"
              variant="contained"
              color="primary"
              data-cy="submit-email"
            >
              {intl.formatMessage({ id: "contact.submit" })}
            </StyledSubmitFormBtn>
          </form>
        </MotionStyledContactFormWrap>
      )}
      <StyledContactFormDivider orientation="vertical" flexItem />
      {isReady && (
        <MotionStyledFormTextContainer
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Typography variant="body1">
            <br />
            <StyledTextGray variant="caption">1&nbsp;</StyledTextGray>
            <StyledTextPink variant="caption">const</StyledTextPink>{" "}
            <StyledTextPurple variant="caption">button</StyledTextPurple>{" "}
            <StyledTextPink variant="caption">=</StyledTextPink>{" "}
            <StyledTextPurple variant="caption">
              document.querySelector
            </StyledTextPurple>{" "}
            <StyledTextGray variant="caption">(</StyledTextGray>
            <StyledTextOrange variant="caption">'#sendBtn'</StyledTextOrange>
            <StyledTextGray variant="caption">);</StyledTextGray>
            <br />
            <StyledTextGray variant="caption">2&nbsp;</StyledTextGray>
            <br />
            <StyledTextGray variant="caption">3&nbsp;</StyledTextGray>
            <StyledTextPink variant="caption">const </StyledTextPink>
            <StyledTextPurple variant="caption">message </StyledTextPurple>
            <StyledTextPink variant="caption">= </StyledTextPink>
            <StyledTextGray variant="caption">{`{`}</StyledTextGray>
            <br />
            <StyledTextGray variant="caption">4</StyledTextGray>
            &nbsp;&nbsp;
            <StyledTextPurple variant="caption">Name</StyledTextPurple>
            <StyledTextGray variant="caption">:</StyledTextGray>
            <StyledTextOrange variant="caption">{`"${displayData.name}"`}</StyledTextOrange>
            <br />
            <StyledTextGray variant="caption">5</StyledTextGray>
            &nbsp;&nbsp;
            <StyledTextPurple variant="caption">Email</StyledTextPurple>
            <StyledTextGray variant="caption">:</StyledTextGray>
            <StyledTextOrange variant="caption">{`"${displayData.email}"`}</StyledTextOrange>
            <br />
            <StyledTextContainerMessage>
              <StyledTextGray variant="caption">6</StyledTextGray>
              &nbsp;&nbsp;
              <StyledTextPurple variant="caption">Message</StyledTextPurple>
              <StyledTextGray variant="caption">:</StyledTextGray>
              <StyledTextMessage
                title={`"${displayData.message}"`}
                variant="caption"
              >
                {`"${displayData.message}"`}
              </StyledTextMessage>
            </StyledTextContainerMessage>
            <StyledTextGray variant="caption">7&nbsp;</StyledTextGray>
            <StyledTextGray variant="caption">Date:</StyledTextGray>
            <StyledTextOrange variant="caption">{`"${displayData.date}"`}</StyledTextOrange>
            &nbsp;&nbsp;
            <br />
            <StyledTextGray variant="caption">8&nbsp;</StyledTextGray>
            <StyledTextGray variant="caption">{`}`}</StyledTextGray>
            <br />
            <StyledTextGray variant="caption">9&nbsp;</StyledTextGray>
            <br />
            <StyledTextGray variant="caption">10&nbsp;</StyledTextGray>
            <StyledTextPurple variant="caption">
              button
              <StyledTextGray variant="caption">.</StyledTextGray>
              addEventListener
            </StyledTextPurple>
            <StyledTextGray variant="caption">(</StyledTextGray>
            <StyledTextOrange variant="caption">'click'</StyledTextOrange>
            <StyledTextGray variant="caption">, ()</StyledTextGray>
            <StyledTextPink variant="caption">{` => `}</StyledTextPink>
            <StyledTextGray variant="caption">{`{`}</StyledTextGray>
            <br />
            <StyledTextGray variant="caption">11&nbsp;</StyledTextGray>
            &nbsp;&nbsp;
            <StyledTextPurple variant="caption">
              form<StyledTextGray variant="caption">.</StyledTextGray>send
            </StyledTextPurple>
            <StyledTextGray variant="caption">(</StyledTextGray>
            <StyledTextPurple variant="caption">message</StyledTextPurple>
            <StyledTextGray variant="caption">
              ); <br />
              <StyledTextGray variant="caption">12&nbsp;</StyledTextGray>
              {`}`})
            </StyledTextGray>
            <br />
          </Typography>
        </MotionStyledFormTextContainer>
      )}
    </StyledContactFormContainer>
  );
};
export default ContactForm;
