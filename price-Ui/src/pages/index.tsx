import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from './heading'
import Pricing from './pricing'
import Footer from './footer'
import {
  ChakraProvider, Box, Center, Heading, Flex, Text, Square, Card, CardHeader, CardBody, CardFooter,
  SimpleGrid, Button, UnorderedList, ListItem, Container, VStack
} from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <ChakraProvider cssVarsRoot={undefined} >
        <Header />
        <Pricing />
        <Footer />
      </ChakraProvider>
    </>
  )
}
