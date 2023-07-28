import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import React from "react";

const NotFoundthem = () => {
  const theeme = useTheme();
  return (
    <Box>
      <Typography variant="h5" color={theeme.palette.error.main}>
        Not Found any them
        <br />
        Please try another time{" "}
      </Typography>
    </Box>
  );
};

export default NotFoundthem;
