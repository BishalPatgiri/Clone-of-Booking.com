import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const FooterEveryPage = () => {
  return (
    <Box w="100%">
      <Box w="80%" m="auto">
        <Box color="#003580" pt="2rem" pb="1rem">
          <Link to="/signIn">
            <Text textAlign="center" fontSize="x-large">
              Extranet login
            </Text>
          </Link>
        </Box>
        <Box textAlign="center">
          <p>Copyright © 1996–2022 Booking.com™. All rights reserved.</p>
        </Box>
        <Box textAlign="center" pt="2rem" pb="1rem">
          <p>
            Booking.com is part of Booking Holdings Inc., the world leader in
            online travel and related services.
          </p>
        </Box>

        <SimpleGrid columns={[2, null, 6]} spacing="40px" pt="1rem" pb="2rem">
          <img
            src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_booking/27c8d1832de6a3123b6ee45b59ae2f81b0d9d0d0.png"
            alt="loding"
          />
          <img
            src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_priceline/f80e129541f2a952d470df2447373390f3dd4e44.png"
            alt="loding"
          />
          <img
            src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_kayak/83ef7122074473a6566094e957ff834badb58ce6.png"
            alt="loding"
          />
          <img
            src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_agoda/1c9191b6a3651bf030e41e99a153b64f449845ed.png"
            alt="loding"
          />
          <img
            src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_rentalcars/6bc5ec89d870111592a378bbe7a2086f0b01abc4.png"
            alt="loding"
          />
          <img
            src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_opentable/a4b50503eda6c15773d6e61c238230eb42fb050d.png"
            alt="loding"
          />
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default FooterEveryPage;
