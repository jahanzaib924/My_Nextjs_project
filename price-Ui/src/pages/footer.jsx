import React from "react";
import {Box, Flex, Heading, Text} from "@chakra-ui/react"
export default function footer(){
    return(
        <Box textAlign="center" pt='0px' pb='250' >
            <Heading  size='lg' >
                   More then 25,000 team use filex
              </Heading>
              
              <Box  display={{base:'row' ,md:'flex', lg:'flex'}} textAlign='center' gap='30' bg='puple' color='lightgray'
               px={{base:'110px',md:'250',lg:'330px'}} pt='30px' >

              
                <Heading >wetarnsfer</Heading>
                <Heading>stamps</Heading>
                <Heading>manter.</Heading>
                <Heading>sugarcans</Heading>
              
              
              </Box>
        </Box>
    )
}