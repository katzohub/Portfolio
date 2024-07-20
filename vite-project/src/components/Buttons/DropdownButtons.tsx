import { FC, ReactNode } from "react";
import { StyledListDropDown, StyledListItemContainer } from "./StyledButtons";

type LeftContactProps = {
  myFirstInfo: ReactNode;
  mySecondInfo: ReactNode;
  myThirdInfo?: ReactNode;
};

const DropdownButtons: FC<LeftContactProps> = ({
  myFirstInfo,
  mySecondInfo,
  myThirdInfo,
}) => {
  return (
    <>
      <nav aria-label="main mailbox folders">
        <StyledListDropDown>
          <StyledListItemContainer disablePadding>
            {myFirstInfo}
          </StyledListItemContainer>
          <StyledListItemContainer>{mySecondInfo}</StyledListItemContainer>
          {myThirdInfo && (
            <StyledListItemContainer disablePadding>
              {myThirdInfo}
            </StyledListItemContainer>
          )}
        </StyledListDropDown>
      </nav>
    </>
  );
};

export default DropdownButtons;
