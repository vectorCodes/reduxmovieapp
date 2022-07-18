import React, { useEffect, useState } from "react";
import { Box, Center, Text, Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import MovieListing from "../MovieListing/movieListing";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/moviesSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/config";
import CircleLoader from "react-spinners/CircleLoader";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const loading = useSelector((state) => state.movies.loading);

  const movieText = "Harry";
  const showsText = "Friends";

  const override = {
    display: "block",
    margin: "0 auto",
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showsText));
  }, [dispatch]);

  if (loading) {
    return (
      <Center py={72}>
        <CircleLoader loading={loading} cssOverride={override} size={70} />
      </Center>
    );
  }

  return (
    <Box>
      {user ? (
        <Box pb={4}>
          <MovieListing />
        </Box>
      ) : (
        <>
          <Center mt={32} pb={6}>
            <Text fontSize={{ base: "xl", lg: "3xl" }} fontWeight={"bold"}>
              Please Log in to show movies and shows
            </Text>
          </Center>
          <Link to={`/login`}>
            <Center pb={32}>
              <Button colorScheme={"green"}>Log In</Button>
            </Center>
          </Link>
        </>
      )}
    </Box>
  );
};

export default Home;
