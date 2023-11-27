import { Box, useMediaQuery, Grid, Button } from "@mui/material";
import DataSkills from "./DataSkills";
import usePageStyles from "../stylePages";

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

const SkillSection = ({ checkedState }: { checkedState: CheckedStateType }) => {
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
          <Grid container spacing={2}>
            {filteredProjects.map((project) => (
              <Grid
                sx={{ position: "relative" }}
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
                    <p>{project.detailProject}</p>

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
