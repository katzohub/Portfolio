import { Box, useMediaQuery, Grid, Button } from "@mui/material";
import DataSkills from "./DataSkills";

const SkillSection = () => {
  const isMobile = useMediaQuery("(max-width:800px)");

  const cardStyle = {
    borderRadius: "15px",
    border: "1px solid #1E2D3D",
    background: "#011221",
    maxWidth: "470px",
    height: "350px",
    overflow: "hidden",
  };

  return (
    <Box
      sx={{
        position: "relative",
        top: "150px",
        left: "0px",
        height: "90vh",
        width: "100%",
        overflowY: "scroll",
      }}
    >
      <Box sx={{ width: "100%", padding: "0 10px" }}>
        <Grid container spacing={2}>
          {DataSkills.map((project) => (
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
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <div style={{ padding: "10px" }}>
                  <h2 style={{ fontSize: "1em" }}>{project.nameProject}</h2>
                  <p>{project.detailProject}</p>
                  <Button
                    variant="contained"
                    sx={{
                      background: "#1C2B3A",
                      position: "absolute",
                      left: "25px",
                      bottom: "15px",
                    }}
                  >
                    <a
                      href={project.openProject}
                      style={{ color: "#fff", textDecoration: "none" }}
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
  );
};

export default SkillSection;
