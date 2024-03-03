import {
  Box,
  useMediaQuery,
  Grid,
  Divider,
  Button,
  Typography,
} from "@mui/material";
import boxOffice from "../img/box office.webp";
import filmDatabase from "../img/film database.webp";
import logicGame from "../img/logic game.webp";
import marketPlace from "../img/marketplace.webp";
import menu from "../img/menu.png";
import notes from "../img/notes.webp";
import portfolio from "../img/portfolio.webp";
import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiPhp,
  SiReact,
  SiFirebase,
} from "react-icons/si";
import usePageStyles from "../styles/stylePages";

type CheckedStateType = {
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
import { useIntl } from "react-intl";

const SkillSection = ({ checkedState }: { checkedState: CheckedStateType }) => {
  const intl = useIntl();
  const DataSkills = [
    {
      id: 1,
      img: portfolio,
      icon: [
        <SiHtml5 style={{ fontSize: "20px", color: "#e44d26" }} />,
        <SiSass style={{ fontSize: "20px", color: "#cd6799" }} />,
        <SiJavascript style={{ fontSize: "20px", color: "#f7e025" }} />,
      ],
      technologies: ["html", "sass", "javascript"],
      nameProject: `${intl.formatMessage({ id: "project.namePortfolio" })}`,
      detailProject: `${intl.formatMessage({
        id: "project.namePortfolioText",
      })}`,
      openProject: "https://github.com/katzohub/Portfolio-App",
    },
    {
      id: 2,
      img: menu,
      icon: [
        <SiHtml5 style={{ fontSize: "20px", color: "#e44d26" }} />,
        <SiSass style={{ fontSize: "20px", color: "#cd6799" }} />,
        <SiJavascript style={{ fontSize: "20px", color: "#f7e025" }} />,
      ],
      technologies: ["html", "sass", "javascript"],
      nameProject: `${intl.formatMessage({ id: "project.restaurant" })}`,
      detailProject: `${intl.formatMessage({
        id: "project.restaurantText",
      })}`,
      openProject: "https://github.com/katzohub/Info-Food-App",
    },
    {
      id: 3,
      img: logicGame,
      icon: [
        <SiHtml5 style={{ fontSize: "20px", color: "#e44d26" }} />,
        <SiCss3 style={{ fontSize: "20px", color: "#306af1" }} />,
        <SiJavascript style={{ fontSize: "20px", color: "#f7e025" }} />,
      ],
      technologies: ["html", "css", "javascript"],
      nameProject: `${intl.formatMessage({ id: "project.nameGame" })}`,
      detailProject: `${intl.formatMessage({
        id: "project.nameGameText",
      })}`,
      openProject: "https://github.com/katzohub/Game-Seven-App",
    },
    {
      id: 4,
      img: boxOffice,
      icon: [
        <SiPhp style={{ fontSize: "20px", color: "#7b7fb5" }} />,
        <SiCss3 style={{ fontSize: "20px", color: "#306af1" }} />,
      ],
      technologies: ["php", "css"],
      nameProject: `${intl.formatMessage({ id: "project.nameOffice" })}`,
      detailProject: `${intl.formatMessage({
        id: "project.nameOfficeText",
      })}`,
      openProject: "https://github.com/katzohub/Box-office-php",
    },
    {
      id: 5,
      img: filmDatabase,
      icon: [
        <SiReact style={{ fontSize: "20px", color: "#61dafb" }} />,
        <SiJavascript style={{ fontSize: "20px", color: "#f7e025" }} />,
        <SiCss3 style={{ fontSize: "20px", color: "#306af1" }} />,
      ],
      technologies: ["react", "css", "javascript"],
      nameProject: `${intl.formatMessage({ id: "project.nameDatabase" })}`,
      detailProject: `${intl.formatMessage({
        id: "project.nameDatabaseText",
      })}`,
      openProject: "https://github.com/katzohub/Film-Database-App",
    },
    {
      id: 6,
      img: notes,
      icon: [
        <SiReact style={{ fontSize: "20px", color: "#61dafb" }} />,
        <SiTypescript style={{ fontSize: "20px", color: "#007acc" }} />,
        <SiTailwindcss style={{ fontSize: "20px", color: "#38bdf8" }} />,
      ],
      technologies: ["react", "tailwind", "typescript"],
      nameProject: `${intl.formatMessage({ id: "project.nameNotes" })}`,
      detailProject: `${intl.formatMessage({
        id: "project.nameNotesText",
      })}`,
      openProject: "https://github.com/katzohub/REACT-TS",
    },
    {
      id: 7,
      icon: [
        <SiReact style={{ fontSize: "20px", color: "#61dafb" }} />,
        <SiTypescript style={{ fontSize: "20px", color: "#007acc" }} />,
        <SiFirebase style={{ fontSize: "20px", color: "#ffcc32" }} />,
      ],
      technologies: ["react", "firebase", "javascript"],
      img: marketPlace,
      nameProject: `${intl.formatMessage({ id: "project.nameMarkPlace" })}`,
      detailProject: `${intl.formatMessage({
        id: "project.nameMarkPlaceText",
      })}`,
      openProject: "https://github.com/katzohub/marketplace-Mobile-App",
    },
  ];

  const isMobile = useMediaQuery("(max-width:800px)");
  const filteredProjects = checkedState.all
    ? DataSkills
    : DataSkills.filter((project) =>
        Object.entries(checkedState).some(
          ([key, value]) => value && project.technologies.includes(key)
        )
      );
  const classes = usePageStyles();
  return (
    <Box className={classes.skillContainer}>
      <Box className={classes.skillWrap}>
        <Box className={classes.skillPositionWrap}>
          <Box className={classes.skillBoxMinWidth}>
            <Divider
              orientation="vertical"
              flexItem
              className={classes.skillBoxDividerTop}
            />
            <Typography variant="h5" className={classes.skillBoxText}>
              projects
            </Typography>

            <Divider
              orientation="vertical"
              flexItem
              className={classes.skillBoxDividerDown}
            />
          </Box>
          <Grid container spacing={2} className={classes.skillBoxCard}>
            {filteredProjects.map((project) => (
              <Grid
                sx={{
                  position: "relative",
                  ...(isMobile && { marginTop: "10px" }),
                }}
                item
                xs={12}
                sm={isMobile ? 12 : 6}
                md={isMobile ? 12 : 4}
                key={project.id}
              >
                <div className={classes.skillCard}>
                  <img
                    src={project.img}
                    alt={project.nameProject}
                    className={classes.skillCardImg}
                  />
                  <div className={classes.skillCardHeading}>
                    <h2 className={classes.skillCardText}>
                      {project.nameProject}
                    </h2>
                    <p style={{ fontSize: "15px" }}>{project.detailProject}</p>

                    <Box className={classes.skillCardContainer}>
                      {project.icon &&
                        project.icon.map((icon, index) => (
                          <Box
                            className={classes.skillCardIconWrap}
                            key={index}
                          >
                            {icon}
                          </Box>
                        ))}
                    </Box>
                    <Button
                      variant="contained"
                      sx={{
                        position: "absolute ",
                        left: "25px",
                        bottom: "15px",
                      }}
                      className={classes.skillCardBtn}
                    >
                      <a
                        href={project.openProject}
                        target="_blank"
                        className={classes.skillCardLink}
                      >
                        View-Project
                      </a>
                    </Button>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default SkillSection;
