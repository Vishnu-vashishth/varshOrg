import React from 'react'
import {useState} from 'react'
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue, AspectRatio,Center, VStack,  FormControl,Input,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';
const Contact = () => {
  const [input, setInput] = useState('')

  const handleInputChange = (e) => setInput(e.target.value)

  const isError = input === ''
  return (
    <>
      <Flex  p={10} w='100vw' direction={['column', 'row']}>
        <AspectRatio ratio={3/2.5} width = '50%'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.750576242953!2d77.37294071489431!3d28.667186082404193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfa9e7d3b0b87%3A0x971d6b88c09e34fb!2sAadarsh%20Park%20Rd%2C%20Sector%202C%2C%20Vasundhara%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201012!5e0!3m2!1sen!2sin!4v1650181856794!5m2!1sen!2sin" ></iframe>
        </AspectRatio>
       
       <Container flex={1} p={2}>
        <VStack w='100%'  alignContent='center' >
          <Heading size ='2xl'>We’d love to hear from you</Heading>
          <FormControl isInvalid={isError} >
              <FormLabel htmlFor='email'>Email</FormLabel>
              <Input
                htmlSize={35}
                width ='auto'
                id='email'
                type='email'
                value={input}
                onChange={handleInputChange}
                  mb = {4}
              />
              <Input
                htmlSize={35}
                width ='auto'
                id='email'
                type='email'
                value={input}
                onChange={handleInputChange}
                mb = {4}
              />
              {!isError ? (
                <FormHelperText>
                  Enter the email you'd like to receive the newsletter on.
                </FormHelperText>
              ) : (
                <FormErrorMessage>Email is required.</FormErrorMessage>
              )}
            </FormControl>
        </VStack>
       </Container>
        
      </Flex>


    </>
  )
}

export default Contact