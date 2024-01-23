import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import React from "react";

const NotFoundthem = () => {
  const theeme = useTheme();
  let link = window.location.href;
  return (
    <Box sx={{display:'flex'}}>
      <Typography variant="h5" color={theeme.palette.black}>
        Not Found any page in this link :{" "} 
      </Typography>
      <Typography variant="h6" color={theeme.palette.error.main}> 
        { link} <br />

      </Typography>

    </Box>
  );
};

export default NotFoundthem;
