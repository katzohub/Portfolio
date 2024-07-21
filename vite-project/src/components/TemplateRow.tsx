import { FC } from "react";
import { StyledRow, StyledRowWithin } from "./StyledComponents";
import { TemplateRowProps } from "../types";

const TemplateRow: FC<TemplateRowProps> = ({ text, myNumber }) => {
  return (
    <>
      {text && (
        <StyledRow variant="body2">
          <StyledRowWithin variant="caption">
            {myNumber} * &nbsp;{" "}
          </StyledRowWithin>
          {text}
        </StyledRow>
      )}
    </>
  );
};

export default TemplateRow;
