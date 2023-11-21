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
  SiPhp,
  SiReact,
  SiFirebase,
} from "react-icons/si";
import { Box } from "@mui/material";
import SkillSection from "./SkillSection";

const Projects = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
        }}
      >
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
                  defaultChecked
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
            <FormControlLabel
              sx={{ color: "#607B96" }}
              control={<Checkbox sx={{ "& svg": { color: "#607B96" } }} />}
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
            <FormControlLabel
              sx={{ color: "#607B96" }}
              control={<Checkbox sx={{ "& svg": { color: "#607B96" } }} />}
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
            <FormControlLabel
              sx={{ color: "#607B96" }}
              control={<Checkbox sx={{ "& svg": { color: "#607B96" } }} />}
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
            <FormControlLabel
              sx={{ color: "#607B96" }}
              control={<Checkbox sx={{ "& svg": { color: "#607B96" } }} />}
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
            <FormControlLabel
              sx={{ color: "#607B96" }}
              control={<Checkbox sx={{ "& svg": { color: "#607B96" } }} />}
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
            <FormControlLabel
              sx={{ color: "#607B96" }}
              control={<Checkbox sx={{ "& svg": { color: "#607B96" } }} />}
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
            <FormControlLabel
              sx={{ color: "#607B96" }}
              control={<Checkbox sx={{ "& svg": { color: "#607B96" } }} />}
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
            <FormControlLabel
              sx={{ color: "#607B96" }}
              control={<Checkbox sx={{ "& svg": { color: "#607B96" } }} />}
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
                  REACT
                </>
              }
            />
            <FormControlLabel
              sx={{ color: "#607B96" }}
              control={<Checkbox sx={{ "& svg": { color: "#607B96" } }} />}
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
                  FireBase
                </>
              }
            />
          </FormGroup>
        </List>
        <SkillSection />
      </Box>
    </>
  );
};

export default Projects;
