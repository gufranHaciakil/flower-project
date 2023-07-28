import styled from "@emotion/styled";
import { Add, Delete, HorizontalRule, Mail, TramSharp } from "@mui/icons-material";
import { Badge, Box, Button, IconButton, Stack, Typography, useTheme } from "@mui/material";


const Cart = () => {
  const themee = useTheme()

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      border: `2px solid ${themee.palette.success.main}`,
      padding: '0 4px',
      backgroundColor: themee.palette.success.main,
    },
  }));

  return (
    <Stack>

      <Stack direction={"row"} component="section" sx={{
        justifyContent: "center",
        alignItems: "center",
        padding: "0 30px",
        mx: { xs: "57px", md: "auto" },
        gap: '15px',
        height: '128px',
        width: { xs: "330px", md: "406px" },
        borderRadius: '7px',
        background: 'rgba(255, 255, 255, 0.2)',
        boxShadow: '0 8px 10px 0 rgba( 31, 38, 135, 0.37 )',
        backdropFilter: 'blur( 12.5px )',
        webkitBackdropFilter: 'blur( 12.5px )',
        mt: "50px",

      }}>
        <img alt="hyy" width={'193px'} style={{ borderRadius: "7px" }} src="https://media.istockphoto.com/id/1269714123/tr/foto%C4%9Fraf/beyaz-arka-planda-kad%C4%B1n-ellerde-ye%C5%9Fil-d%C3%BC%C4%9F%C3%BCn-buketi.jpg?s=612x612&w=0&k=20&c=mPAANygM_LtfSRJ5XPulJrejib-nuO0w9UOpTYKkvdQ=" />

        <Stack sx={{
          marginRight: '45px',
          gap: '6px',
          alignItems: 'center',
        }}
        >
          <Typography variant="p" color="">violet flowers</Typography>

          <Stack direction={"row"} alignItems={'center'} gap={1}>
            <IconButton >
              <HorizontalRule />
            </IconButton>
            <StyledBadge badgeContent={4} color="primary">
            </StyledBadge>
            <IconButton >
              <Add />
            </IconButton>
            <Typography variant="p" > $12</Typography>
          </Stack>

          <Button variant="text" color="error" sx={{ display: { xs: "none", md: "block" } }}> Delete</Button>
          <IconButton sx={{ display: { xs: "block", md: "none" } }} onClick={() => { }}>
            <Delete />
          </IconButton>

        </Stack>

      </Stack>

      <Stack sx={{
        alignItems: "center",
        width: 'fit-content',
        margin: '0 auto',
        borderRadius: '7px',
        background: 'rgba(255, 255, 255, 0.2)',
        boxShadow: '0 10px 10px 0 rgba( 31, 38, 135, 0.37 )',
        backdropFilter: 'blur( 12.5px )',
        webkitBackdropFilter: 'blur( 12.5px )',
        padding: " 8px 28px",
        gap: '10px',
        mt: "30px"
      }
      }>
        <Typography variant="h6" >Cart Summary</Typography>
        <Stack direction={'row'} sx={{
          justifyContent: 'center',
          gap: '60px',

        }}>
          <Typography variant="h6" >Suptotal</Typography>
          <Typography variant="h6" color={themee.palette.success.main} >$20</Typography>
        </Stack>
        <Button variant="contained" color="warning" size="small">
          checkout
        </Button>
      </Stack>

    </Stack >
  );
}

export default Cart;
