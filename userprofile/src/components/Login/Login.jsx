import React from "react";
import styles from "./Login.module.css";
import { FcBusinessman } from "react-icons/fc";
import {  Input, InputRightElement, InputLeftElement, InputGroup, Stack, Button, Heading } from "@chakra-ui/react";
import { PhoneIcon, ViewIcon } from '@chakra-ui/icons';

const Login = () => {

    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)



  return (
    <div className={styles.login}>
        <div className={styles.loginpic}>
        <FcBusinessman size="150px"/>
        </div>

        <Heading textAlign={'center'}>Login</Heading>
     
        <Stack spacing={4} className={styles.logininput}>
  <InputGroup>
    <InputLeftElement pointerEvents='none'>
      <PhoneIcon color='gray.500' />
    </InputLeftElement>
    <Input type='tel' color='gray.500' placeholder='Phone number' />
  </InputGroup>

  <InputGroup size='md'>
  <InputLeftElement pointerEvents='none'>
      <ViewIcon color='gray.500' />
    </InputLeftElement>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>



    <Button
    width={'40%'}
    m="5px auto auto auto"
    colorScheme='teal' size='lg'>
    Button
  </Button>



</Stack>

    </div>
  )
};

export default Login;
