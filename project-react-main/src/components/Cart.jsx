import React from "react";
import { useSelector } from "react-redux";
import {
  FaShippingFast,
  FaGift,
  FaMobileAlt,
  FaCheckCircle,
} from "react-icons/fa";
import {
  Box,
  VStack,
  Image,
  Text,
  Button,
  HStack,
  Icon,
  Flex,
  Divider,
  Stack,
  Badge,
  Select,
} from "@chakra-ui/react";

export const Cart = () => {
  const cart = useSelector((state) => state.cart); // Access cart from Redux

  if (cart.length === 0) {
    return <h1>Your cart is empty</h1>; // Handle empty cart case
  }

  return (
    <>
      {/* Offers Section */}
      <Box bg="#F2F2F2" py={4} px={4}>
        <HStack spacing={8} justify="center">
          {/* Free Shipping Icon and Text */}
          <HStack>
            <Icon as={FaShippingFast} />
            <Text cursor="pointer" fontSize="sm">
              FREE US Shipping $50+
            </Text>
          </HStack>

          {/* Dermstore Rewards */}
          <HStack>
            <Icon as={FaGift} />
            <Text cursor="pointer" fontSize="sm">
              Dermstore Rewards
            </Text>
          </HStack>

          {/* Ask an Expert */}
          <HStack>
            <Icon as={FaCheckCircle} />
            <Text cursor="pointer" fontSize="sm">
              Ask an Expert
            </Text>
          </HStack>

          {/* App Order Discount */}
          <HStack>
            <Icon as={FaMobileAlt} />
            <Text cursor="pointer" fontSize="sm">
              15% off your first App Order
            </Text>
          </HStack>

          {/* Refer a Friend */}
          <HStack>
            <Icon as={FaCheckCircle} />
            <Text cursor="pointer" fontSize="sm">
              Refer a Friend, Get $20
            </Text>
          </HStack>
        </HStack>
      </Box>

      {/* Promotion Banner */}
      <Box bg="#CCCCCC" p={4}>
        <Text
          textAlign="center"
          fontSize="md"
          cursor="pointer"
          fontWeight="bold"
        >
          Save with Auto-Replenishment & get Two Free Gifts with any $200+
          purchase. SHOP NOW
        </Text>
      </Box>

      {/* Cart Messages */}
      <VStack spacing={2} my={4} w="80%" mx="auto">
        <Box bg="blue.50" p={4} w="100%" borderRadius="md">
          <Text color="blue.800">
            Tame frizz while achieving gorgeous style using R+Co COOL WIND pH
            Perfect Air-Dry Creme (Worth $36).{" "}
            <Text as="span" color="red.500" cursor="pointer">
              Add To Cart
            </Text>
          </Text>
        </Box>

        <Box bg="blue.50" p={4} w="100%" borderRadius="md">
          Spend another $75.00 to get another free gift
        </Box>

        {/* Qualification Messages */}
        <Box bg="green.50" p={4} w="100%" borderRadius="md">
          <Text color="green.800">
            You have qualified for:{" "}
            <strong>Gift selection with a $125+ purchase</strong> - Don't forget
            to make your selection below
          </Text>
        </Box>

        <Box bg="green.50" p={4} w="100%" borderRadius="md">
          <Text color="green.800">
            You have qualified for: <strong>Partner Offer: Amazon Music</strong>{" "}
            - 3 Months FREE + 4 Months FREE for Prime Members - Don't forget to
            make your selection below
          </Text>
        </Box>

        <Box bg="green.50" p={4} w="100%" borderRadius="md">
          <Text color="green.800">
            You have qualified for:{" "}
            <strong>Thank You for Shopping with Dermstore</strong> - Offer in
            Box
          </Text>
        </Box>
      </VStack>

      {/* Cart Items */}
      <Box w="80%" mx="auto" p={4} borderWidth="1px" shadow="md">
        <Flex justify="space-between" mb={4}>
          <Text fontWeight="bold">Items</Text>
          <Text fontWeight="bold">Price</Text>
          <Text fontWeight="bold">Quantity</Text>
          <Text fontWeight="bold">Subtotal</Text>
        </Flex>
        {cart.map((item, index) => (
          <Flex key={index} alignItems="center" justify="space-between" mb={4}>
            <Image src={item.image1} alt={item.title} boxSize="80px" />
            <Text>{item.title}</Text>
            <Text>${item.price}</Text>
            <Flex align="center">
              <Button size="xs">-</Button>
              <Text px={2}>{item.quantity}</Text>
              <Button size="xs">+</Button>
            </Flex>

            <Button variant="ghost" color="red.500">
              Remove
            </Button>
          </Flex>
        ))}
        <Divider />
        <Flex justify="space-between" my={4}>
          <Text fontWeight="bold">Total:</Text>
        </Flex>
        <Button w="full" bg="black" color="white" _hover={{ bg: "gray.800" }}>
          Checkout Securely Now
        </Button>
      </Box>

      {/* Gift Selection and Offers */}
      <Stack direction="row" w="80%" mx="auto" my={4} spacing={4}>
        {/* Gift Selection */}
        <Box flex="1" p={4} borderWidth="1px" borderRadius="md" shadow="md">
          <Text fontWeight="bold">Gift Selection with a $125+ purchase</Text>
          <Text color="green.500">Qualified</Text>
          <Select placeholder="Select a gift" mt={2}>
            <option value="gift1">Gift 1</option>
            <option value="gift2">Gift 2</option>
          </Select>
        </Box>

        {/* Amazon Music Offer */}
        <Box flex="1" p={4} borderWidth="1px" borderRadius="md" shadow="md">
          <Text fontWeight="bold">Dermstore X Amazon Music</Text>
          <Text color="green.500">Qualified</Text>
          <Select placeholder="Select offer" mt={2}>
            <option value="offer1">Amazon Music 3 Months FREE</option>
            <option value="offer2">
              Amazon Music 4 Months FREE for Prime Members
            </option>
          </Select>
        </Box>
      </Stack>
    </>
  );
};
