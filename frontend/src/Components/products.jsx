import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { ShoppingCart } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import { Box, Stack } from '@mui/material';
const Products = () => {
  const theeme = useTheme();

  const myProduct = [
    {
      img: "https://media.istockphoto.com/id/1020036636/tr/foto%C4%9Fraf/vah%C5%9Fi-ve-g%C3%BCzel-%C3%A7i%C3%A7ek-buketi-%C4%B1%C5%9F%C4%B1k-arka-plan-%C3%BCzerinde.jpg?s=612x612&w=0&k=20&c=MC6pcZLYCkjwzQl532xndV94ZLeXRv2rGWpJtHZA0Rk=",
      imgName: "violet flowers",
      imgPrice: 10,
    }
    ,
    {
      img: "https://media.istockphoto.com/id/1174882401/tr/foto%C4%9Fraf/%C3%A7i%C3%A7ek%C3%A7i-elinde-bir-buket-tutuyor-g%C3%BCzel-bahar-%C3%A7i%C3%A7ekleri-kar%C4%B1%C5%9F%C4%B1k-%C3%A7i%C3%A7eklerle-d%C3%BCzenleme-bir.jpg?s=612x612&w=0&k=20&c=Dnn1cAMXAZECdZIjZyx2FIBJcC-gwQLuRcshy9bPsKs=",
      imgName: "violet flowers",
      imgPrice: 12,
    }
    ,
    {
      img: "https://media.istockphoto.com/id/1200916960/tr/foto%C4%9Fraf/gen%C3%A7-g%C3%BCzel-kad%C4%B1n-l%C3%BCks-buket-tutun.jpg?s=612x612&w=0&k=20&c=XbhjagPFW7LidBhHZ07oXIMqfvsbR0Wrzzj2Tltsx3k=",
      imgName: "violet flowers",
      imgPrice: 9,
    }
    ,
    {
      img: "https://media.istockphoto.com/id/1313448014/tr/foto%C4%9Fraf/beyaz-arka-plan-%C3%BCzerinde-g%C3%BCzel-lale-buketi-ile-kad%C4%B1n-yak%C4%B1n-%C3%A7ekim.jpg?s=612x612&w=0&k=20&c=kXpLSg4yU9AaVrqtjPVFkWWk7iKayngYylsgTk3wq90=",
      imgName: "yellow flowers",
      imgPrice: 7,
    }
    ,
  ]


  return (

    <Stack direction={"row"} sx={{
      flexWrap: 'wrap',
      gap: '10px',
      justifyContent: "center",
    }}>
      {myProduct.map((item) => {
        return (
          <Card mt={2}
            sx={{
              mt: "50px",
              maxWidth: 300,
            }} >
            < CardMedia
              component="img"
              height="194"
              image={item.img}
              alt="Paella dish"
            />

            <CardContent sx={{ display: "flex" }}>
              <Typography flexGrow={1} variant="body2" color="text.secondary">
                {item.imgName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ${item.imgPrice}      </Typography>
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

              <IconButton sx={{}} onClick={() => { }}>
                <ShoppingCart fontSize='small' sx={{}} />
              </IconButton>

            </CardActions>
          </Card >

        )

      })
      }


    </Stack>

  );
}

export default Products;
