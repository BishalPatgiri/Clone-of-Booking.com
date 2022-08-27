import { Box, Flex, Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const region = [
  [
    {
      country: "Ibiza",
      properties: "1,642 properties",
    },
    {
      country: "Lake District",
      properties: "2,404 properties",
    },
    {
      country: "England",
      properties: "74,018 properties",
    },
    {
      country: "Uttar Pradesh",
      properties: "4,377 properties",
    },
  ],
  [
    {
      country: "Bihar",
      properties: "763 properties",
    },
    {
      country: "Jersey",
      properties: "89 properties",
    },
    {
      country: "Santorini",
      properties: "1,7462 properties",
    },
    {
      country: "Texel",
      properties: "411 properties",
    },
  ],
  [
    {
      country: "Bora Bora",
      properties: "59 properties",
    },
    {
      country: "Phuket Province",
      properties: "5,495 properties",
    },
    {
      country: "Bali",
      properties: "12,684 properties",
    },
    {
      country: "Zanzibar",
      properties: "834 properties",
    },
  ],
  [
    {
      country: "Mykonos",
      properties: "1,452 properties",
    },
    {
      country: "Cornwall",
      properties: "5,275 properties",
    },
    {
      country: "Isle of Wight",
      properties: "934 properties",
    },
    {
      country: "Guernsey",
      properties: "61 properties",
    },
  ],
  [
    {
      country: "Hawaii",
      properties: "5,519 properties",
    },
    {
      country: "Tenerife",
      properties: "9,662 properties",
    },
    {
      country: "Ras Al Khaimah",
      properties: "113 properties",
    },
  ],
];

const cities = [
  [
    {
      country: "Dubai, United Arab Emirates",
      properties: `5,706 holiday rentals, 5,496 apartments,230 cottages, 230 holiday homes, 230 villas`,
    },
    {
      country: "Singapore, Singapore",
      properties:
        "69 holiday rentals, 58 apartments, 46 serviced apartments, 35 hostels, 21 capsule hotels",
    },
    {
      country: "Bangkok, Thailand",
      properties:
        "547 holiday rentals, 367 apartments, 250 hostels, 182 B&Bs, 132 serviced apartments",
    },
  ],
  [
    {
      country: "Paris, France",
      properties:
        "3,476 holiday rentals, 3,432 apartments, 158 serviced apartments, 67 B&Bs, 33 homestays",
    },
    {
      country: "London, United Kingdom",
      properties:
        "4,537 holidays rentals, 3,870 apartments, 393 cottages, 383 villas, 382 holiday homes",
    },
    {
      country: "New Delhi, India",
      properties:
        "304 holiday rentals, 155 B&Bs, 128 apartments, 112 homestays, 85 guest houses",
    },
  ],
  [
    {
      country: "York",
      properties: "828 hotelss",
    },
    {
      country: "Newcastle upon Tyne",
      properties: "387 hotels",
    },
    {
      country: "Manchester",
      properties: "1087 hotels",
    },
  ],
  [
    {
      country: "Liverpool",
      properties: "1079 hotels",
    },
    {
      country: "Leeds",
      properties: "382 hotels",
    },
    {
      country: "Glasgow",
      properties: "916 hotels",
    },
  ],
  [
    {
      country: "Edinburghs",
      properties: "3342 hotels",
    },
    {
      country: "Carbis Bay",
      properties: "68 hotels",
    },
  ],
];
const places = [
  [
    {
      country: "Burj Al Arab Tower",
      properties: "4,326 properties",
    },
    {
      country: "Comal River Tubing",
      properties: "327 properties",
    },
    {
      country: "Eiffel Tower",
      properties: "7,568 properties",
    },
    {
      country: "Disneyland Paris",
      properties: "7,568 properties",
    },
  ],
  [
    {
      country: "Wembley Stadium",
      properties: "14,549 properties",
    },
    {
      country: "O2 Arena",
      properties: "14,549 properties",
    },
    {
      country: "Times Square",
      properties: "1,384 properties",
    },
    {
      country: "Heathrow Terminal 5",
      properties: "63 properties",
    },
  ],

  [
    {
      country: "River Walk",
      properties: "672 properties",
    },
    {
      country: "Guadalupe River Tubing",
      properties: "327 properties",
    },
    {
      country: "Kalahari Waterpark Resort",
      properties: "43 properties",
    },
    {
      country: "Portmeirion",
      properties: "9 properties",
    },
  ],
  [
    {
      country: "State Park",
      properties: "21 properties",
    },
    {
      country: "Disneyland",
      properties: "247 properties",
    },
    {
      country: "Al Maha Wildlife Reserve",
      properties: "1 properties",
    },
    {
      country: "Heathrow Terminal 2",
      properties: "",
    },
  ],
  [
    {
      country: "The Shard",
      properties: " 14,549 properties",
    },
    {
      country: "Universal Studios Orlando",
      properties: "3,689 properties",
    },
    {
      country: "Niagara Falls State Park",
      properties: "75 properties",
    },
    {
      country: "Ocean City Boardwalk",
      properties: "774 properties",
    },
  ],
];

export const Destination = () => {
  return (
    <>
      <Box width={"60%"} margin={"auto"}>
        <Box>
          <Text
            textAlign={"start"}
            margin={"10px 0 15px 0"}
            fontWeight={"bold"}
            fontSize={["12px", "15px", "18px", "22px"]}
          >
            Destinations we love
          </Text>
        </Box>
        <Tabs variant="soft-rounded" colorScheme="blue">
          <TabList>
            <Tab>Regions</Tab>
            <Tab>Cities</Tab>
            <Tab>Places of interest</Tab>
          </TabList>
          <TabPanels>
            <TabPanel
              display={"flex"}
              textAlign={"start"}
              //   justifyContent={"space-between"}
            >
              {/*  */}
              <Cards arr={region} />
            </TabPanel>
            <TabPanel
              display={"flex"}
              textAlign={"start"}
              justifyContent={"space-between"}
            >
              <Cards arr={cities} />
            </TabPanel>
            <TabPanel
              display={"flex"}
              textAlign={"start"}
              justifyContent={"space-between"}
            >
              <Cards arr={places} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};

function Cards({ arr }) {
  return (
    <Flex w={"100%"} justifyContent={"space-evenly"}>
      <Flex w={"20%"} direction={"column"}>
        {arr[0].map((item) => (
          <Box>
            <Text
              fontWeight={"600"}
              fontSize={["10px", "13px", "15px", "16px"]}
            >
              {item.country}
            </Text>
            <Text mb={"1.2em"} color={"gray"} fontSize={"xs"}>
              {item.properties}
            </Text>
          </Box>
        ))}
      </Flex>
      <Flex w={"20%"} direction={"column"}>
        {arr[1].map((item) => (
          <Box>
            <Text
              fontWeight={"600"}
              fontSize={["10px", "13px", "15px", "16px"]}
            >
              {item.country}
            </Text>
            <Text color={"gray"} mb={"1.2em"} fontSize={"xs"}>
              {item.properties}
            </Text>
          </Box>
        ))}
      </Flex>
      <Flex w={"20%"} direction={"column"}>
        {arr[2].map((item) => (
          <Box>
            <Text
              fontWeight={"600"}
              fontSize={["10px", "13px", "15px", "16px"]}
            >
              {item.country}
            </Text>
            <Text color={"gray"} mb={"1.2em"} fontSize={"xs"}>
              {item.properties}
            </Text>
          </Box>
        ))}
      </Flex>
      <Flex w={"20%"} direction={"column"}>
        {arr[3].map((item) => (
          <Box>
            <Text
              fontWeight={"600"}
              fontSize={["10px", "13px", "15px", "16px"]}
            >
              {item.country}
            </Text>
            <Text color={"gray"} mb={"1.2em"} fontSize={"xs"}>
              {item.properties}
            </Text>
          </Box>
        ))}
      </Flex>
      <Flex w={"20%"} direction={"column"}>
        {arr[4].map((item) => (
          <Box>
            <Text
              fontWeight={"600"}
              fontSize={["10px", "13px", "15px", "16px"]}
            >
              {item.country}
            </Text>
            <Text color={"gray"} mb={"1.2em"} fontSize={"xs"}>
              {item.properties}
            </Text>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
}
