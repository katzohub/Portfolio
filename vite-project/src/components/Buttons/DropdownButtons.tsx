import { FC } from "react";
import { StyledListDropDown, StyledListItemContainer } from "./StyledButtons";
import { DropdownButtonsProps } from "../../types";

const DropdownButtons: FC<DropdownButtonsProps> = ({
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
          <StyledListItemContainer disablePadding>
            {mySecondInfo}
          </StyledListItemContainer>
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
