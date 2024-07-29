import { FC } from "react";
import { StyledBigButton } from "./StyledButtons";
import { BigButtonProps } from "../../types";

const BigButton: FC<BigButtonProps> = ({ children, myBtnFn, testId }) => {
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
