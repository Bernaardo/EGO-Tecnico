import React from "react";
import Slider from "react-slick";
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { CarouselProps, CustomArrowProps } from "../../../interfaces/interfaces";
import { Box, Card, CardMedia, IconButton, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const CustomPrevArrow: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <IconButton
      style={{ position: 'absolute', left: '-30px', top: '50%'}}
      onClick={onClick}
  >
      <ArrowBackIos />
  </IconButton>
);

const CustomNextArrow: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <IconButton
      style={{ position: 'absolute', right: '-30px', top: '50%'}}
      onClick={onClick}
  >
      <ArrowForwardIos />
  </IconButton>
);

const Carousel: React.FC<CarouselProps> = ({ data }) => {
  const sliderProps = {
      dots: true,
      speed: 1500,
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 1300,
      nextArrow: <CustomNextArrow onClick={() => {}} />,
      prevArrow: <CustomPrevArrow onClick={() => {}} />,
      responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

    return (
      <Box sx={{ margin: '0 auto', paddingLeft: '17px', paddingRight:'27px', justifyContent:'center', paddingBottom:'10px' }}>
        <Slider {...sliderProps} >
          {data.map((feature, index) => (
             <Card sx={{ 
                padding:0,
                display: 'flex',
                border: 'none', 
                backgroundColor:'rgba(0, 0, 0, 0)',
                '&:hover': {
                  boxShadow: 'none'},
                  maxWidth: '300px',
                  marginLeft:1.5, }}
                  >
                <CardMedia
               sx={{ height: "170px", objectFit: "contain", width: "100%",marginTop: 'auto', marginBottom: 'auto', borderRadius:3}}
                 component="img"
                 image={feature.image}
                 alt={feature.name}
               />
              <Box sx={{ display: 'flex', flexDirection: 'column' , width:'100%'}}>
                 <Typography gutterBottom variant="h4" fontWeight='bold' >
                   {feature.name}
                 </Typography>
                 <Typography variant="h5" >
                   {feature.description}
                 </Typography>
               </Box>
             </Card>
          ))}
        </Slider>
        </Box>
      );
}

export default Carousel;