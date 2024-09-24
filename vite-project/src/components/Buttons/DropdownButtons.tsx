import { StyledListDropDown, StyledListItemContainer } from "./StyledButtons";
import { DropdownButtonsProps } from "../../types";

const DropdownButtons = ({
  myFirstInfo,
  mySecondInfo,
  myThirdInfo,
}: DropdownButtonsProps) => {
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
