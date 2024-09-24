import {
  StyledSwitchBtnContianer,
  StyledSwitchBtnWrapp,
  StyledSwitchLanguage,
} from "./StyledComponents";
import { SwitchButtonProps } from "../types";

const SwitchButton = ({
  trueIcon,
  falseIcon,
  condition,
  toggleSwitch,
  myLabelName,
}: SwitchButtonProps) => {
  return (
    <>
      <StyledSwitchBtnContianer>
        <StyledSwitchBtnWrapp>
          <StyledSwitchLanguage
            inputProps={{ "aria-label": myLabelName }}
            icon={trueIcon}
            checkedIcon={falseIcon}
            checked={condition}
            onChange={toggleSwitch}
          />
        </StyledSwitchBtnWrapp>
      </StyledSwitchBtnContianer>
    </>
  );
};

export default SwitchButton;
