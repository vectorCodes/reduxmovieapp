import React from "react";
import { Box, Center, Text, Button } from "@chakra-ui/react";
import { provider, auth } from "../../firebase/config";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const handleLogIn = () => {
    signInWithPopup(auth, provider).then((result) => {
      window.location.href = "/";
    });
  };

  return (
    <Box>
      <Center mt={10}>
        <Text fontSize={{ base: "xl", lg: "3xl" }} fontWeight={"bold"}>
          Click here Login with Google
        </Text>
      </Center>
      <Center mt={8} pb={28}>
        <Button colorScheme={"green"} onClick={handleLogIn}>
          Login with Google
        </Button>
      </Center>
    </Box>
  );
};

export default Login;
