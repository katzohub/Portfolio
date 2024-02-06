import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Divider,
  Button,
  styled,
} from "@mui/material";
import usePageStyles from "../styles/stylePages";
type DisplayDataProps = {
  name: string;
  email: string;
  message: string;
  date: string;
};
const CssTextField = styled(TextField)(({ theme }) => ({
  "& label.Mui-focused": {
    color: theme.myColors.colorFFF,
  },
  "& label": {
    color: theme.myColors.colorFFF,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: theme.myColors.colorInputSend,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: theme.myColors.colorBackInput,
    },
    "&:hover fieldset": {
      borderColor: theme.myColors.colorInputSend,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.myColors.colorInputSend,
    },
    backgroundColor: theme.myColors.colorBackInput,
    boxShadow: theme.myShadow.shadowTextField,
  },
  "& .MuiInputBase-input": {
    color: theme.myColors.colorFFF,
    backgroundColor: theme.myColors.colorBackInput,
  },
}));

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

  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = `${
      currentDate.toString().split(" ")[0]
    } ${currentDate.getDate()} ${currentDate.toString().split(" ")[1]}`;
    setDisplayData({ name, email, message, date: formattedDate });
  }, [name, email, message]);

  const classes = usePageStyles();
  return (
    <Box className={classes.contactFormContainer}>
      <Box className={classes.contactFormWrap}>
        <form
          action="https://formsubmit.co/tomasolsiak1@gmail.com"
          method="POST"
        >
          <CssTextField
            name="name"
            label="Name"
            variant="outlined"
            required
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <CssTextField
            name="email"
            label="Email"
            variant="outlined"
            required
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <CssTextField
            name="message"
            label="Message"
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
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.contactFormBtn}
            sx={{ textTransform: "lowercase" }}
          >
            submit
          </Button>
        </form>
      </Box>

      <Divider
        orientation="vertical"
        flexItem
        className={classes.contactFormDivider}
      />
      <Box className={classes.contactFormBoxText}>
        <Typography variant="body1">
          <br />
          <span className={classes.formTextGrey}>1&nbsp;</span>
          <span className={classes.formTextPink}>const</span>{" "}
          <span className={classes.formTextPurple}>button</span>{" "}
          <span className={classes.formTextPink}>=</span>{" "}
          <span className={classes.formTextPurple}>document.querySelector</span>{" "}
          <span className={classes.formTextGrey}>(</span>
          <span className={classes.formTextOrange}>'#sendBtn'</span>
          <span className={classes.formTextGrey}>);</span>
          <br />
          <span className={classes.formTextGrey}>2&nbsp;</span>
          <br />
          <span className={classes.formTextGrey}>3&nbsp;</span>
          <span className={classes.formTextPink}>const </span>
          <span className={classes.formTextPurple}>message </span>
          <span className={classes.formTextPink}>= </span>
          <span className={classes.formTextGrey}>{`{`}</span>
          <br />
          <span className={classes.formTextGrey}>4</span>
          &nbsp;&nbsp;<span className={classes.formTextPurple}>Name</span>
          <span className={classes.formTextGrey}>:</span>
          <span
            className={classes.formTextOrange}
          >{`"${displayData.name}"`}</span>
          <br />
          <span className={classes.formTextGrey}>5</span>
          &nbsp;&nbsp;
          <span className={classes.formTextPurple}>Email</span>
          <span className={classes.formTextGrey}>:</span>
          <span
            className={classes.formTextOrange}
          >{`"${displayData.email}"`}</span>
          <br />
          <span className={classes.formTextGrey}>6</span>
          &nbsp;&nbsp;
          <span className={classes.formTextPurple}>Message</span>
          <span className={classes.formTextGrey}>:</span>
          <span
            className={classes.formTextOrange}
          >{`"${displayData.message}"`}</span>
          &nbsp;&nbsp;
          <br />
          <span className={classes.formTextGrey}>7&nbsp;</span>
          <span className={classes.formTextGrey}>Date:</span>
          <span
            className={classes.formTextOrange}
          >{`"${displayData.date}"`}</span>
          &nbsp;&nbsp;
          <br />
          <span className={classes.formTextGrey}>8&nbsp;</span>
          <span className={classes.formTextGrey}>{`}`}</span>
          <br />
          <span className={classes.formTextGrey}>9&nbsp;</span>
          <br />
          <span className={classes.formTextGrey}>10&nbsp;</span>
          <span className={classes.formTextPurple}>
            button
            <span className={classes.formTextGrey}>.</span>
            addEventListener
          </span>
          <span className={classes.formTextGrey}>(</span>
          <span className={classes.formTextOrange}>'click'</span>
          <span className={classes.formTextGrey}>, ()</span>
          <span className={classes.formTextPink}>{` => `}</span>
          <span className={classes.formTextGrey}>{`{`}</span>
          <br />
          <span className={classes.formTextGrey}>11&nbsp;</span>
          &nbsp;&nbsp;
          <span className={classes.formTextPurple}>
            form<span className={classes.formTextGrey}>.</span>send
          </span>
          <span className={classes.formTextGrey}>(</span>
          <span className={classes.formTextPurple}>message</span>
          <span className={classes.formTextGrey}>
            ); <br />
            <span className={classes.formTextGrey}>12&nbsp;</span>
            {`}`})
          </span>
          <br />
        </Typography>
      </Box>
    </Box>
  );
};

export default ContactForm;
