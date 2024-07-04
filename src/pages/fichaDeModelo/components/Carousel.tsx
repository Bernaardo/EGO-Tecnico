import React from "react";
import Slider from "react-slick";
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { CarouselProps, CustomArrowProps } from "../../../interfaces/interfaces";
import { Box, Card, CardMedia, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomArrows: React.FC<CustomArrowProps>= (props) => {
    const { className, style, onClick, icon } = props;
    return (
        <div
        className={className}
        style={{ ...style, 
            alignItems: 'center',color: 'black' }}
        onClick={onClick}
      >
        {icon}
      </div>
    );
  };

const Carousel: React.FC<CarouselProps> = ({data}) => {
    const sliderProps = {
        dots: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <CustomArrows icon={<ArrowForwardIos />} />,
        prevArrow: <CustomArrows icon={<ArrowBackIos />} />,
      };

    return (
        <Box sx={{margin:4, justifyContent:'center'}}>
        <Slider {...sliderProps} >
          {data.map((feature, index) => (
             <Card sx={{ 
                display: 'flex',
                boxShadow: 'none', 
                border: 'none', 
                '&:hover': {
                  boxShadow: 'none'},
                  maxWidth: '300px',
                  margin: '0 auto', }}
                  >
                <CardMedia
               sx={{ height: "30px", objectFit: "contain", width: "50%" }}
                 component="img"
                 image={feature.image}
                 alt={feature.name}
               />
              <Box sx={{ display: 'flex', flexDirection: 'column' , width:'50%'}}>
                 <Typography gutterBottom variant="h5" >
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