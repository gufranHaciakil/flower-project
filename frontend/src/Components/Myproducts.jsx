import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { AddShoppingCart, Done, ShoppingCart } from "@mui/icons-material";
import { Badge, Box, Stack } from '@mui/material';
import { useGetproductsByNameQuery } from '../Redux/productsApi'
import CircularProgress from '@mui/material/CircularProgress';
import "../StyleCss/productsCard.css"
import { useDispatch } from 'react-redux';
import { addToCard } from '../Redux/CartSlice';
import { useNavigate } from 'react-router-dom';
const Myproducts = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { data, error, isLoading } = useGetproductsByNameQuery()
  if (error) {
    return (
      <h3>himm.. andifind any think</h3>
    )
  }
  if (isLoading) {
    return (
      <Stack direction={"row"} mt={3} justifyContent={"center"}>
        <CircularProgress color='warning' size={70} />

      </Stack >)
  }

  if (data) {
    return (
      <Stack mt={-3} direction={"row"} sx={{
        flexWrap: 'wrap',
        gap: '10px',
        justifyContent: "center",
        mb: "70px"
      }}>
        {data.map((item) => {
          return (
            <Card className='productsCard' key={item.id} mt={2}
              sx={{
                mt: "50px",
                maxWidth: 300,
              }} >
              < CardMedia
                component="img"
                height="194"
                image={item.imageLink}
                alt="Paella dish"
                onClick={() => {
                  navigate(`/product-detailse/${item.id}`)
                }}
              />
              <CardContent sx={{ display: "flex" }}>
                <Typography flexGrow={1} variant="body2" color="text.secondary">
                  {item.productName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ${item.price}  </Typography>
              </CardContent>

              <CardActions disableSpacing sx={{ display: "flex" }}>
                <Box flexGrow={1}>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon fontSize='small' />
                  </IconButton>

                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </Box>



                {/* ADD CARD BUTTON */}

                {false ?
                  (
                    <Badge badgeContent={<Done fontSize="medium" color="success" sx={{ mr: "50px" }} />}>
                      <ShoppingCart color='success' />
                    </Badge>
                  )
                  :
                  (<IconButton sx={{}} onClick={() => {
                    dispatch(addToCard(item))
                  }}>
                    <AddShoppingCart fontSize='medium' sx={{}} color='action' />
                  </IconButton>)
                }

              </CardActions>
            </Card >
          )
        })
        }

      </Stack>

    )
  }
}

export default Myproducts;
