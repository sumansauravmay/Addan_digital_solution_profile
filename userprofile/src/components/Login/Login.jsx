import React, { useState } from "react";
import styles from "./Login.module.css";
import { FcBusinessman } from "react-icons/fc";
import {
  Input,
  InputRightElement,
  InputLeftElement,
  InputGroup,
  Stack,
  Button,
  Heading,
} from "@chakra-ui/react";
import { PhoneIcon, ViewIcon } from "@chakra-ui/icons";
import { useToast } from "@chakra-ui/react";
import axios from "axios";

const Login = () => {
  const toast = useToast();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const logindata = {
    phone: phone,
    password: password,
  };

  const handleloginbtn = () => {
    if (!phone || !password) {
      toast({
        title: "Login Failed!",
        description: "Please put right creds",
        status: "error",
        position: "top",
        duration: 9000,
        isClosable: true,
      });
    } else {
      return axios
        .post(
          `https://addan-digital-solution-profile-1.onrender.com/login`,
          logindata
        )
        .then((res) => {
          console.log(res.data);
          if (res.data.token) {
            checktoken(res.data.token);
          }
        })
        .catch((err) => {
          checkFailedloginfunc(err.response.data);
        });
    }
  };

  const checktoken = (token) => {
    if (token) {
      toast({
        title: "Congratulations!",
        description: "Login Successful!",
        status: "success",
        position: "top",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const checkFailedloginfunc = (data) => {
    if (data.msg) {
      toast({
        title: "Login Failed",
        description: data.msg,
        status: "error",
        position: "top",
        duration: 9000,
        isClosable: true,
      });
    } else if (data.msg2) {
      toast({
        title: "Login Failed",
        description: data.msg2,
        status: "error",
        position: "top",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <div className={styles.login}>
      <div className={styles.loginpic}>
        <FcBusinessman size="150px" />
      </div>

      <Heading textAlign={"center"}>Login</Heading>

      <Stack spacing={4} className={styles.logininput}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <PhoneIcon color="gray.500" />
          </InputLeftElement>
          <Input
            className={styles.input}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="number"
            placeholder="Phone number"
          />
        </InputGroup>

        <InputGroup size="md">
          <InputLeftElement pointerEvents="none">
            <ViewIcon color="gray.500" />
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

        <Button
          onClick={handleloginbtn}
          width={"40%"}
          m="5px auto auto auto"
          colorScheme="teal"
          size="lg"
        >
          Button
        </Button>
      </Stack>
    </div>
  );
};

export default Login;
