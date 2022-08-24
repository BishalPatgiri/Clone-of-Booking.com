import {
  Box,
  Flex,
  Text,
  Heading,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { IoAirplaneOutline } from "react-icons/io5";
import { ImHome, ImOffice } from "react-icons/im"
import { RiAncientGateLine, RiBankFill, RiAncientPavilionFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import "../../App.css"
const Navbar = () => {
  return (
    <Box bg="#003580" className="Box">
      <Box bg="#003580" w="80%" m="auto" pt="1rem">
        <Stack>
          <Flex justifyContent="space-between">
            <Box >
              <Text color='white' className="navbarHeading">
                <Link to='/'>Booking.com</Link>
              </Text>
            </Box>
            <Box color='white'>
              <Flex justifyContent="space-between" gap="1rem">
                {" "}
                <Box >
                  <Text className="navbarHeading2" as="h3" size="sm" color='white' cursor='pointer'>
                    INR
                  </Text>
                </Box>
                <Box cursor='pointer' className="navbarHeading2">
                  <img
                    style={{ "border-radius": "20rem" , 'width': "1.5rem"  ,'height': "1.5rem" }}
                    src="https://cf.bstatic.com/static/img/flags/new/48-squared/in/20aa535a5d3c505dd02fea275ed1a36c0fb1fe08.png"
                    alt="loading"
                  />
                </Box>
                <Box
                  h='1.8rem'
                  w='1.5rem'
                  border="1px solid white"
                  borderRadius="5rem"
                  color="white"
                  cursor='pointer'
                  className="navbarHeading2"
                >
                 <Text p="1px 1px 1px 5px">?</Text>
                </Box>
                <Box border='1px solid white' p="0.5rem " cursor='pointer' className="navbarHeading2">
                  <Text>List Your property</Text>
                </Box>
                <Link to='/register'> 
                <Box border='1px solid white' p="0.5rem " bg="white" color="blue" cursor='pointer' className="navbarHeading3">
                  <Text>Register </Text>
                </Box>
                </Link>
                <Link to='/signIn'>
                <Box border='1px solid white' p="0.5rem " bg="white" color="blue" cursor='pointer'className="navbarHeading3">
                  <Text>Sign In</Text>
                </Box>
                </Link>
              </Flex>
            </Box>
          </Flex>
          <Box pt="1rem" pb="1rem"  >
            <Flex gap="2.8rem" color='white'  className="navbarHeading4">
              <Box p="1rem" cursor='pointer' className="navbarHeading4">
                <Flex>
                <ImHome/>
                <Text pl='0.4rem'><Link to='/stays'>Stays</Link></Text>
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



// import {
//   Box,
//   Flex,
//   Text,
//   IconButton,
//   Button,
//   Stack,
//   Collapse,
//   Icon,
//   Link,
//   Popover,
//   PopoverTrigger,
//   PopoverContent,
//   useColorModeValue,
//   useBreakpointValue,
//   useDisclosure,
//   Heading,
// } from '@chakra-ui/react';
// import {
//   HamburgerIcon,
//   CloseIcon,
//   ChevronDownIcon,
//   ChevronRightIcon,
// } from '@chakra-ui/icons';

// export default function Navbar() {
//   const { isOpen, onToggle } = useDisclosure();

//   return (
//     <Box>

//       <Box>


//       <Flex justifyContent="space-between">
//            <Box>
//                <Heading as="h2" size="xl" color='white'>
//                  Booking.com
//                </Heading>
//              </Box>
//              <Box>
//                <Flex justifyContent="space-between" gap="2rem">
//                  {" "}
//                  <Box>
//                   <Heading as="h2" size="md" color='white'>
//                      INR
//                    </Heading>
//                  </Box>
//                  <Box>
//                    <img
//                     style={{ "border-radius": "20rem" }}
//                      src="https://cf.bstatic.com/static/img/flags/new/48-squared/in/20aa535a5d3c505dd02fea275ed1a36c0fb1fe08.png"
//                      alt="loading"
//                    />
//                  </Box>
//                  <Box
//                    border="0.1rem solid white"
//                    border-radius="10px"
//                    color="white"
//                  >
//                    ?
//                  </Box>
//                  <Box>
//                    <Button>List Your property</Button>
//                  </Box>
//                  <Box>
//                   <Button> Register </Button>
//                  </Box>
//                  <Box>
//                   <Button>Sign In</Button>
//                  </Box>
//                </Flex>
//             </Box>
// </Flex>

        
//       </Box>



//       <Flex
//         bg={useColorModeValue('#003580', 'gray.800')}
//         color={useColorModeValue('gray.600', 'white')}
//         minH={'60px'}
//         py={{ base: 2 }}
//         px={{ base: 4 }}
//         borderBottom={1}
//         borderStyle={'solid'}
//         borderColor={useColorModeValue('gray.200', 'gray.900')}
//         align={'center'}>
//         <Flex
//           flex={{ base: 1, md: 'auto' }}
//           ml={{ base: -2 }}
//           display={{ base: 'flex', md: 'none' }}>
//           <IconButton
//             onClick={onToggle}
//             icon={
//               isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
//             }
//             variant={'ghost'}
//             aria-label={'Toggle Navigation'}
//           />
//         </Flex>
//         <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
//           <Text
//             textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
//             fontFamily={'heading'}
//             color={useColorModeValue('white', 'white')}>
//             Booking
//           </Text>

//           <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
//             <DesktopNav />
//           </Flex>
//         </Flex>

//         <Stack
//           flex={{ base: 1, md: 0 }}
//           justify={'flex-end'}
//           direction={'row'}
//           spacing={6}>
//           <Button
//             as={'a'}
//             fontSize={'sm'}
//             fontWeight={400}
//             variant={'link'}
//             href={'#'}>
//             Sign In
//           </Button>
//           <Button
//             display={{ base: 'none', md: 'inline-flex' }}
//             fontSize={'sm'}
//             fontWeight={600}
//             color={'white'}
//             bg={'pink.400'}
//             href={'#'}
//             _hover={{
//               bg: 'pink.300',
//             }}>
//             Sign Up
//           </Button>
//         </Stack>
//       </Flex>

//       <Collapse in={isOpen} animateOpacity>
//         <MobileNav />
//       </Collapse>
//     </Box>
//   );
// }

// const DesktopNav = () => {
//   const linkColor = useColorModeValue('gray.600', 'gray.200');
//   const linkHoverColor = useColorModeValue('gray.800', 'white');
//   const popoverContentBgColor = useColorModeValue('white', 'gray.800');

//   return (
//     <Stack direction={'row'} spacing={4}>
//       {NAV_ITEMS.map((navItem) => (
//         <Box key={navItem.label}>
//           <Popover trigger={'hover'} placement={'bottom-start'}>
//             <PopoverTrigger>
//               <Link
//                 p={2}
//                 href={navItem.href ?? '#'}
//                 fontSize={'sm'}
//                 fontWeight={500}
//                 color={linkColor}
//                 _hover={{
//                   textDecoration: 'none',
//                   color: linkHoverColor,
//                 }}>
//                 {navItem.label}
//               </Link>
//             </PopoverTrigger>

//             {navItem.children && (
//               <PopoverContent
//                 border={0}
//                 boxShadow={'xl'}
//                 bg={popoverContentBgColor}
//                 p={4}
//                 rounded={'xl'}
//                 minW={'sm'}>
//                 <Stack>
//                   {navItem.children.map((child) => (
//                     <DesktopSubNav key={child.label} {...child} />
//                   ))}
//                 </Stack>
//               </PopoverContent>
//             )}
//           </Popover>
//         </Box>
//       ))}
//     </Stack>
//   );
// };

// const DesktopSubNav = ({ label, href, subLabel }) => {
//   return (
//     <Link
//       href={href}
//       role={'group'}
//       display={'block'}
//       p={2}
//       rounded={'md'}
//       _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
//       <Stack direction={'row'} align={'center'}>
//         <Box>
//           <Text
//             transition={'all .3s ease'}
//             _groupHover={{ color: 'pink.400' }}
//             fontWeight={500}>
//             {label}
//           </Text>
//           <Text fontSize={'sm'}>{subLabel}</Text>
//         </Box>
//         <Flex
//           transition={'all .3s ease'}
//           transform={'translateX(-10px)'}
//           opacity={0}
//           _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
//           justify={'flex-end'}
//           align={'center'}
//           flex={1}>
//           <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
//         </Flex>
//       </Stack>
//     </Link>
//   );
// };

// const MobileNav = () => {
//   return (
//     <Stack
//       bg={useColorModeValue('white', 'gray.800')}
//       p={4}
//       display={{ md: 'none' }}>
//       {NAV_ITEMS.map((navItem) => (
//         <MobileNavItem key={navItem.label} {...navItem} />
//       ))}
//     </Stack>
//   );
// };

// const MobileNavItem = ({ label, children, href }) => {
//   const { isOpen, onToggle } = useDisclosure();

//   return (
//     <Stack spacing={4} onClick={children && onToggle}>
//       <Flex
//         py={2}
//         as={Link}
//         href={href ?? '#'}
//         justify={'space-between'}
//         align={'center'}
//         _hover={{
//           textDecoration: 'none',
//         }}>
//         <Text
//           fontWeight={600}
//           color={useColorModeValue('gray.600', 'gray.200')}>
//           {label}
//         </Text>
//         {children && (
//           <Icon
//             as={ChevronDownIcon}
//             transition={'all .25s ease-in-out'}
//             transform={isOpen ? 'rotate(180deg)' : ''}
//             w={6}
//             h={6}
//           />
//         )}
//       </Flex>

//       <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
//         <Stack
//           mt={2}
//           pl={4}
//           borderLeft={1}
//           borderStyle={'solid'}
//           borderColor={useColorModeValue('gray.200', 'gray.700')}
//           align={'start'}>
//           {children &&
//             children.map((child) => (
//               <Link key={child.label} py={2} href={child.href}>
//                 {child.label}
//               </Link>
//             ))}
//         </Stack>
//       </Collapse>
//     </Stack>
//   );
// };

// // interface NavItem {
// //   label: string;
// //   subLabel?: string;
// //   children?: Array<NavItem>;
// //   href?: string;
// // }

// const NAV_ITEMS= [
//   {
//     label: 'Inspiration',
//     children: [
//       {
//         label: 'Explore Design Work',
//         subLabel: 'Trending Design to inspire you',
//         href: '#',
//       },
//       {
//         label: 'New & Noteworthy',
//         subLabel: 'Up-and-coming Designers',
//         href: '#',
//       },
//     ],
//   },
//   {
//     label: 'Find Work',
//     children: [
//       {
//         label: 'Job Board',
//         subLabel: 'Find your dream design job',
//         href: '#',
//       },
//       {
//         label: 'Freelance Projects',
//         subLabel: 'An exclusive list for contract work',
//         href: '#',
//       },
//     ],
//   },
//   {
//     label: 'Learn Design',
//     href: '#',
//   },
//   {
//     label: 'Hire Designers',
//     href: '#',
//   },
// ];