import { Box, useMediaQuery, Grid, Button } from "@mui/material";
import DataSkills from "./DataSkills";
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

  const cardStyle = {
    borderRadius: "15px",
    border: "1px solid #1E2D3D",
    background: "#011221",
    maxWidth: "470px",
    height: "350px",
    overflow: "hidden",
  };
  const filteredProjects = checkedState.all
    ? DataSkills
    : DataSkills.filter((project) =>
        Object.entries(checkedState).some(
          ([key, value]) => value && project.technologies.includes(key)
        )
      );

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          position: "relative",
          top: "150px",
          left: "0px",
          height: "90vh",
          width: "100%",
          maxWidth: "1450px",
          display: "flex",
          justifyContent: "center",
          overflowY: "auto",
        }}
      >
        <Box sx={{ width: "100%", padding: "0 10px" }}>
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
                <div style={cardStyle}>
                  <img
                    src={project.img}
                    alt={project.nameProject}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                  <div style={{ padding: "10px" }}>
                    <h2 style={{ fontSize: "1em" }}>{project.nameProject}</h2>
                    <p>{project.detailProject}</p>

                    <Box
                      sx={{
                        position: "absolute",
                        right: "15px",
                        top: "25px",
                        display: "flex",
                        justifyContent: "center",
                        gap: "10px",
                        background: "#010c15",
                        padding: "5px 10px",
                        borderRadius: "10px",
                      }}
                    >
                      {project.icon &&
                        project.icon.map((icon, index) => (
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                            key={index}
                          >
                            {icon}
                          </Box>
                        ))}
                    </Box>
                    <Button
                      variant="contained"
                      sx={{
                        background: "#1E2D3D",
                        position: "absolute",
                        left: "25px",
                        bottom: "15px",
                        "&:hover": {
                          background: "#1E2D3D",
                        },
                      }}
                    >
                      <a
                        href={project.openProject}
                        style={{
                          color: "#fff",
                          textDecoration: "none",
                          position: "relative",
                          top: "2px",
                        }}
                      >
                        View Project
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
