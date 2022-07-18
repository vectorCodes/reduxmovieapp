import { Box, Center, HStack, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box p={4} bgColor={"black"}>
      <Text
        textColor={"white"}
        fontWeight={"bold"}
        textAlign={"center"}
        fontSize={{ base: "xl", lg: "3xl" }}
      >
        OMDB MOVIES
      </Text>
      <Text
        textColor={"gray.500"}
        fontWeight={"bold"}
        textAlign={"center"}
        fontSize={{ base: "md", lg: "lg" }}
        mt={4}
      >
        Copyright © 2020 OMDB Movies
      </Text>
      <Center>
        <HStack mt={4} cursor={"pointer"}>
          <Text
            textColor={"gray.500"}
            fontWeight={"bold"}
            textAlign={"center"}
            fontSize={{ base: "md", lg: "lg" }}
          >
            Contact Us
          </Text>
          <Box bg={"white"} h={"5px"} w={"5px"} rounded={"full"}></Box>
          <Text
            textColor={"gray.500"}
            fontWeight={"bold"}
            textAlign={"center"}
            fontSize={{ base: "md", lg: "lg" }}
          >
            Privacy Policy
          </Text>
          <Box bg={"white"} h={"5px"} w={"5px"} rounded={"full"}></Box>
          <Text
            textColor={"gray.500"}
            fontWeight={"bold"}
            textAlign={"center"}
            fontSize={{ base: "md", lg: "lg" }}
          >
            Terms of Use
          </Text>
        </HStack>
      </Center>
    </Box>
  );
};

export default Footer;
