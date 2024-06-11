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
        color: " #fff",
        overflowX: "hidden",
        overflowY: "auto",
        /* // background-color: #000 !important; */
        fontFamily: "'Fira Code',Mulish,Neucha,Open Sans, monospace",
      },
      "#root": {
        width: "100vw",
        minHeight: "100dvh",
        position: "relative",
        overflow: "hidden",
      },
    }}
  />
);

export default GlobalStyles;
