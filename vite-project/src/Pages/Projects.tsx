import { useState } from "react";
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

const Projects = () => {
  const [checkedState, setCheckedState] = useState({
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

  return (
    <>
      <Box sx={{ width: "100%", display: "flex" }}>
        <List
          sx={{
            width: "267px",
            marginTop: "56px",
            borderRight: "2px solid #1E2D3D",
            height: "95vh",
          }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader
              component="div"
              id="nested-list-subheader"
              sx={{
                width: "94vw",
                background: "transparent",
                display: "flex",
                borderBottom: "1px solid #1E2D3D",
                position: "relative",
                left: "30px",
                color: "#FFF",
                fontFamily: "Fira Code",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
              }}
            >
              {" "}
              Category
              <div
                style={{
                  color: "#607B96",
                  position: "relative",
                  left: "150px",
                }}
              >
                _projects
              </div>
            </ListSubheader>
          }
        >
          <FormGroup sx={{ marginLeft: "60px" }}>
            <FormControlLabel
              sx={{ color: "#607B96" }}
              control={
                <Checkbox
                  checked={checkedState.all}
                  onChange={handleCheckboxChange}
                  name="all"
                  sx={{ "& svg": { color: "#607B96" } }}
                />
              }
              label={
                <>
                  <CategoryIcon
                    fontSize="small"
                    style={{
                      marginRight: "15px",
                      position: "relative",
                      top: "2px",
                      left: "5px",
                    }}
                  />
                  All
                </>
              }
            />

            {/* HTML Checkbox */}
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkedState.html}
                  onChange={handleCheckboxChange}
                  name="html"
                  sx={{ "& svg": { color: "#607B96" } }}
                />
              }
              label={
                <>
                  <SiHtml5
                    style={{
                      marginRight: "15px",
                      position: "relative",
                      top: "2px",
                      left: "5px",
                    }}
                  />
                  HTML
                </>
              }
            />

            {/* CSS Checkbox */}
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkedState.css}
                  onChange={handleCheckboxChange}
                  name="css"
                  sx={{ "& svg": { color: "#607B96" } }}
                />
              }
              label={
                <>
                  <SiCss3
                    style={{
                      marginRight: "15px",
                      position: "relative",
                      top: "2px",
                      left: "5px",
                    }}
                  />
                  CSS
                </>
              }
            />

            {/* SCSS Checkbox */}
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkedState.sass}
                  onChange={handleCheckboxChange}
                  name="sass"
                  sx={{ "& svg": { color: "#607B96" } }}
                />
              }
              label={
                <>
                  <SiSass
                    style={{
                      marginRight: "15px",
                      position: "relative",
                      top: "2px",
                      left: "5px",
                    }}
                  />
                  SCSS
                </>
              }
            />

            {/* TailWind Checkbox */}
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkedState.tailwind}
                  onChange={handleCheckboxChange}
                  name="tailwind"
                  sx={{ "& svg": { color: "#607B96" } }}
                />
              }
              label={
                <>
                  <SiTailwindcss
                    style={{
                      marginRight: "15px",
                      position: "relative",
                      top: "2px",
                      left: "5px",
                    }}
                  />
                  TailWind
                </>
              }
            />

            {/* MUI Checkbox */}
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkedState.mui}
                  onChange={handleCheckboxChange}
                  name="mui"
                  sx={{ "& svg": { color: "#607B96" } }}
                />
              }
              label={
                <>
                  <SiMui
                    style={{
                      marginRight: "15px",
                      position: "relative",
                      top: "2px",
                      left: "5px",
                    }}
                  />
                  MUI
                </>
              }
            />

            {/* JavaScript Checkbox */}
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkedState.javascript}
                  onChange={handleCheckboxChange}
                  name="javascript"
                  sx={{ "& svg": { color: "#607B96" } }}
                />
              }
              label={
                <>
                  <SiJavascript
                    style={{
                      marginRight: "15px",
                      position: "relative",
                      top: "2px",
                      left: "5px",
                    }}
                  />
                  JavaScript
                </>
              }
            />

            {/* TypeScript Checkbox */}
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkedState.typescript}
                  onChange={handleCheckboxChange}
                  name="typescript"
                  sx={{ "& svg": { color: "#607B96" } }}
                />
              }
              label={
                <>
                  <SiTypescript
                    style={{
                      marginRight: "15px",
                      position: "relative",
                      top: "2px",
                      left: "5px",
                    }}
                  />
                  Typescript
                </>
              }
            />

            {/* PHP Checkbox */}
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkedState.php}
                  onChange={handleCheckboxChange}
                  name="php"
                  sx={{ "& svg": { color: "#607B96" } }}
                />
              }
              label={
                <>
                  <SiPhp
                    style={{
                      marginRight: "15px",
                      position: "relative",
                      top: "2px",
                      left: "5px",
                    }}
                  />
                  PHP
                </>
              }
            />

            {/* React Checkbox */}
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkedState.react}
                  onChange={handleCheckboxChange}
                  name="react"
                  sx={{ "& svg": { color: "#607B96" } }}
                />
              }
              label={
                <>
                  <SiReact
                    style={{
                      marginRight: "15px",
                      position: "relative",
                      top: "2px",
                      left: "5px",
                    }}
                  />
                  React
                </>
              }
            />

            {/* Firebase Checkbox */}
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkedState.firebase}
                  onChange={handleCheckboxChange}
                  name="firebase"
                  sx={{ "& svg": { color: "#607B96" } }}
                />
              }
              label={
                <>
                  <SiFirebase
                    style={{
                      marginRight: "15px",
                      position: "relative",
                      top: "2px",
                      left: "5px",
                    }}
                  />
                  Firebase
                </>
              }
            />
          </FormGroup>
        </List>
        <SkillSection checkedState={checkedState} />
      </Box>
    </>
  );
};

export default Projects;
