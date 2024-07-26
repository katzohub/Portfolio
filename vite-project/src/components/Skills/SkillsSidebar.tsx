import { FC, useEffect, useState } from "react";
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
import CheckSkill from "./CheckSkill";
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
import { motion, AnimatePresence } from "framer-motion";

const MotionStyledSkillsRightForm = motion(StyledSkillsRightForm);

const SkillsSidebar: FC<SkillsSidebarProps> = ({
  checkedState,
  handleCheckboxChange,
}) => {
  const intl = useIntl();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  const dataChecked = [
    {
      checked: checkedState.html,
      name: "html",
      testCy: "checkbox-html",
      icon: (
        <>
          <SiHtml5 className="label-icon" />
          HTML
        </>
      ),
    },
    {
      checked: checkedState.css,
      name: "css",
      testCy: "checkbox-css",
      icon: (
        <>
          <SiCss3 className="label-icon" />
          CSS
        </>
      ),
    },
    {
      checked: checkedState.sass,
      name: "sass",
      testCy: "checkbox-scss",
      icon: (
        <>
          <SiSass className="label-icon" />
          SCSS
        </>
      ),
    },
    {
      checked: checkedState.tailwind,
      name: "tailwind",
      testCy: "checkbox-tailwind",
      icon: (
        <>
          <SiTailwindcss className="label-icon" />
          TailWind
        </>
      ),
    },
    {
      checked: checkedState.mui,
      name: "mui",
      testCy: "checkbox-mui",
      icon: (
        <>
          <SiMui className="label-icon" />
          MUI
        </>
      ),
    },
    {
      checked: checkedState.javascript,
      name: "javascript",
      testCy: "checkbox-javascript",
      icon: (
        <>
          <SiJavascript className="label-icon" />
          JavaScript
        </>
      ),
    },
    {
      checked: checkedState.typescript,
      name: "typescript",
      testCy: "checkbox-typescript",
      icon: (
        <>
          <SiTypescript className="label-icon" />
          Typescript
        </>
      ),
    },
    {
      checked: checkedState.php,
      name: "php",
      testCy: "checkbox-php",
      icon: (
        <>
          <SiPhp className="label-icon" />
          PHP
        </>
      ),
    },
    {
      checked: checkedState.react,
      name: "react",
      testCy: "checkbox-react",
      icon: (
        <>
          <SiReact className="label-icon" />
          React
        </>
      ),
    },
    {
      checked: checkedState.firebase,
      name: "firebase",
      testCy: "checkbox-firebase",
      icon: (
        <>
          <SiFirebase className="label-icon" />
          Firebase
        </>
      ),
    },
  ];

  return (
    <AnimatePresence>
      {isReady && (
        <MotionStyledSkillsRightForm
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
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
                data-cy="checkbox-all"
                sx={{
                  color: checkedState.all ? "#fff" : "#607B96",
                }}
              >
                <StyledCategoryIcon fontSize="small" />
                {intl.formatMessage({ id: "project.allCategory" })}
              </StyledSkillsListItem>
            }
          />
          {dataChecked.map(({ checked, name, testCy, icon }, index) => (
            <CheckSkill
              key={index}
              checked={checked}
              changeFn={handleCheckboxChange}
              name={name}
              testCy={testCy}
              icon={icon}
            />
          ))}

          <StyledSkillsBoxDividerTop orientation="vertical" flexItem />
        </MotionStyledSkillsRightForm>
      )}
    </AnimatePresence>
  );
};

export default SkillsSidebar;
