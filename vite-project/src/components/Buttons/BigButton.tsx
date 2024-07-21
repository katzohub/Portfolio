import { FC } from "react";
import { StyledBigButton } from "./StyledButtons";
import { BigButtonProps } from "../../types";

const BigButton: FC<BigButtonProps> = ({ children, myBtnFn }) => {
  return (
    <>
      <StyledBigButton onClick={myBtnFn} className="learn-more">
        {children}
      </StyledBigButton>
    </>
  );
};

export default BigButton;
