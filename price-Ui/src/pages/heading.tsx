import React from "react";
import {Box, Heading, Text} from "@chakra-ui/react"
export default function heading(){
    return(
        <Box textAlign="center" bg="purple" pt='100px' pb='250' color='white'>
            <Heading as='h2' size='xl' >
                Simple Pricing For our Business
              </Heading>
              <Text pt='20px'>
                Plans thath are carefully crafted to suit your business
              </Text>
        </Box>
    )
}