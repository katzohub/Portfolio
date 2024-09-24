import { StyledBigButton } from "./StyledButtons";
import { BigButtonProps } from "../../types";

const BigButton = ({ children, myBtnFn, testId }: BigButtonProps) => {
  return (
    <>
      <StyledBigButton
        onClick={myBtnFn}
        className="learn-more"
        data-cy={testId}
      >
        {children}
      </StyledBigButton>
    </>
  );
};

export default BigButton;
