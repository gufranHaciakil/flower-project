import { Outlet } from "react-router-dom";
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useMemo, useState } from "react";
import getDesignTokens from "../StyleThem/Themstyle";
import AppBarr from "../Components/AppBarr";
const drawerWidth = 240;

const Root = (props) => {
  const [mode, setmyThem] = useState(
    localStorage.getItem("theme mode") === null
      ? "light"
      : localStorage.getItem("theme mode") === "light"
        ? "light"
        : "dark"
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBarr
        {...{ drawerWidth }} // منقدر نستدعي البروبرتيز بهالطريقه افخم
        props={props}
        setmyThem={setmyThem}
      />

      <Box component="main"
        sx={{
            mt: "70px",
          //  ml: { xs: "8%", sm: "330px", md: "500px" },
        }}
      >
        <Outlet />
      </Box>
    </ThemeProvider>
  );
};

export default Root;
