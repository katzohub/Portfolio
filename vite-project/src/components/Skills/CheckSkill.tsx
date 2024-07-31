import { FC, ReactNode } from "react";
import { FormControlLabel } from "@mui/material";
import { StyledSkillsCheckbox, StyledSkillsRowLabel } from "./StyledSkills";

interface CheckSkillProps {
  checked: boolean;
  changeFn: (event: React.ChangeEvent<HTMLInputElement>) => void;
  icon: ReactNode;
  name: string;
  testCy: string;
}

const CheckSkill: FC<CheckSkillProps> = ({
  checked,
  changeFn,
  name,
  testCy,
  icon,
}) => {
  return (
    <FormControlLabel
      control={
        <StyledSkillsCheckbox
          checked={checked}
          onChange={changeFn}
          name={name}
        />
      }
      label={
        <StyledSkillsRowLabel
          data-cy={testCy}
          sx={{
            color: checked ? "#fff" : "#6f88a0 ",
          }}
        >
          {icon}
        </StyledSkillsRowLabel>
      }
    />
  );
};

export default CheckSkill;
