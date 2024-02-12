import { useState } from "react";
import { useIntl } from "react-intl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import CategoryIcon from "@mui/icons-material/Category";
import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiTailwindcss,
  SiMui,
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiReact,
  SiFirebase,
} from "react-icons/si";
import { Box } from "@mui/material";

import SkillSection from "./SkillSection";
import usePageStyles from "../styles/stylePages";

type DisplayDataProps = {
  all: boolean;
  html: boolean;
  css: boolean;
  sass: boolean;
  tailwind: boolean;
  mui: boolean;
  javascript: boolean;
  typescript: boolean;
  php: boolean;
  react: boolean;
  firebase: boolean;
};

const AlretCheckBox = () => {
  const classes = usePageStyles();
  const intl = useIntl();
  return (
    <>
      <Box className={classes.projectAlert}>
        <h1 className={classes.skillTextAlert}>
          {intl.formatMessage({ id: "project.sorry" })}.
          <br />
          {intl.formatMessage({ id: "project.please" })}
        </h1>
      </Box>
    </>
  );
};

const Projects: React.FC = () => {
  const [checkedState, setCheckedState] = useState<DisplayDataProps>({
    all: true,
    html: false,
    css: false,
    sass: false,
    tailwind: false,
    mui: false,
    javascript: false,
    typescript: false,
    php: false,
    react: false,
    firebase: false,
  });
  const intl = useIntl();
  const areAllCheckboxesFalse = () => {
    return Object.values(checkedState).every((value) => !value);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    if (name === "all") {
      setCheckedState({
        all: checked,
        html: false,
        css: false,
        sass: false,
        tailwind: false,
        mui: false,
        javascript: false,
        typescript: false,
        php: false,
        react: false,
        firebase: false,
      });
    } else {
      setCheckedState({ ...checkedState, [name]: checked, all: false });
    }
  };

  const classes = usePageStyles();

  return (
    <>
      <Box className={classes.projectContainer}>
        <List
          className={classes.projectList}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader
              component="div"
              id="nested-list-subheader"
              sx={{ position: "relative", left: "30px", zIndex: 1 }}
              className={classes.projectLeftNav}
            >
              {" "}
              {intl.formatMessage({ id: "project.category" })}
              <div className={classes.projectRightText}>
                {intl.formatMessage({ id: "project.projects" })}
              </div>
            </ListSubheader>
          }
        >
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

            {/* HTML Checkbox */}
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

            {/* CSS Checkbox */}
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

            {/* SCSS Checkbox */}
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

            {/* TailWind Checkbox */}
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

            {/* MUI Checkbox */}
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

            {/* JavaScript Checkbox */}
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

            {/* TypeScript Checkbox */}
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

            {/* PHP Checkbox */}
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

            {/* React Checkbox */}
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
          </FormGroup>
        </List>
        {areAllCheckboxesFalse() && <AlretCheckBox />}

        <SkillSection checkedState={checkedState} />
      </Box>
    </>
  );
};

export default Projects;
