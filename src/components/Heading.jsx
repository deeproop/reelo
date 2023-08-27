import { Box, Typography } from "@mui/material";
import React from "react";

const Heading = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      color="white"
      sx={{ fontWeight: "bold", p: 3 }}
    >
      <Typography sx={{ pr: 2, fontSize: "h4.fontSize" }}>NASA</Typography>
      <Typography sx={{ pr: 2, fontSize: "h4.fontSize" }}>Exoplanet</Typography>
      <Typography sx={{ fontSize: "h4.fontSize" }}>Query</Typography>
    </Box>
  );
};

export default Heading;
