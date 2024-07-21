import { FC, ReactNode } from "react";
import { StyledRow, StyledRowWithin } from "./StyledComponents";

type TemplateRowProps = {
  myNumber: string;
  text: ReactNode;
};

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
