import React, { useState } from "react";
import styles from "./Register.module.css";
import { FcBusinessman } from "react-icons/fc";
import {
  Input,
  InputRightElement,
  InputLeftElement,
  InputGroup,
  Stack,
  Button,
  Heading,
  Flex,
  Text,
} from "@chakra-ui/react";
import { PhoneIcon, ViewIcon, EmailIcon } from "@chakra-ui/icons";
import { BsChatText } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import axios from "axios";

const Register = () => {
  const toast = useToast();
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const [show, setShow] = React.useState(false);
  const [show2, setShow2] = React.useState(false);
  const handleClick = () => setShow(!show);
  const handleClick2 = () => setShow2(!show2);

  const navigate = useNavigate();

  let userdata = {
    phone: phone,
    email: email,
    name: name,
    password: password,
    repassword: repassword,
  };

  const handleSubmit = () => {
    // e.preventDefault();

    if (
      phone === "" ||
      name === "" ||
      email === "" ||
      password === "" ||
      repassword === ""
    ) {
      toast({
        title: "Registration Failed!",
        description: "One or more input field is empty!",
        status: "error",
        duration: 9000,
        position: "top",
        isClosable: true,
      });
    } else if (password !== repassword) {
      toast({
        title: "Registration Failed!",
        description: "Password doesn't match",
        status: "error",
        duration: 9000,
        position: "top",
        isClosable: true,
      });
    } else {
      axios
        .post(
          `https://addan-digital-solution-profile-1.onrender.com/register`,
          userdata
        )
        .then((res) => {
          console.log(res.data.user);
          toast({
            title: "Registration Successful!",
            description: "Please Login",
            status: "success",
            position: "top",
            duration: 9000,
            isClosable: true,
          });
          navigate("/")
        })
        .catch((err)=>console.log(err))
    }
    
  };

  return (
    <div className={styles.register}>
      <div className={styles.loginpic}>
        <FcBusinessman size="150px" />
      </div>

      <Heading textAlign={"center"} mt={10}>
        Register
      </Heading>

      <Stack spacing={4} className={styles.registerinput}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <PhoneIcon color="black.300" />
          </InputLeftElement>
          <Input
            className={styles.input}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="number"
            placeholder="Phone number"
          />
        </InputGroup>

        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <EmailIcon color="black.300" />
          </InputLeftElement>
          <Input
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
        </InputGroup>

        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <BsChatText color="black.300" />
          </InputLeftElement>
          <Input
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
          />
        </InputGroup>

        <InputGroup size="md">
          <InputLeftElement pointerEvents="none">
            <ViewIcon color="black.300" />
          </InputLeftElement>
          <Input
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>

        <InputGroup size="md">
          <InputLeftElement pointerEvents="none">
            <ViewIcon color="black.300" />
          </InputLeftElement>
          <Input
            className={styles.input}
            value={repassword}
            onChange={(e) => setRepassword(e.target.value)}
            pr="4.5rem"
            type={show2 ? "text" : "password"}
            placeholder="Retype password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick2}>
              {show2 ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>

        <Button
          width={"40%"}
          m="5px auto auto auto"
          colorScheme="teal"
          size="lg"
          onClick={handleSubmit}
        >
          Sign Up
        </Button>

        <Flex gap={5}>
          <Text fontSize={"xl"}>Already have an account: </Text>
          <Link to="/">
            <Text color={"blue.700"} fontSize={"xl"}>
              Login
            </Text>
          </Link>
        </Flex>
      </Stack>
    </div>
  );
};

export default Register;
