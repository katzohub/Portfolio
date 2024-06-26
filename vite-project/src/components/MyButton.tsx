import { FC } from "react";
import { Button } from "@mui/material";
import { useIntl } from "react-intl";

type MyButtonProps = {
  text: string;
};

const MyButton: FC<MyButtonProps> = ({ text }) => {
  const intl = useIntl();
  return (
    <>
      <Button
        disableRipple={false}
        variant="text"
        className="learn-more"
        sx={(theme) => ({
          position: "relative",
          top: "20px",
          display: "inline-block",
          cursor: "pointer",
          outline: "none",
          border: 0,
          verticalAlign: "middle",
          textDecoration: "none",
          fontSize: "inherit",
          fontFamily: "inherit",

          "&.learn-more": {
            fontWeight: 600,
            color: theme.myColors.textColorNav,
            textTransform: "uppercase",
            padding: "1.25em 2em",
            background: theme.myColors.generalBackground,

            border: `2px solid ${theme.myColors.colorInputSend}`,
            borderRadius: "0.75em",
            transformStyle: "preserve-3d",
            transition:
              "transform 150ms cubic-bezier(0, 0, 0.58, 1), background 150ms cubic-bezier(0, 0, 0.58, 1)",
            "&::before": {
              position: "absolute",
              content: '""',
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: theme.myColors.colorInputSend,
              borderRadius: "inherit",
              boxShadow: `0 0 0 2px ${theme.myColors.colorInputSend}, 0 0.625em 0 0 transparent`,
              transform: "translate3d(0, 0.75em, -1em)",
              transition:
                "transform 150ms cubic-bezier(0, 0, 0.58, 1), box-shadow 150ms cubic-bezier(0, 0, 0.58, 1)",
            },
            "&:hover": {
              transform: "translate(0, 0.25em)",
              color: `${theme.myColors.whiteColor} !important`,
              "&::before": {
                boxShadow: `0 0 0 2px ${theme.myColors.colorInputSend}, 0 0.5em 0 0 transparent`,
                transform: "translate3d(0, 0.5em, -1em)",
              },
            },
            "&:active": {
              background: theme.myColors.colorInputSend,
              transform: "translate(0em, 0.75em)",
              "&::before": {
                boxShadow: `0 0 0 2px ${theme.myColors.colorInputSend}, 0 0 ${theme.myColors.colorInputSend}`,
                transform: "translate3d(0, 0, -1em)",
              },
            },
          },
        })}
      >
        {intl.formatMessage({ id: text })}
      </Button>
    </>
  );
};

export default MyButton;
