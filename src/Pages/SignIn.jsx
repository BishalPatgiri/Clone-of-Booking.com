import { Box, Button, Flex, Heading, Input, Select, Text } from "@chakra-ui/react";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getLocalData, saveLocalData } from "../Components/utils/localStorage";

const SignIn = () => {

//const authData = JSON.parse(localStorage.getItem("auth")) || []; //  comment or remove this line

  // const em=getLocalData("email")
  // const ps=getLocalData("password")
  // console.log(em,ps)

  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");


 // Authentication part
  const handleAuth = () => {
  //  const authData = getLocalData(key) // link the utils folder
  const authData=[{
    email:getLocalData("email"),
    password:getLocalData("password")
}]

    let isUser = false;
    authData.map((el) => {
      if (el.email === email && el.password === password) {
         isUser = true;
         saveLocalData("emailAfter",email)
      }
      return isUser
    });
    if (isUser) {
      alert("Login successful!");
      navigate("/");
    } else {
      alert("User Not Exist");
    }
  };

  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="80%"
      backdropBlur="2px"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  const handleSubmit = () => {
    onClose();
  };

 

  return (
    <Box w="100%">
      <Box w="30%" m="auto" pb="1rem">
        <Heading as="h3" size="lg" pt="1rem" pb="2rem">
          Sign in or create an account
        </Heading>
        <Text pb="0.8rem">Email address</Text>
        <Input
          type="email"
          placeholder="Enter your email address"
          onChange={(e) => setemail(e.target.value)}
        />
        <Text pb="0.8rem" pt="1.5rem">
          Password
        </Text>
        <Input
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          w="100%"
          mt="1rem"
          bg="#003580"
          color="white"
          onClick={handleAuth}
        >
          {" "}
          Continue with email
        </Button>
        <Box textAlign="center" pt="1rem" pb="1rem">
          <p>or use one of these options</p>
        </Box>
        <hr />
        <Box pt="1rem">
          <Flex justifyContent="space-between">
            <Box w="10%" h="12%">
              <a href="https://m.facebook.com/">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
              </a>
            </Box>
            <Box w="10%" h="10%">
              <a href="https://accounts.google.com/signin/v2/identifier?service=accountsettings&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue%26pli%3D1&ec=GAlAwAE&flowName=GlifWebSignIn&flowEntry=AddSession">
                <img
                  src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                  alt=""
                />
              </a>
            </Box>
           
              <Box w="10%" h="10%" color="black"
              ml="4" cursor="pointer"
              onClick={() => {
                setOverlay(<OverlayTwo />);
                onOpen();
              }}>
                <img
                  src="	https://www.freeiconspng.com/uploads/cell-phone-icon-apple-call-cell-cellphone--21.png"
                  alt=""
                />
              </Box>
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
              {overlay}
              <ModalContent>
                <ModalHeader>Sign in with your phone</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text>Name</Text>
                  <Input type="text" placeholder="Enter your name" />
                  <Flex justifyContent="space-between" >

                  <Box>
                  <Text>Age</Text>
                  <Input type="text" placeholder="Enter your age" width="9rem"
                  />
                  </Box>
                  <Box>
                    <Text>Gender</Text>
                    <Select w="10rem" placeholder="------">
                      <option value="M">Male</option>
                      <option value="F">Female</option>
                    </Select>
                  </Box>
                  </Flex>
                  <Text>Phone number</Text>
                  <Input type="number" placeholder="Enter phone number" />
                </ModalBody>
                <ModalFooter>
                  <Link to="/pin" >
                  <Button onClick={handleSubmit}>Submit</Button>
                  </Link>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Flex>
          <Box pt="2rem" pb="2rem" textAlign="center" color="#003580">
            <Text>More ways to sign in</Text>
          </Box>
          <hr />
          <Box pt="2rem" pb="2rem" textAlign="center" color="#003580">
            <p>
              By signing in or creating an account, you agree with our Terms &
              conditions and Privacy statement
            </p>
          </Box>
          <hr />
          <Box pt="2rem" pb="2rem" textAlign="center">
            <p>All rights reserved. Copyright (2006 - 2022) - Booking.com™</p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SignIn;
