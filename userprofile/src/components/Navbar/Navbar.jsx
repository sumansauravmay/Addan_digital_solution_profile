import React from "react";
import {
  Flex,
  Spacer,
  Heading,
  ButtonGroup,
  Button,
  Box,
} from "@chakra-ui/react";
import { GoHomeFill } from "react-icons/go";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex gap="2" mt={5} w={"70%"} ml={"250px"}>
      <Box p="2">
        <Link to="/">
          <GoHomeFill size="40px" />
          <p>Home</p>
        </Link>
      </Box>
      <Spacer />
      <ButtonGroup gap="5">
        <Link to="/profile">
          <Button colorScheme="teal">Profile</Button>
        </Link>
        <Link to="/register">
          <Button colorScheme="teal">Sign Up</Button>
        </Link>
        <Link to="/">
          <Button colorScheme="teal">Log in</Button>
        </Link>
      </ButtonGroup>
    </Flex>
  );
};

export default Navbar;
