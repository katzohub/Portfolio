import { FC, ReactNode } from "react";
import { Typography } from "@mui/material";

type TemplateRowProps = {
  myNumber: string;
  text: ReactNode;
};

const TemplateRow: FC<TemplateRowProps> = ({ text, myNumber }) => {
  return (
    <>
      {text && (
        <Typography variant="body2" sx={{ display: "flex" }}>
          <Typography
            variant="caption"
            sx={(theme) => ({
              fontSize: "clamp(13px, 1vw, 16px)",
              [theme.breakpoints.down(525)]: {
                display: "none",
              },
            })}
          >
            {myNumber} * &nbsp;{" "}
          </Typography>
          {text}
        </Typography>
      )}
    </>
  );
};

export default TemplateRow;
