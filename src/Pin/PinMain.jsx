import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Pin from "./Pin";

const PinMain = () => {
  const navigator = useNavigate();

  const [otp, setOtp] = useState("");
  const [vaild] = useState("1234");
  const [auth, setauth] = useState(false);
  useEffect(() => {
    if (vaild === otp) {
      alert("Login successful!");
      navigator("/");
      setauth(true);
    }
    
  }, [otp, vaild,navigator]);
  

  return (
    <Box w="100%" h="1200px" textAlign="center" bg="black" color="white">
      <Box w="80%" m="auto">
        <Flex justifyContent="space-between">
        <Box pt="8rem">
            <Flex>

            </Flex>
        <Heading as="h1" size="lg" pb="1.5rem">Enter your opt... </Heading>
            <Pin length={4} setOtp={setOtp} isOtpVaild={auth} />
            <Text>
              The OTP Input is {otp}
            </Text>
          </Box>
          <Box>
            <img
              src="https://i.pinimg.com/originals/b4/d1/33/b4d133975e2545f757338da16220e3db.gif"
              alt="loding"
              height="80%"
              width="80%"
            />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default PinMain;
