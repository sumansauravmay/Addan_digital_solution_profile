import React from "react";
import {
    Stack,
    Button,
    Box,
    Skeleton,
  } from "@chakra-ui/react";


export default function Loading() {
    const [isLoaded, setIsLoaded] = React.useState(false);
    return (
      <Stack padding={4} spacing={1}
         w="100%"
      >
        <Skeleton
          height='100px'
          isLoaded={isLoaded}
        //   bg='green.500'
          color='white'
          fadeDuration={1}
        >
          <Box
          color={'black'}
    fontSize="2xl"
    textAlign="center"
          >Please Wait, Data is fetching!</Box>
        </Skeleton>
  
        <Box textAlign='center'>
          <Button onClick={() => setIsLoaded((v) => !v)}>toggle</Button>
        </Box>
      </Stack>
    )
  }