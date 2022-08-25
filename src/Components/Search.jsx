import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Text,
  Button
} from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";
export const Search = () => {
  return (
    <>
      <Box width={"100%"} backgroundColor={"blue"} height={"200px"}>
        <Box width={"60%"} margin={"auto"} >
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
            children={<PhoneIcon color="gray.300" />}
          />
          <Input
            type="tel"
            placeholder="Where are yu going?"
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
           borderColor={"yellow"} border={"3px solid yellow"}
            borderLeft={"none"}
            placeholder="Check-Out"
            size="md"
            type="date"
            height={"auto"}
          />
        </Box>
        <Select placeholder="Select option"  borderColor={"yellow"} border={"3px solid yellow"}  borderRadius={"10%"} height={"47px"}>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
        <Button paddingTop={"20px"}  paddingBottom={"20px"} paddingLeft={"50px"} paddingRight={"50px"} colorScheme="blue"  borderColor={"yellow"} border={"3px solid yellow"}>
           Search
          </Button>
      </Box>
    </>
  );
};
