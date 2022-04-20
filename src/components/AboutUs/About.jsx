import React from "react";
import './About.css'
import {
    chakra,
    Box,
    useColorModeValue,
    Button,
    Stack,
    Image,
    Text,
    Icon, Flex
} from "@chakra-ui/react";

const KuttyHero = () => {
    return (
        <Box px={8} py={24} mx="auto">
            <Box
                w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
                mx="auto"
                textAlign={{ base: "left", md: "center" }}
            >
                <chakra.h1
                    mb={6}
                    fontSize={{ base: "4xl", md: "6xl" }}
                    fontFamily = 'poppins'
                    fontWeight="bold"
                    lineHeight="none"
                    letterSpacing={{ base: "normal", md: "tight" }}
                    color={useColorModeValue("gray.900", "gray.100")}
                >
                    We offer  {" "}
                    <Text
                        display={{ base: "block", lg: "inline" }}
                        w="full"
                        bgClip="text"
                        bgGradient="linear(to-r, green.400,purple.500)"
                        fontWeight="extrabold"
                    >
                       
                        websites  to create a
                    visually 
                    </Text>{" "}
                   appealing online
                    presence for your business
                </chakra.h1>


            </Box>

            <Box
                w={{ base: "full", md: 10 / 12 }}
                mx="auto"
                mt={20}
                textAlign="center"
            >
                <Flex direction={['column', 'row']} justifyContent ='center' alignItems='center'>
                    <div className="image">
                        <img
                            src="https://images.pexels.com/photos/10324713/pexels-photo-10324713.jpeg?cs=srgb&dl=pexels-taha-samet-arslan-10324713.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w"
                            alt=""
                        />
                    </div>
                    <div className="image">
                        <img
                            src="https://images.pexels.com/photos/10324713/pexels-photo-10324713.jpeg?cs=srgb&dl=pexels-taha-samet-arslan-10324713.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w"
                            alt=""
                        />
                    </div>
                    <div className="image">
                        <img
                            src="https://images.pexels.com/photos/10324713/pexels-photo-10324713.jpeg?cs=srgb&dl=pexels-taha-samet-arslan-10324713.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w"
                            alt=""
                        />
                    </div>
                    <div className="image">
                        <img
                            src="https://images.pexels.com/photos/10324713/pexels-photo-10324713.jpeg?cs=srgb&dl=pexels-taha-samet-arslan-10324713.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w"
                            alt=""
                        />
                    </div>
                </Flex>
            </Box>
        </Box>
    );
};

export default KuttyHero;