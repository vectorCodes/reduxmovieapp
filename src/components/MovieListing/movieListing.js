import React from "react";
import { Box, Center, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/moviesSlice";
import MovieCard from "../MovieCard/movieCard";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  let renderMovies,
    renderShows = "";

  renderMovies = (
    <SimpleGrid
      columns={{ base: 2, lg: 5 }}
      spacing={{ base: 4, lg: 2 }}
      mt={6}
      px={4}
    >
      {movies.Response === "True" ? (
        movies.Search.map((movie, id) => {
          return (
            <Center>
              <MovieCard key={id} movies={movie} />
            </Center>
          );
        })
      ) : (
        <Box>
          <Text textAlign={"center"} fontSize={"3xl"} fontWeight={"bold"}>
            No Movies Found
          </Text>
        </Box>
      )}
    </SimpleGrid>
  );

  renderShows = (
    <SimpleGrid
      columns={{ base: 2, lg: 5 }}
      spacing={{ base: 4, lg: 2 }}
      mt={6}
      px={4}
    >
      {shows.Response === "True" ? (
        shows.Search.map((show, id) => {
          return (
            <Center>
              <MovieCard key={id} movies={show} />
            </Center>
          );
        })
      ) : (
        <Box>
          <Text textAlign={"center"} fontSize={"3xl"} fontWeight={"bold"}>
            No Shows Found
          </Text>
        </Box>
      )}
    </SimpleGrid>
  );

  return (
    <Box>
      <Center mt={6}>
        <Heading>Movies</Heading>
      </Center>
      <Box mt={4}>{renderMovies}</Box>
      <Center mt={6}>
        <Heading>Shows</Heading>
      </Center>
      <Box mt={4}>{renderShows}</Box>
    </Box>
  );
};

export default MovieListing;
