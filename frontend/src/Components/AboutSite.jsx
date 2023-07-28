import { useTheme } from '@emotion/react';
import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';
import "../StyleCss/Aboutsite.css"

const AboutSite = () => {
  const theeme = useTheme()
  return (
    <Box>
      <Stack component="main" sx={{
        justifyContent: "space-around",
        alignItems: "center",
        bgcolor: theeme.palette.appBarbg.bgcolor,
        height: '92vh',
      }}>
        <Box className='anim' component="section" sx={{ width: { xs: "350px", md: "570px" }, display: "flex", flexDirection: "column", gap: "20px", mt: "-150px" }}>
          <Typography variant="h3" sx={{ fontWeight: "400" }}>Welcome to our <br /> Gift Shop</Typography>
          <Typography variant="p" sx={{ fontWeight: "300" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor sed quae laudantium libero iusto architecto adipisci ratione rerum voluptatibus?</Typography>
          <Button variant="contained" sx={{
            display: 'inherit', width: "35%", bgcolor: theeme.palette.warning.main, "&:hover": { backgroundColor: theeme.palette.hover },
          }}>Contained</Button>
        </Box>
      </Stack>
    </Box>
  );
}

export default AboutSite;
