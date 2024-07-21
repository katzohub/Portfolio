import { FC } from "react";
import { FormControlLabel } from "@mui/material";
import {
  StyledSkillsRightForm,
  StyledSkillsLabel,
  StyledSkillsListItem,
  StyledSkillsCheckbox,
  StyledCategoryIcon,
  StyledSkillsRowLabel,
  StyledSkillsBoxDividerTop,
} from "./StyledSkills";
import { SiHtml5, SiCss3, SiSass, SiTailwindcss, SiMui } from "react-icons/si";
import {
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiReact,
  SiFirebase,
} from "react-icons/si";
import { SkillsSidebarProps } from "../../types";
import { useIntl } from "react-intl";

const SkillsSidebar: FC<SkillsSidebarProps> = ({
  checkedState,
  handleCheckboxChange,
}) => {
  const intl = useIntl();

  return (
    <>
      <StyledSkillsRightForm>
        <StyledSkillsLabel
          control={
            <StyledSkillsCheckbox
              checked={checkedState.all}
              onChange={handleCheckboxChange}
              name="all"
            />
          }
          label={
            <StyledSkillsListItem
              sx={{
                color: checkedState.all ? "#fff" : "#607B96",
              }}
            >
              <StyledCategoryIcon fontSize="small" />
              {intl.formatMessage({ id: "project.allCategory" })}
            </StyledSkillsListItem>
          }
        />

        <FormControlLabel
          control={
            <StyledSkillsCheckbox
              checked={checkedState.html}
              onChange={handleCheckboxChange}
              name="html"
            />
          }
          label={
            <StyledSkillsRowLabel
              sx={{
                color: checkedState.html ? "#fff" : "#607B96",
              }}
            >
              <SiHtml5 className="label-icon" />
              HTML
            </StyledSkillsRowLabel>
          }
        />

        <FormControlLabel
          control={
            <StyledSkillsCheckbox
              checked={checkedState.css}
              onChange={handleCheckboxChange}
              name="css"
            />
          }
          label={
            <StyledSkillsRowLabel
              sx={{
                color: checkedState.css ? "#fff" : "#607B96",
              }}
            >
              <SiCss3 className="label-icon" />
              CSS
            </StyledSkillsRowLabel>
          }
        />

        <FormControlLabel
          control={
            <StyledSkillsCheckbox
              checked={checkedState.sass}
              onChange={handleCheckboxChange}
              name="sass"
            />
          }
          label={
            <StyledSkillsRowLabel
              sx={{
                color: checkedState.sass ? "#fff" : "#607B96",
              }}
            >
              <SiSass className="label-icon" />
              SCSS
            </StyledSkillsRowLabel>
          }
        />

        <FormControlLabel
          control={
            <StyledSkillsCheckbox
              checked={checkedState.tailwind}
              onChange={handleCheckboxChange}
              name="tailwind"
            />
          }
          label={
            <StyledSkillsRowLabel
              sx={{
                color: checkedState.tailwind ? "#fff" : "#607B96",
              }}
            >
              <SiTailwindcss className="label-icon" />
              TailWind
            </StyledSkillsRowLabel>
          }
        />

        <FormControlLabel
          control={
            <StyledSkillsCheckbox
              checked={checkedState.mui}
              onChange={handleCheckboxChange}
              name="mui"
            />
          }
          label={
            <StyledSkillsRowLabel
              sx={{
                color: checkedState.mui ? "#fff" : "#607B96",
              }}
            >
              <SiMui className="label-icon" />
              MUI
            </StyledSkillsRowLabel>
          }
        />

        <FormControlLabel
          control={
            <StyledSkillsCheckbox
              checked={checkedState.javascript}
              onChange={handleCheckboxChange}
              name="javascript"
            />
          }
          label={
            <StyledSkillsRowLabel
              sx={{
                color: checkedState.javascript ? "#fff" : "#607B96",
              }}
            >
              <SiJavascript className="label-icon" />
              JavaScript
            </StyledSkillsRowLabel>
          }
        />

        <FormControlLabel
          control={
            <StyledSkillsCheckbox
              checked={checkedState.typescript}
              onChange={handleCheckboxChange}
              name="typescript"
            />
          }
          label={
            <StyledSkillsRowLabel
              sx={{
                color: checkedState.typescript ? "#fff" : "#607B96",
              }}
            >
              <SiTypescript className="label-icon" />
              Typescript
            </StyledSkillsRowLabel>
          }
        />

        <FormControlLabel
          control={
            <StyledSkillsCheckbox
              checked={checkedState.php}
              onChange={handleCheckboxChange}
              name="php"
            />
          }
          label={
            <StyledSkillsRowLabel
              sx={{
                color: checkedState.php ? "#fff" : "#607B96",
              }}
            >
              <SiPhp className="label-icon" />
              PHP
            </StyledSkillsRowLabel>
          }
        />

        <FormControlLabel
          control={
            <StyledSkillsCheckbox
              checked={checkedState.react}
              onChange={handleCheckboxChange}
              name="react"
            />
          }
          label={
            <StyledSkillsRowLabel
              sx={{
                color: checkedState.react ? "#fff" : "#607B96",
              }}
            >
              <SiReact className="label-icon" />
              React
            </StyledSkillsRowLabel>
          }
        />

        {/* Firebase Checkbox */}
        <FormControlLabel
          control={
            <StyledSkillsCheckbox
              checked={checkedState.firebase}
              onChange={handleCheckboxChange}
              name="firebase"
            />
          }
          label={
            <StyledSkillsRowLabel
              sx={{
                color: checkedState.firebase ? "#fff" : "#607B96",
              }}
            >
              <SiFirebase className="label-icon" />
              Firebase
            </StyledSkillsRowLabel>
          }
        />

        <StyledSkillsBoxDividerTop orientation="vertical" flexItem />
      </StyledSkillsRightForm>
    </>
  );
};

export default SkillsSidebar;
