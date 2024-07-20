import { FC } from "react";
import { StyledBigButton } from "./StyledButtons";

type MyButtonProps = {
  children?: React.ReactNode;
  myBtnFn?: () => void;
};

const BigButton: FC<MyButtonProps> = ({ children, myBtnFn }) => {
  return (
    <>
      <StyledBigButton onClick={myBtnFn} className="learn-more">
        {children}
      </StyledBigButton>
    </>
  );
};

export default BigButton;
