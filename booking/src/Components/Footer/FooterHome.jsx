import React from "react";
import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  Checkbox,
  SimpleGrid,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const FooterHome = () => {
  return (
    <>
      <Box w="100" bg="#00224f" pb="2rem">
        <Box w="80%" m="auto" color="white" pt="3rem">
          <Text fontSize="xx-large" textAlign="center">
            Save time, save money!
          </Text>
          <Text fontSize="x-large" fontWeight="light" textAlign="center">
            Sign up and we'll send the best deals to you
          </Text>
        </Box>
        <Box m="auto" w="40%" pt="1rem">
          <Flex gap="0.5rem">
            <Input h="4rem" bg="white" placeholder="Your email" />
            <Button p="2rem" bg="#0071c2">
              Subscribe
            </Button>
          </Flex>
          <Box color="white" pt="0.7rem" pb="3rem">
            <Flex>
              <Checkbox />
              <Text pl="0.4rem">
                {" "}
                Send me a link to get the FREE Booking.com app!{" "}
              </Text>
            </Flex>
          </Box>
        </Box>
      </Box>
      <Box w="100%" bg="#003580" pb="1rem">
        <Box w="80%" m="auto" color="white" pt="1rem" pb="1.5rem">
          <Box w="10rem" border="1px solid white" m="auto">
            {" "}
            <Text p="0.7rem">List your propety</Text>
          </Box>
        </Box>
        <hr />
        <Box w="80%" m="auto" pt="1rem">
          <Flex color="white" justifyContent="space-between">
            <Box>
              <Text textDecoration="underline">Mobile version</Text>
            </Box>
            <Box>
              <Text textDecoration="underline">Your account</Text>
            </Box>
            <Box>
              <Text textDecoration="underline">
                Make changes to your booking online
              </Text>
            </Box>
            <Box>
              <Text textDecoration="underline">Customer Service help</Text>
            </Box>
            <Box>
              <Text textDecoration="underline">Become an affiliate</Text>
            </Box>
            <Box>
              <Text textDecoration="underline">Booking.com for Business</Text>
            </Box>
          </Flex>
        </Box>
      </Box>

      <Box w="100%">
        <Box w="80%" m="auto" pt="2rem">
          <Flex color="#003580" justifyContent="space-between">
            <Box>
              <Flex flexDirection="column">
                <Text>Countries</Text>
                <Text>Regions</Text>
                <Text>Cities</Text>
                <Text>Districts</Text>
                <Text>Airports</Text>
                <Text>Hotels</Text>
                <Text>Places of interest</Text>
              </Flex>
            </Box>
            <Box>
              <Flex flexDirection="column">
                <Text>Homes</Text>
                <Text>Apartments</Text>
                <Text>Resorts</Text>
                <Text>Vilas</Text>
                <Text>Hostels</Text>
                <Text>B&Bs</Text>
                <Text>Guest houses</Text>
              </Flex>
            </Box>
            <Box>
              <Flex flexDirection="column">
                <Text>Unique places to stay</Text>
                <Text>All destinations</Text>
                <Text>Discover</Text>
                <Text>Reviews</Text>
                <Text>Unpacked: Travel articles</Text>
                <Text>Travel Communities</Text>
                <Text>Seasonal and holiday deals</Text>
              </Flex>
            </Box>
            <Box>
              <Flex flexDirection="column">
                <Text>Car hire</Text>
                <Text>Flight finder</Text>
                <Text>Restaurant reservations</Text>
                <Text>Booking.com for Travel Agents</Text>
              </Flex>
            </Box>
            <Box>
              <Flex flexDirection="column">
                <Text>Coronavirus (COVID-19) FAQs</Text>
                <Text>About Booking.com</Text>
                <Text>Customer Service help</Text>
                <Text>Partner help</Text>
                <Text>Careers</Text>
                <Text>Sustainability</Text>
                <Text>Press centre</Text>
                <Text>Safety resource centre</Text>
                <Text>Investor relations</Text>
                <Text>Terms & Conditions</Text>
                <Text>Partner dispute</Text>
                <Text>How we work</Text>
                <Text>Privacy & Cookie Statement</Text>
                <Text>Corporate contact</Text>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>

      <Box w="100%">
        <Box w="80%" m="auto">
          <Box color="#003580" pt="2rem" pb="1rem">
            <Link to="/signIn">
              <Text textAlign="center" fontSize="x-large">
                Extranet login
              </Text>
            </Link>
          </Box>
          <p>Copyright © 1996–2022 Booking.com™. All rights reserved.</p>
          <Box textAlign="center" pt="2rem" pb="1rem">
            <p>
              Booking.com is part of Booking Holdings Inc., the world leader in
              online travel and related services.
            </p>
          </Box>


          <SimpleGrid columns={[2, null, 6]} spacing='40px' pt="1rem" pb="2rem">
             <img src='https://cf.bstatic.com/static/img/tfl/group_logos/logo_booking/27c8d1832de6a3123b6ee45b59ae2f81b0d9d0d0.png' alt="loding"/>
              <img src='https://cf.bstatic.com/static/img/tfl/group_logos/logo_priceline/f80e129541f2a952d470df2447373390f3dd4e44.png'alt="loding" />
              <img src='https://cf.bstatic.com/static/img/tfl/group_logos/logo_kayak/83ef7122074473a6566094e957ff834badb58ce6.png' alt="loding"/>
              <img src='https://cf.bstatic.com/static/img/tfl/group_logos/logo_agoda/1c9191b6a3651bf030e41e99a153b64f449845ed.png' alt="loding"/>
              <img src='https://cf.bstatic.com/static/img/tfl/group_logos/logo_rentalcars/6bc5ec89d870111592a378bbe7a2086f0b01abc4.png'alt="loding" />
              <img src='https://cf.bstatic.com/static/img/tfl/group_logos/logo_opentable/a4b50503eda6c15773d6e61c238230eb42fb050d.png' alt="loding" />
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
};

export default FooterHome;
