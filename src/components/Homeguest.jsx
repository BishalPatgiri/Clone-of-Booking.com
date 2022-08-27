import { Box, Button, Image, Text } from "@chakra-ui/react";

const homes = [
  {
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max500/72305478.jpg?k=9047c9c15093a4075d292258cb5215ae5b5d39304a707bb6756debba40f6d66b&amp;o=",
    desc: "Beautiful apartment by the sea front",
    comment: "Nice",
    price: "Starting from ₹ 39,717",
    rating: "9.4",
    comment1: "Superb",
    review: "65 review",
  },
  {
    image:
    "https://cf.bstatic.com/xdata/images/hotel/max500/112346687.jpg?k=b0c1b36d31151ed463b8960c21e868584043522f4f380c0f382994d4b3e7ada2&amp;o=",
    desc: "A casa di Edi",
    comment: "Rome",
    price: "Starting from ₹ 57,423",
    rating: "10",
    comment1: "Exceptional",
    review: "2 review",
  },
  {
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max500/95058961.jpg?k=a0a0599db0984c5cf954cdabcfd2b0be11a169b82b58e560001c59f512d7dbb2&amp;o=",
    desc: "Oriente Palace Apartments",
    comment: "Madrid",
    price: "Starting from ₹ 8,534",
    rating: "9.0",
    comment1: "Superb",
    review: "2,395 review",
  },
  {
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max500/117127047.jpg?k=6957fd928964998b8d0ef97f0a7e882a63b17c436eeb60959dc3b005350d1c8e&amp;o=",
    desc: "Michalska Old Town Apartment",
    comment: "Prague",
    price: "Starting from ₹ 28,783",
    rating: "8.8",
    comment1: "Fabulous",
    review: "80 review",
  },
];

export const Homeguest = () => {
  return (
    <>
      <Box width={"75%"} margin={"auto"}>
        <Text
          textAlign={"start"}
          fontWeight={"bold"}
          fontSize={["12px", "15px", "18px", "22px"]}
          marginBottom={"20px"}
        >
          Homes guests love
        </Text>
        <Homelove arr1={homes} />
      </Box>
    </>
  );
};

function Homelove({ arr1 }) {
  return (
    <>
      <Box display={"flex"} gap={"20px"}>
        {arr1.map((item) => {
          return (
            <Box key={item.price} textAlign={"start"}>
              <Image src={item.image} />
              <Text>{item.desc}</Text>
              <Text color={"gray"}>{item.comment}</Text>
              <Text fontWeight={"500"}>{item.price}</Text>
              <Box display={"flex"} >
                <Button backgroundColor={"#003580"} color={"white"} p="0">
                  {item.rating}
                </Button>
                <Text margin={"10px 0 0 10px"} fontWeight={"500"}>
                  {item.comment1}
                </Text>
                <Text color={"gray"} margin={"10px 0 0 10px"}>{item.review}</Text>
              </Box>
            </Box>
          );
        })}
      </Box>
    </>
  );
}
