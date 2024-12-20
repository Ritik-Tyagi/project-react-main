// src/components/ImageCarousel.jsx
import React from "react";
import Slider from "react-slick";
import { Box, Image } from "@chakra-ui/react";
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "50%",
        right: "10px",
      }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "50%",
        left: "10px",
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
};
const ImageCarousel1 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const images = [
    "https://static.thcdn.com/images/large/webp/widgets/121-us/54/original-HP-Disruptor-DS-1640x244_%281%29-135354.jpg",
    "https://static.thcdn.com/images/large/webp/widgets/121-us/19/original-HP-Disruptor-1644x244-Shop_SkinStore-181719.jpg",
    "https://static.thcdn.com/images/large/webp/widgets/121-us/31/original-HP-Disruptor-Skinstore-1644x244-Shop-140931.png",
  ];

  return (
    <Box maxW="100%" mx="auto" my={4} mt={20}>
      <Slider {...settings}>
        {images.map((src, index) => (
          <Box key={index}>
            <Image
              src={src}
              alt={`Slide ${index}`}
              width="100%"
              height="200px"
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ImageCarousel1;
