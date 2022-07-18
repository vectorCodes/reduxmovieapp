import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const MovieCard = ({ movies }) => {
  return (
    <Box
      transition={"all 0.3s "}
      _hover={{
        transform: "scale(1.05)",
        cursor: "pointer",
      }}
      w={64}
      bg={"#151F29"}
      rounded={"lg"}
    >
      <Link to={`/movie/${movies.imdbID}`}>
        <Box>
          <Image rounded={"lg"} src={movies.Poster} alt={movies.Title} />
        </Box>
        <Box>
          <Box>
            <Text mt={4} fontWeight={"semibold"} textColor={"white"} px={4}>
              {movies.Title}
            </Text>
            <Text mt={2} textColor={"white"} pb={2} px={4}>
              Year : {movies.Year}
            </Text>
          </Box>
        </Box>
      </Link>
    </Box>
  );
};

export default MovieCard;
