import { StyledRow, StyledRowWithin } from "./StyledComponents";
import { TemplateRowProps } from "../types";

const TemplateRow = ({ text, myNumber }: TemplateRowProps) => {
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
