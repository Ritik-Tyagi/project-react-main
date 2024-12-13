import React from "react";
import Slider from "react-slick";
import { Box, Image, Heading, useBreakpointValue } from "@chakra-ui/react";
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
const CircularImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: useBreakpointValue({ base: 1, md: 3, lg: 4 }),
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const images = [
    "https://static.thcdn.com/images/small/webp/widgets/121-us/21/original-SkinStore_Widgets_-_Untitled_Page_-_2024-09-11T111510.186-151521.png",
    "https://static.thcdn.com/images/small/webp/widgets/121-us/34/original-SkinStore_Widgets_-_Untitled_Page_-_2024-09-11T111729.236-151734.png",
    "https://static.thcdn.com/images/small/webp/widgets/121-us/41/original-SkinStore_Widgets_-_Untitled_Page_-_2024-09-11T111837.374-151841.png",
    "https://static.thcdn.com/images/small/webp/widgets/121-us/38/original-original-SkinStore_Widgets_-_Untitled_Page_-_2024-09-19T110035.715-150039-152038.png",
    "https://static.thcdn.com/images/small/webp/widgets/121-us/44/original-original-SkinStore_Widgets_-_Untitled_Page_-_2024-09-11T112009.304-152040-152044.png",
    "https://static.thcdn.com/images/small/webp/widgets/121-us/48/original-original-original-SkinStore_Widgets_-_Untitled_Page_-_2024-08-14T153805.699-193808-190343-152048.png",
  ];

  return (
    <Box my={4} textAlign="center" mt={20}>
      <Heading as="p" size="lg" mb={4}>
        Dermstore welcomes you with 15% off. code: WELCOME 15
      </Heading>
      <Slider {...settings}>
        {images.map((src, index) => (
          <Box
            key={index}
            borderRadius="full"
            overflow="hidden"
            boxSize="300px"
            mx={4}
          >
            <Image
              src={src}
              alt={`Slide ${index}`}
              width="100%"
              height="100%"
              objectFit="cover"
              cursor="pointer"
              borderRadius="full"
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default CircularImageCarousel;
