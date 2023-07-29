import styled from "@emotion/styled";
import { Add, Delete, HorizontalRule, } from "@mui/icons-material";
import { Badge, Button, IconButton, Stack, Typography, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, deleteProduct, increaseQuantity } from "../../Redux/CartSlice";


const Cart = () => {
  const themee = useTheme()
  const { selectedProducts } = useSelector((state) => state.Cartt)
  const dispatch = useDispatch()

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      border: `2px solid ${themee.palette.success.main}`,
      padding: '0 4px',
      backgroundColor: themee.palette.success.main,
    },
  }));

  return (
    <Stack mt={12} mb={12}>

      {selectedProducts.map((item) => {
        return (
          <Stack key={item.id} direction={"row"} component="section" sx={{
            justifyContent: "center",
            alignItems: "center",
            padding: "0 30px",
            mx: { xs: "54px", sm: "auto" },
            gap: '15px',
            height: '128px',
            width: { xs: "330px", md: "406px" },
            borderRadius: '7px',
            background: 'rgba(255, 255, 255, 0.2)',
            boxShadow: '0 8px 10px 0 rgba( 31, 38, 135, 0.37 )',
            backdropFilter: 'blur( 12.5px )',
            webkitBackdropFilter: 'blur( 12.5px )',
            mb: "20px",

          }}>
            <img alt="hyy" width={'193px'} style={{ borderRadius: "7px" }} src={item.imageLink} />

            <Stack sx={{
              marginRight: '45px',
              gap: '6px',
              alignItems: 'center',
            }}
            >
              <Typography variant="p" color="">{item.productName}</Typography>

              <Stack direction={"row"} alignItems={'center'} gap={1}>
                <IconButton onClick={() => {
                  dispatch(decreaseQuantity(item))
                }}>
                  <HorizontalRule />
                </IconButton>
                <StyledBadge badgeContent={4} color="primary">
                </StyledBadge>
                <IconButton onClick={() => {
                  dispatch(increaseQuantity(item))
                }} >
                  <Add />
                </IconButton>
                <Typography variant="p" > ${item.price} </Typography>
              </Stack>

              <Button variant="text" color="error" sx={{ display: { xs: "none", md: "block" } }} onClick={() => {
                dispatch(deleteProduct(item))
              }}> Delete</Button>
              <IconButton sx={{ display: { xs: "block", md: "none" } }} onClick={() => {

                dispatch(deleteProduct(item))
              }}>
                <Delete />
              </IconButton>

            </Stack>

          </Stack>
        )
      })}

      < Stack sx={{
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
        mt: "40px",
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

      </Stack >
    </Stack>
  );
}

export default Cart;
