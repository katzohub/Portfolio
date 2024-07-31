import { GlobalStyles as MuiGlobalStyles } from "@mui/material";

const GlobalStyles = () => (
  <MuiGlobalStyles
    styles={{
      "*": {
        margin: 0,
        padding: 0,

        boxSizing: "border-box",

        listStyle: "none",
        textDecoration: "none",

        border: "none",
        outline: "none",
      },
      body: {
        width: "100vw",
        minHeight: "100dvh",
        color: "#fff",
        overflowX: "hidden !important",
        overflowY: "auto",
        fontFamily: `"Fira Code","Poppins", sans-serif`,
      },
      "#root": {
        width: "100vw",
        minHeight: "100dvh",
        position: "relative",
        overflow: "hidden",
        overflowX: "hidden !important",
        fontFamily: `"Fira Code","Poppins", sans-serif`,
      },
    }}
  />
);

export default GlobalStyles;
