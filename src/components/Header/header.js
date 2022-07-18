import React, { useEffect, useState } from "react";
import {
  Box,
  HStack,
  Image,
  Text,
  Spacer,
  Button,
  Input,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/config";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/moviesSlice";

const Header = () => {
  const [term, setTerm] = useState("");
  const [logInImage, setLogInImage] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLogInImage(user);
    });
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    if (term === "") {
      return alert("Please enter a search movie or show name");
    }
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm("");
  };

  const handleLogOut = () => {
    auth.signOut();
    window.location.reload();
  };

  return (
    <Box bg={"#18222E"} px={{ base: 4, lg: 32 }} py={4}>
      <HStack spacing={6}>
        <Link to={`/`}>
          <Text
            textColor={"white"}
            fontWeight={"bold"}
            fontSize={{ base: "lg", lg: "2xl" }}
            cursor={"pointer"}
          >
            Movies
          </Text>
        </Link>
        {logInImage ? (
          <form onSubmit={submitHandler}>
            <HStack>
              <Input
                type={"search"}
                placeholder={"serach movies and shows..."}
                textColor={"white"}
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                w={{ base: 40, lg: "auto" }}
              />
              <Button leftIcon={<BsSearch />} type={"submit"}></Button>
            </HStack>
          </form>
        ) : null}
        <Spacer />
        <Box cursor={"pointer"}>
          {logInImage ? (
            <HStack spacing={6}>
              <Image src={logInImage.photoURL} rounded={"full"} w={10} />
              <Button
                onClick={handleLogOut}
                variant={"unstyled"}
                textColor={"red.500"}
              >
                Log out
              </Button>
            </HStack>
          ) : (
            <Link to={`/login`}>
              <Image src="/assets/user.png" w={10} />
            </Link>
          )}
        </Box>
      </HStack>
    </Box>
  );
};

export default Header;
