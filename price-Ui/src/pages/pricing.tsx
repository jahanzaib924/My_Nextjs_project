import React from "react";
import {
    ChakraProvider, Box, Center, Heading, Flex, Text, Square, Card, CardHeader, CardBody, CardFooter,
    SimpleGrid, Button, UnorderedList, ListItem, Container, VStack
} from '@chakra-ui/react'

export default function Pricing() {
    return (
        <Box maxW='1000px' mx='auto' px={{base:'30px' ,md:'10px', lg:'auto'}} >
         <Flex direction={{base:'column', md:'row' , lg:'row' }}   gap='1'>

        <Box pl='10px' mt='-100px ' mb='200px' >

            <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(300px, 1fr))' padding="0px">
                <Card size='lg'>
                    <CardHeader>
                        <UnorderedList spacing={3}>

                            <Heading size='2xl'> Lite</Heading>
                            <Text fontSize='15px' color='purple' fontFamily='mono'> Hit the ground runing</Text>
                        </UnorderedList>
                    </CardHeader>
                    <CardBody>

                        <UnorderedList spacing={3}>

                            <Heading size='lg'> $49/mo</Heading>
                            <Box>
                            <Heading fontSize='15px' mt='10px'> $O.50/SUBSCRIBER</Heading>
                            <Text>(Per subsciber per month)</Text>
                            </Box>
                            <ListItem>Sell on your terms</ListItem>
                            <ListItem>Website , marketing tools & auromations</ListItem>
                            <ListItem>Bandwith & storage is included</ListItem>
                            <ListItem>Well git you onboard</ListItem>
                        </UnorderedList>
                    </CardBody>
                    <CardFooter>
                        <Button borderRadius="2xl" w={[130, 210,]} bg={"purple"} color={"white"} >Start free trial</Button>

                    </CardFooter>
                </Card>

            </SimpleGrid>
        </Box>

                    
        <Box mt='-200px' mb='100px'>
            <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'  >
                <Card size='lg' boxShadow={{base:'md',md:'md',lg:'dark-lg'}} p='' rounded='md' bg='white' >
                    
                    <CardHeader>
                        <UnorderedList spacing={1} pl='10px'>

                            <Heading size='2xl'> Basic</Heading>
                            <Text fontSize='15px' color='purple' fontFamily='mono'>Power-up your business</Text>
                        </UnorderedList>
                    </CardHeader>
                    <CardBody>

                        <UnorderedList spacing={3}>
                            <Heading size='lg'> $399/mo</Heading>
                            <Heading fontSize='15px' > $O.50/SUBSCRIBER</Heading>
                            <Text>(Per subsciber per month)</Text>
                            <Heading size='sm'> Everything in Basic+</Heading>
                            <ListItem>Live streaming</ListItem>
                            <ListItem>Live chat & countdown</ListItem>
                            <ListItem>Robust integration</ListItem>
                            <ListItem>We'll migrate you for free</ListItem>
                        </UnorderedList>
                    </CardBody>
                    <CardFooter>
                        <Button borderRadius="2xl" w={[130, 210,]} bg={"purple"} color={"white"} >Start free trial</Button>


                    </CardFooter>
                </Card>
            </SimpleGrid>
        </Box>


        <Box mt='-100px' mb='50px'>
            <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(300px, 1fr))' padding="0px">
                <Card size='lg'>
                    <CardHeader>
                        <UnorderedList spacing={3}>

                            <Heading size='2xl'> Plus</Heading>
                            <Text fontSize='15px' color='purple' fontFamily='mono'>Costumized jsut for you</Text>
                        </UnorderedList>
                    </CardHeader>
                    <CardBody>

                        <UnorderedList spacing={3}>
                            <Heading size='lg'> +18888 890 99 80</Heading>
                            <Box>

                            <Heading fontSize='15px'> $O.50/SUBSCRIBER</Heading>
                            <Text>(Per subsciber per month)</Text>
                            </Box>
                            <ListItem>Sell on your own terms</ListItem>
                            <ListItem>Website , marketing tools & auromations</ListItem>
                            <ListItem>Bandwith & storage is included</ListItem>
                            <ListItem>Well git you onboard</ListItem>
                        </UnorderedList>
                    </CardBody>
                    <CardFooter>
                        <Button borderRadius="2xl" w={[130, 210, 300]} bg={"purple"} color={"white"} >Talk to US</Button>

                    </CardFooter>
                </Card>



            </SimpleGrid>
        </Box>

         </Flex>
    </Box>      
        )
}