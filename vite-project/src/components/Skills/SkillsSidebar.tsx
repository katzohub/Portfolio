import { FC } from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Divider,
  FormGroup,
} from "@mui/material";
import { SiHtml5, SiCss3, SiSass, SiTailwindcss, SiMui } from "react-icons/si";
import {
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiReact,
  SiFirebase,
} from "react-icons/si";
import { CheckedStateProps } from "../../types";
import CategoryIcon from "@mui/icons-material/Category";
import { useIntl } from "react-intl";
import usePageStyles from "../../styles/stylePages";

type SkillsSidebarProps = {
  checkedState: CheckedStateProps;
  handleCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SkillsSidebar: FC<SkillsSidebarProps> = ({
  checkedState,
  handleCheckboxChange,
}) => {
  const classes = usePageStyles();
  const intl = useIntl();

  return (
    <>
      <FormGroup className={classes.projectRightForm}>
        <FormControlLabel
          className={classes.projectLabel}
          control={
            <Checkbox
              checked={checkedState.all}
              onChange={handleCheckboxChange}
              name="all"
              className={classes.projectCheckBox}
            />
          }
          label={
            <Box
              sx={{
                color: checkedState.all ? "#fff" : "#607B96",
              }}
              className={classes.projectHoverBox}
            >
              <CategoryIcon
                fontSize="small"
                className={classes.projectCategory}
              />
              {intl.formatMessage({ id: "project.allCategory" })}
            </Box>
          }
        />

        <FormControlLabel
          control={
            <Checkbox
              className={classes.projectCheckBox}
              checked={checkedState.html}
              onChange={handleCheckboxChange}
              name="html"
            />
          }
          label={
            <Box
              sx={{
                color: checkedState.html ? "#fff" : "#607B96",
              }}
              className={classes.projectHoverBox}
            >
              <SiHtml5 className={classes.projectCategory} />
              HTML
            </Box>
          }
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={checkedState.css}
              onChange={handleCheckboxChange}
              name="css"
              className={classes.projectCheckBox}
            />
          }
          label={
            <Box
              sx={{
                color: checkedState.css ? "#fff" : "#607B96",
              }}
              className={classes.projectHoverBox}
            >
              <SiCss3 className={classes.projectCategory} />
              CSS
            </Box>
          }
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={checkedState.sass}
              onChange={handleCheckboxChange}
              name="sass"
              className={classes.projectCheckBox}
            />
          }
          label={
            <Box
              sx={{
                color: checkedState.sass ? "#fff" : "#607B96",
              }}
              className={classes.projectHoverBox}
            >
              <SiSass className={classes.projectCategory} />
              SCSS
            </Box>
          }
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={checkedState.tailwind}
              onChange={handleCheckboxChange}
              name="tailwind"
              className={classes.projectCheckBox}
            />
          }
          label={
            <Box
              sx={{
                color: checkedState.tailwind ? "#fff" : "#607B96",
              }}
              className={classes.projectHoverBox}
            >
              <SiTailwindcss className={classes.projectCategory} />
              TailWind
            </Box>
          }
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={checkedState.mui}
              onChange={handleCheckboxChange}
              name="mui"
              className={classes.projectCheckBox}
            />
          }
          label={
            <Box
              sx={{
                color: checkedState.mui ? "#fff" : "#607B96",
              }}
              className={classes.projectHoverBox}
            >
              <SiMui className={classes.projectCategory} />
              MUI
            </Box>
          }
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={checkedState.javascript}
              onChange={handleCheckboxChange}
              name="javascript"
              className={classes.projectCheckBox}
            />
          }
          label={
            <Box
              sx={{
                color: checkedState.javascript ? "#fff" : "#607B96",
              }}
              className={classes.projectHoverBox}
            >
              <SiJavascript className={classes.projectCategory} />
              JavaScript
            </Box>
          }
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={checkedState.typescript}
              onChange={handleCheckboxChange}
              name="typescript"
              className={classes.projectCheckBox}
            />
          }
          label={
            <Box
              sx={{
                color: checkedState.typescript ? "#fff" : "#607B96",
              }}
              className={classes.projectHoverBox}
            >
              <SiTypescript className={classes.projectCategory} />
              Typescript
            </Box>
          }
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={checkedState.php}
              onChange={handleCheckboxChange}
              name="php"
              className={classes.projectCheckBox}
            />
          }
          label={
            <Box
              sx={{
                color: checkedState.php ? "#fff" : "#607B96",
              }}
              className={classes.projectHoverBox}
            >
              <SiPhp className={classes.projectCategory} />
              PHP
            </Box>
          }
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={checkedState.react}
              onChange={handleCheckboxChange}
              name="react"
              className={classes.projectCheckBox}
            />
          }
          label={
            <Box
              sx={{
                color: checkedState.react ? "#fff" : "#607B96",
              }}
              className={classes.projectHoverBox}
            >
              <SiReact className={classes.projectCategory} />
              React
            </Box>
          }
        />

        {/* Firebase Checkbox */}
        <FormControlLabel
          control={
            <Checkbox
              checked={checkedState.firebase}
              onChange={handleCheckboxChange}
              name="firebase"
              className={classes.projectCheckBox}
            />
          }
          label={
            <Box
              sx={{
                color: checkedState.firebase ? "#fff" : "#607B96",
              }}
              className={classes.projectHoverBox}
            >
              <SiFirebase className={classes.projectCategory} />
              Firebase
            </Box>
          }
        />
        <Divider
          orientation="vertical"
          flexItem
          className={classes.skillBoxDividerTop}
        />
      </FormGroup>
    </>
  );
};

export default SkillsSidebar;
