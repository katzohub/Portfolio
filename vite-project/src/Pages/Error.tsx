import { Box, Typography } from "@mui/material";

const Eroor = () => {
  return (
    <>
      <Box
        sx={{
          width: "100vw",
          height: "100dvh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h1" color="#607b96" fontSize={35}>
          404 Not Found
        </Typography>
        <Typography variant="h4" color="#607b96" fontSize={20} mt={3}>
          The page that does not exist!
        </Typography>
      </Box>
    </>
  );
};

export default Eroor;
