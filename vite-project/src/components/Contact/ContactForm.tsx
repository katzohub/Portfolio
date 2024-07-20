import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
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
} from "./StyledContact";
import { useIntl } from "react-intl";
import { DisplayDataProps } from "../../types";

const ContactForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [displayData, setDisplayData] = useState<DisplayDataProps>({
    name: "",
    email: "",
    message: "",
    date: "",
  });
  const intl = useIntl();
  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = `${
      currentDate.toString().split(" ")[0]
    } ${currentDate.getDate()} ${currentDate.toString().split(" ")[1]}`;
    setDisplayData({ name, email, message, date: formattedDate });
  }, [name, email, message]);

  return (
    <StyledContactFormContainer>
      <StyledContactFormWrap>
        <form
          action="https://formsubmit.co/tomasolsiak1@gmail.com"
          method="POST"
        >
          <StyledTextField
            name="name"
            label={intl.formatMessage({ id: "contact.name" })}
            variant="outlined"
            required
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <StyledTextField
            name="email"
            label={intl.formatMessage({ id: "contact.email" })}
            variant="outlined"
            required
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setMessage(e.target.value)}
          />
          <input
            type="hidden"
            name="_next"
            value={`${window.location.origin}/thank-you`}
          />
          <StyledSubmitFormBtn
            type="submit"
            variant="contained"
            color="primary"
          >
            {intl.formatMessage({ id: "contact.submit" })}
          </StyledSubmitFormBtn>
        </form>
      </StyledContactFormWrap>

      <StyledContactFormDivider orientation="vertical" flexItem />
      <StyledFormTextContainer>
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
          <StyledTextGray variant="caption">6</StyledTextGray>
          &nbsp;&nbsp;
          <StyledTextPurple variant="caption">Message</StyledTextPurple>
          <StyledTextGray variant="caption">:</StyledTextGray>
          <StyledTextOrange variant="caption">{`"${displayData.message}"`}</StyledTextOrange>
          &nbsp;&nbsp;
          <br />
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
      </StyledFormTextContainer>
    </StyledContactFormContainer>
  );
};

export default ContactForm;
