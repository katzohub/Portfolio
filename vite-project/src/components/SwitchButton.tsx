import { FC } from "react";

import {
  StyledSwitchBtnContianer,
  StyledSwitchBtnWrapp,
  StyledSwitchLanguage,
} from "./StyledComponents";

type MySwitchProps = {
  trueIcon: JSX.Element;
  falseIcon: JSX.Element;
  condition: boolean;
  toggleSwitch: () => void;
};

const SwitchButton: FC<MySwitchProps> = ({
  trueIcon,
  falseIcon,
  condition,
  toggleSwitch,
}) => {
  return (
    <>
      <StyledSwitchBtnContianer>
        <StyledSwitchBtnWrapp>
          <StyledSwitchLanguage
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
