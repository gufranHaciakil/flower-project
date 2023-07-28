import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import {
  Adb,
  Person3,
  Settings,
  ShoppingCart,

} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import React from "react";
import styled from "@emotion/styled";


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const AppBarr = ({ setmyThem }) => {
  const theem = useTheme();

  const ColorButton = styled(Button)(({ theem }) => ({
    color: theem.palette.getContrastText('#483D8B'),
    backgroundColor: theem.palette.gufran.main,
    "&:hover": {
      backgroundColor: theem.palette.onHover.main,
    },
  }));


  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  const pages = [
    {
      text: "Home",
      path: "/",
    },
    {
      text: "Product",
      icon: <product />,
      path: "/product",
    },
    {
      text: "Cart",
      icon: <ShoppingCart />,
      path: "/cart",
    },
    {
      text: "Profile",
      icon: <Person3 />,
      path: "/profile",
    },
  ];


  return (
    <>
      <AppBar position="static" sx={{ height: "50px", bgcolor: theem.palette.appBarbg.main }}>
        <Container maxWidth="xl" sx={{ bgcolor: theem.palette.appBarbg.main }}>
          <Toolbar disableGutters sx={{
            justifyContent: { xs: "space-between", lg: "center" },
            gap: "90px",
            height: "50px",
            minHeight: '50px !important',
            bgcolor: theem.palette.appBarbg.main
          }}>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.text} onClick={() => {
                    navigate(page.path)

                    handleCloseNavMenu()
                  }}>
                    <Typography textAlign="center">{page.text}</Typography>
                  </MenuItem>
                ))}
              </Menu>


            </Box>

            <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }, gap: "30px", }}>

              {pages.map((page) => (
                <Button
                  key={page.text}
                  onClick={() => {
                    navigate(page.path)
                    handleCloseNavMenu()
                  }}
                  sx={{ my: 2, color: 'white', display: 'block', fontSize: "17px" }}
                >
                  {page.text}
                </Button>
              ))}

            </Box>

            <Box sx={{ display: "flex", alignItems: "center", }}>


              <IconButton
                sx={{ ml: 1 }}
                onClick={() => {
                  setmyThem(theem.palette.mode === "light" ? "dark" : "light");
                  localStorage.setItem(
                    "theme mode",
                    theem.palette.mode === "light" ? "dark" : "light"
                  );
                }}
              >
                {theem.palette.mode === "dark" ? (
                  <Brightness7Icon sx={{ color: "orange" }} />
                ) : (
                  <Brightness4Icon />
                )}
              </IconButton>
              <Adb sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />

              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                LOGO
              </Typography>



              <Adb sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                LOGO
              </Typography>


              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>


          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}
export default AppBarr;
