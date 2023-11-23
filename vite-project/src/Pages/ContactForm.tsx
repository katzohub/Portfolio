import { useState, useEffect } from "react";
import { Box, Typography, TextField, Button, styled } from "@mui/material";
import usePageStyles from "../stylePages";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#607B96",
  },
  "& label": {
    color: "#607B96",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#607B96",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#607B96",
    },
    "&:hover fieldset": {
      borderColor: "#607B96",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#607B96",
      boxShadow: "0px 0px 0px 2px rgba(96, 123, 150, 0.30)",
    },
    backgroundColor: "#011221",
  },
  "& .MuiInputBase-input": {
    color: "#607B96", // Farba textu v TextFielde
  },
});

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [displayData, setDisplayData] = useState({
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
    <Box
      sx={{
        position: "relative",
        top: "150px",
        margin: "0 10px",
        width: "100%",
        height: "90vh",
        display: "flex",
        alignItems: "start",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: 2,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "500px",
        }}
      >
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
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              width: "50%",
              height: "40px",
              marginTop: 2,
              color: "#FFF",
              textAlign: "right",
              fontFamily: "Fira Code",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 450,
              lineHeight: "normal",
              borderRadius: "8px",
              background: "#1C2B3A",
              textTransform: "lowercase",
              "&:hover": {
                background: "#1C2B3A",
              },
            }}
          >
            submit-message
          </Button>
        </form>
      </Box>

      <Box
        sx={{
          maxWidth: "600px",
          color: "white",
          padding: 2,
          height: "100vh",
          borderLeft: "1px solid black",
        }}
      >
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
          <span className={classes.formTextPink}>const</span>
          <span className={classes.formTextPurple}>message</span>
          <span className={classes.formTextPink}>=</span>
          <span className={classes.formTextGrey}>{`{`}</span>
          <br />
          <span className={classes.formTextGrey}>4</span>
          &nbsp;&nbsp;<span className={classes.formTextPurple}>Name</span>
          <span className={classes.formTextGrey}>:</span>
          <span
            className={classes.formTextOrange}
          >{`${displayData.name}`}</span>
          <br />
          <span className={classes.formTextGrey}>5</span>
          &nbsp;&nbsp;
          <span className={classes.formTextPurple}>Email</span>
          <span className={classes.formTextGrey}>:</span>
          <span
            className={classes.formTextOrange}
          >{` ${displayData.email}`}</span>
          <br />
          <span className={classes.formTextGrey}>6</span>
          &nbsp;&nbsp;
          <span className={classes.formTextPurple}>Message</span>
          <span className={classes.formTextGrey}>:</span>
          <span
            className={classes.formTextOrange}
          >{` ${displayData.message}`}</span>
          &nbsp;&nbsp;
          <br />
          <span className={classes.formTextGrey}>7&nbsp;</span>
          <span className={classes.formTextGrey}>Date:</span>
          <span
            className={classes.formTextOrange}
          >{`${displayData.date}`}</span>
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
          <span className={classes.formTextPink}>{`=>`}</span>
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
