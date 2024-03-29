import styled from "@emotion/styled";
import { Add, Delete, HorizontalRule } from "@mui/icons-material";
import Dialogg from "../Detailse/MyDialog.jsx";
import {
  Badge,
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  deleteProduct,
  increaseQuantity,
} from "../../Redux/CartSlice";
import { useState } from "react";

const Cart = () => {
  const [open, setOpen] = useState(false);
  const [Item, setItem] = useState({});

  const handleClickOpen = (item) => {
    // setOpen(true);
    return item;
  };

  const handleClose = () => {
    setOpen(false);
  };

  const themee = useTheme();
  const { selectedProducts } = useSelector((state) => state.Cartt);
  const dispatch = useDispatch();
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      border: `2px solid ${themee.palette.success.main}`,
      padding: "0 4px",
      backgroundColor: themee.palette.success.main,
    },
  }));
  let Suptotal = 0;

  return (
    <Box>
      <Stack mt={12} mb={12} sx={{ alignItems: "center" }}>
        {selectedProducts.map((item) => {
          Suptotal += item.price * item.quantity;
          return (
            <Stack
              // Stack
              key={item.id}
              direction={"row"}
              component="section"
              sx={{
                justifyContent: "center",
                alignItems: "center",
                padding: "0 30px",
                mx: { xs: "54px", sm: "auto" },
                gap: "15px",
                height: "128px",
                width: { xs: "330px", md: "406px" },
                borderRadius: "7px",
                background: "rgba(255, 255, 255, 0.2)",
                boxShadow: "0 8px 10px 0 rgba( 31, 38, 135, 0.37 )",
                backdropFilter: "blur( 12.5px )",
                webkitBackdropFilter: "blur( 12.5px )",
                mb: "20px",
                overflowX: "hidden",
              }}
            >
              <img
                alt="hyy"
                width={"193px"}
                style={{ borderRadius: "7px" }}
                src={item.imageLink}
              />

              <Stack
                sx={{
                  marginRight: "45px",
                  gap: "6px",
                  alignItems: "center",
                }}
              >
                <Typography variant="p" color="">
                  {item.productName}
                </Typography>

                <Stack direction={"row"} alignItems={"center"} gap={1}>
                  <IconButton
                    onClick={() => {
                      dispatch(decreaseQuantity(item));
                    }}
                  >
                    <HorizontalRule />
                  </IconButton>
                  <StyledBadge
                    badgeContent={item.quantity}
                    color="primary"
                  ></StyledBadge>
                  <IconButton
                    onClick={() => {
                      dispatch(increaseQuantity(item));
                    }}
                  >
                    <Add />
                  </IconButton>
                  <Typography variant="p">
                    {" "}
                    ${item.price * item.quantity}{" "}
                  </Typography>
                </Stack>

                <Button
                  variant="text"
                  color="error"
                  sx={{ display: { xs: "none", md: "block" } }}
                  onClick={() => {
                    setItem(handleClickOpen(item));
                    setOpen(true);
                  }}
                >
                  {" "}
                  Delete
                </Button>
                <IconButton
                  sx={{ display: { xs: "block", md: "none" } }}
                  onClick={() => {
                    setItem(handleClickOpen(item));
                    setOpen(true);
                  }}
                >
                  <Delete />
                </IconButton>
              </Stack>
            </Stack>
          );
        })}
        <Stack
          sx={{
            alignItems: "center",
            width: "fit-content",
            margin: "0 auto",
            borderRadius: "7px",
            background: "rgba(255, 255, 255, 0.2)",
            boxShadow: "0 10px 10px 0 rgba( 31, 38, 135, 0.37 )",
            backdropFilter: "blur( 12.5px )",
            webkitBackdropFilter: "blur( 12.5px )",
            padding: " 8px 28px",
            gap: "10px",
            mt: "40px",
          }}
        >
          <Typography variant="h6">Cart Summary</Typography>
          <Stack
            direction={"row"}
            sx={{
              justifyContent: "center",
              gap: "60px",
            }}
          >
            <Typography variant="h6">Suptotal</Typography>
            <Typography variant="h6" color={themee.palette.success.main}>
              ${Suptotal}
            </Typography>
          </Stack>
          <Button variant="contained" color="warning" size="small">
            checkout
          </Button>
        </Stack>
      </Stack>
      <Dialogg
        open={open}
        handleClose={handleClose}
        handleClickOpen={handleClickOpen}
        myitem={Item}
      />
    </Box>
  );
};

export default Cart;
