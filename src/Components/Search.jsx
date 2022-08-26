import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Flex,
  Text,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Portal,
} from "@chakra-ui/react";
import { PhoneIcon, SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";
export const Search = () => {
  return (
    <>
      <Box width={"100%"} backgroundColor={"blue"} height={"200px"}>
        <Box width={"60%"} margin={"auto"}>
          <Text
            color={"white"}
            fontSize={["22px", "25px", "28px", "40px"]}
            textAlign={"start"}
          >
            Where To Next,Guest
          </Text>
          <Text
            color={"white"}
            fontSize={["18px", "20px", "25px", "30px"]}
            textAlign={"start"}
          >
            Find exclusive Genius rewards in every corner of the world!
          </Text>
        </Box>
      </Box>
      <Box
        display={"flex"}
        width={"60%"}
        margin={"auto"}
        marginTop={"-20px"}
        backgroundColor={"white"}
        height={"auto"}
      >
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon marginTop={"5px"} color={"gray.400"} />}
          />
          <Input
            type="tel"
            placeholder="Where are you going?"
            borderColor={"yellow"}
            border={"3px solid yellow"}
            height={"auto"}
          />
        </InputGroup>
        <Box display={"flex"}>
          <Input
            borderColor={"yellow"}
            border={"3px solid yellow"}
            borderRight={"none"}
            placeholder="Check-In"
            size="md"
            type="date"
            aria-hidden={true}
            height={"auto"}
          />{" "}
          <Input
            borderColor={"yellow"}
            border={"3px solid yellow"}
            borderLeft={"none"}
            placeholder="Check-Out"
            size="md"
            type="date"
            height={"auto"}
          />
        </Box>
        {/*  */}
        <Pop />
        <Button
          paddingTop={"20px"}
          paddingBottom={"20px"}
          paddingLeft={"50px"}
          paddingRight={"50px"}
          colorScheme="blue"
          borderColor={"yellow"}
          border={"3px solid yellow"}
        >
          Search
        </Button>
      </Box>
    </>
  );
};

function Pop() {
  const [adult, setAdult] = useState(0);
  const [children, setchildren] = useState(0);
  const [room, setroom] = useState(0);
  const handleIncre = () => {
    setAdult((prev) => prev + 1);
  };

  const handledec = () => {
    setAdult((prev) => prev - 1);
  };
  const handlechildrenIncre = () => {
    setchildren((prev) => prev + 1);
  };
  const handlechildrenDec = () => {
    setchildren((prev) => prev - 1);
  };
  const handleroomIncre = () => {
    setroom((prev) => prev + 1);
  };
  const handleroomDec = () => {
    setroom((prev) => prev - 1);
  };
  return (
    <Popover>
      <PopoverTrigger>
        <Box
          display={"flex"}
          w="45%"
          justifyContent={"space-evenly"}
          textAlign={"center"}
          border={"3px solid yellow"}
        >
          <Text margin={"4px 0 0 3px"}>{adult} adult</Text>
          <Text marginTop={"4px"}>{children} children</Text>
          <Text margin={"4px 5px 0 0"}>{room} rooms</Text>
        </Box>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverHeader color={"white"}>Header</PopoverHeader>
          <PopoverCloseButton />
          <PopoverBody display={"flex"} justifyContent={"space-around"}>
            <Text width={"40%"}>Adult</Text>
            <Button
              disabled={adult == 0}
              onClick={handledec}
              border={"1px solid blue"}
              color={"black"}
            >
              -
            </Button>
            <Text marginTop={"5px"}>{adult}</Text>
            <Button
              onClick={handleIncre}
              border={"1px solid blue"}
              color={"black"}
            >
              +
            </Button>
          </PopoverBody>
          <PopoverBody display={"flex"} justifyContent={"space-around"}>
            <Text width={"40%"}>Children</Text>
            <Button
              disabled={children == 0}
              onClick={handlechildrenDec}
              border={"1px solid blue"}
              color={"black"}
            >
              -
            </Button>
            <Text marginTop={"5px"}>{children}</Text>
            <Button
              onClick={handlechildrenIncre}
              border={"1px solid blue"}
              color={"black"}
            >
              +
            </Button>
          </PopoverBody>
          <PopoverBody display={"flex"} justifyContent={"space-around"}>
            <Text width={"40%"}>Room</Text>
            <Button
              disabled={room == 0}
              onClick={handleroomDec}
              border={"1px solid blue"}
              color={"black"}
            >
              -
            </Button>
            <Text marginTop={"5px"}>{room}</Text>
            <Button
              onClick={handleroomIncre}
              border={"1px solid blue"}
              color={"black"}
            >
              +
            </Button>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
}
