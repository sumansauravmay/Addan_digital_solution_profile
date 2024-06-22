import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Stack,
  Button,
  Heading,
  Image,
  Text,
  CardBody,
  Card,
  Divider,
  CardFooter,
  Flex,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState({});
  console.log("user", user);
  const toast = useToast();
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("token")) || "";
  console.log("token", token);

  const getData = () => {
    if (token) {
      return axios
        .get(`https://addan-digital-solution-profile-1.onrender.com/profile`, {
          headers: { Authorization: `${token}` },
        })
        .then((res) => {
          console.log("data", res.data);
          setUser(res.data);
        })
        .catch((err) => {
          console.log("err", err.response.data.message);
          toast({
            title: "Please Login First",
            description: err.response.data.message,
            status: "error",
            duration: 9000,
            position: "top",
            isClosable: true,
          });
          navigate("/");
        });
    } else {
      toast({
        title: "Please Login First",
        description: "Error",
        status: "error",
        duration: 9000,
        position: "top",
        isClosable: true,
      });
      navigate("/");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Card maxW="70%" m="50px auto auto auto">
      <CardBody m="6px auto auto 300px">
        <Image
          w="50%"
          src={user.photo}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="xl">Name: {user.name}</Heading>
          <Text fontSize="2xl">Email: {user.email}</Text>
          <Text fontSize="2xl">Phone: {user.phone}</Text>

          <Text fontSize="2xl">Education: {user.education}</Text>

          <Text fontSize="2xl">Skill Sets: {user.skillSets}</Text>

          <Text fontSize="2xl">Past Experience: {user.pastExperience}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Flex gap="5" ml="300px">
          <Button variant="solid" colorScheme="blue">
            Update
          </Button>
          <Button variant="solid" colorScheme="blue">
            Logout
          </Button>
          <Button variant="solid" colorScheme="blue">
            Delete Account
          </Button>
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default Profile;
