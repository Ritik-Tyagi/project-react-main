import { Flex, Text, Box } from "@chakra-ui/react";

import { CiLocationOn } from "react-icons/ci";
import ImageCarousel from "../components1/ImageCarousel";
import CircularImageCarousel from "../components1/CircularImageCarousel";
import ImageCarousel1 from "../components1/ImageCarousel1";
import ImageCarousel2 from "../components1/ImageCarousel2";
import ImageCarousel3 from "../components1/ImageCarousel3";

export const Home = () => {
  return (
    <>
      <Flex
        justifyContent="center"
        bg="#2E3337"
        color="white"
        p={1}
        mt={5}
        _hover={{ bg: "white", color: "black", cursor: "pointer" }}
      >
        <h1 style={{ fontSize: "25px" }}>
          Shop 20% off RevitaLash at Dermstore. Ends 9/28.SHOP NOW
        </h1>
      </Flex>
      <ImageCarousel />
      <CircularImageCarousel />
      <ImageCarousel1 />
      <ImageCarousel2 />
      <ImageCarousel3 />
    </>
  );
};
