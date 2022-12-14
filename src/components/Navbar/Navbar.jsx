import {
  Box,
  Flex,
  Text,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { IoAirplaneOutline } from "react-icons/io5";
import { ImHome, ImOffice } from "react-icons/im"
import { RiAncientGateLine, RiBankFill, RiAncientPavilionFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import "../../App.css"
import { getLocalData } from "../utils/localStorage";
const Navbar = () => {

  const email=getLocalData("emailAfter")
  let firstLetter
  if(email){
  firstLetter=email[0]
  // console.log(firstLetter.toUpperCase())
  }

  return (
    <Box bg="#003580" className="Box">
      <Box bg="#003580" w="75%" m="auto" pt="1rem">
        <Stack>
          <Flex justifyContent="space-between">
            <Box >
              <Text color='white' className="navbarHeading">
                <Link to='/'>Booking.com</Link>
              </Text>
            </Box>
            <Box color='white'>
              <Flex justifyContent="space-between" gap="1rem" alignItems={"center"}>
                <Box >
                  <Text className="navbarHeading2" as="h3" size="sm" color='white' cursor='pointer'>
                    INR
                  </Text>
                </Box>
                <Box cursor='pointer' className="navbarHeading2">
                  <img
                    style={{ "borderRadius": "20rem" , 'width': "1.5rem"  ,'height': "1.5rem" }}
                    src="https://cf.bstatic.com/static/img/flags/new/48-squared/in/20aa535a5d3c505dd02fea275ed1a36c0fb1fe08.png"
                    alt="loading"
                  />
                </Box>
                <Box
                  // h='1.8rem'
                  // w='1.5rem'
                  border="2px solid white"
                  borderRadius="50%"
                  color="white"
                  cursor='pointer'
                  className="navbarHeading2"
                >
                 <Text p="0px 6px">?</Text>
                </Box>
                <Box border='1px solid white' p="0.5rem " cursor='pointer' className="navbarHeading2">
                  <Text>List Your property</Text>
                </Box>
                <Link to='/register'> 
                <Box border='0' p="0.5rem " bg="white" color="blue" cursor='pointer' className="navbarHeading3">
                  <Text>Register </Text>
                </Box>
                </Link>
                <Link to='/signIn'>
                <Box border='0' p="0.5rem " bg="white" color="blue" cursor='pointer'className="navbarHeading3">
                  <Text>{firstLetter?firstLetter.toUpperCase():"Sign In"}</Text>
                </Box>
                </Link>
              </Flex>
            </Box>
          </Flex>
          <Box pt=".6rem" pb="1rem">
            <Flex gap=".5rem" color='white'  className="navbarHeading4">
              <Box h="50px" p="10px 15px" cursor='pointer' style={{ border:"1px solid white",borderRadius:"20px",backgroundColor:"#1b5781"}}>
                <Flex>
                <ImHome/>
                <Text pl='0.4rem'><Link  to='/'>Stays</Link></Text>
                </Flex> 
              </Box> 
              <Box p="1rem" cursor='pointer' className="navbarHeading4"> 
                <Flex>
                <IoAirplaneOutline />
                <Text pl='0.4rem'><Link to='/flights'>Flight </Link></Text>
                </Flex>
                </Box>
              <Box p="1rem" cursor='pointer' className="navbarHeading4">
                <Flex>
                <ImOffice />
                <Text pl='0.4rem'><Link to='/flightsHotels'> Flight + Hotel</Link></Text>
                  </Flex> 
                </Box>
              <Box p="1rem" cursor='pointer' className="navbarHeading4">
                <Flex><RiAncientGateLine />
                <Text pl='0.4rem'><Link to='/carRentals' >Car rentals </Link></Text> 
                </Flex>
                </Box>
              <Box p="1rem" cursor='pointer' className="navbarHeading4">
                <Flex><RiAncientPavilionFill />
                <Text pl='0.4rem'><Link to='/attractions' >Attraction </Link></Text>
                </Flex>
                </Box>
              <Box p="1rem" cursor='pointer' className="navbarHeading4">
                <Flex>
                  <RiBankFill />
                <Text pl='0.4rem'><Link to='/airportTaxis'>Airport taxis</Link></Text>
                </Flex>
                </Box>
            </Flex>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Navbar;
