
import { useState } from "react";
import { useTheme } from "@emotion/react";
import AboutSite from '../../Components/AboutSite';
import { Box } from "@mui/material";

const Home = () => {
  const theeme = useTheme();

  return (
    <Box>
      <AboutSite />
    </Box>

  );
};

export default Home;
