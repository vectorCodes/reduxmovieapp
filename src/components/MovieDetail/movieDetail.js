import React, { useEffect } from "react";
import {
  Box,
  Text,
  Center,
  Image,
  Stack,
  chakra,
  Spinner,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovieOrShowDetails,
  getSelectedMovieOrShow,
  removeSelectedMovieOrShow,
} from "../../features/movies/moviesSlice";

const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();

  const data = useSelector(getSelectedMovieOrShow);

  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetails(imdbID));

    return () => {
      dispatch(removeSelectedMovieOrShow());
    };
  }, [dispatch, imdbID]);

  return (
    <Box mt={6} pb={6}>
      {Object.keys(data).length === 0 ? (
        <Center mt={10} pb={20}>
          <Spinner />
        </Center>
      ) : (
        <Center>
          <Stack
            spacing={4}
            alignItems={"flex-start"}
            direction={{ base: "column", lg: "row" }}
          >
            <Box>
              <Image src={data.Poster} alt={data.Title} />
            </Box>
            <Stack>
              <Text fontSize={{ base: "lg", lg: "2xl" }} fontWeight={"bold"}>
                {data.Title}
              </Text>
              <Text fontSize={{ base: "lg", lg: "2xl" }} fontWeight={"bold"}>
                Year :{" "}
                <chakra.span fontWeight={"semibold"}>{data.Year} </chakra.span>
              </Text>
              <Text fontSize={{ base: "lg", lg: "2xl" }} fontWeight={"bold"}>
                Released :{" "}
                <chakra.span fontWeight={"semibold"}>
                  {data.Released}{" "}
                </chakra.span>
              </Text>
              <Text fontSize={{ base: "lg", lg: "2xl" }} fontWeight={"bold"}>
                Box Office :{" "}
                <chakra.span fontWeight={"semibold"}>
                  {data.BoxOffice}{" "}
                </chakra.span>
              </Text>
              {data.Ratings?.map((rating, id) => {
                return (
                  <Text key={id}>
                    <chakra.span
                      fontSize={{ base: "lg", lg: "2xl" }}
                      fontWeight={"bold"}
                    >
                      {" "}
                      {rating.Source}
                    </chakra.span>{" "}
                    : {rating.Value}
                  </Text>
                );
              })}
              <Text fontSize={{ base: "lg", lg: "2xl" }} fontWeight={"bold"}>
                Genre :{" "}
                <chakra.span fontWeight={"semibold"}>{data.Genre} </chakra.span>
              </Text>
              <Text fontSize={{ base: "lg", lg: "2xl" }} fontWeight={"bold"}>
                Director :{" "}
                <chakra.span fontWeight={"semibold"}>
                  {data.Director}{" "}
                </chakra.span>
              </Text>
              <Text fontSize={{ base: "lg", lg: "2xl" }} fontWeight={"bold"}>
                Write :{" "}
                <chakra.span fontWeight={"semibold"}>
                  {data.Writer}{" "}
                </chakra.span>
              </Text>
            </Stack>
          </Stack>
        </Center>
      )}
    </Box>
  );
};

export default MovieDetail;
