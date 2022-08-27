import { Box, Button, Image, Text } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Slideshow } from "./Slide";
import { TravelSlide } from "./TravelSlide";
export const ExploreIndia = () => {
  const slideImages = [
    {
      url: "https://cf.bstatic.com/xdata/images/region/square250/49646.webp?k=b7f38878b9164ee38e0b99c4d4646dbea76b7bf4add8464b1aa75e4c9d0efc6e&o=",

      caption: "Goa",
      property: "5,242 properties",
    },
    {
      url: "https://cf.bstatic.com/xdata/images/city/square250/971346.webp?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o=",
      caption: "Mumbai",
      property: "1,652 properties",
    },
    {
      url: "https://cf.bstatic.com/xdata/images/city/square250/684765.webp?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o=",
      caption: "New Delhi",
      property: "2,912 properties",
    },
    {
      url: "https://cf.bstatic.com/xdata/images/city/square250/684682.webp?k=30cf9de93f2a0f87eed7d2d0d9b3e6eccd5dcf3a4b68b4e0151c0800ddc84af7&o=",
      caption: "Lonavala",
      property: "751 properties",
    },
    {
      url: "https://cf.bstatic.com/xdata/images/city/square250/684534.webp?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o=",
      caption: "Banglore",
      property: "2,039 properties",
    },
    {
      url: "https://cf.bstatic.com/xdata/images/city/square250/684657.webp?k=66dc5035b43e9bb86b756e381e4fec2558064af4a63a8af17836725a854c03ee&o=",
      caption: "Jaipur",
      property: "1,558 properties",
    },
    {
      url: "https://cf.bstatic.com/xdata/images/city/square250/684769.webp?k=146b18e42b9eb74078f2e80e07e573e8dbac879208b86bae451f99882f566a99&o=",
      caption: "Pondicherry",
      property: "651 properties",
    },
    {
      url: "https://cf.bstatic.com/xdata/images/city/square250/684938.webp?k=9d07ff707ce59768769b5e9a5381a4c705d921209dafd8fd0e2f1a6acdf0c68a&o=",
      caption: "Udaipur",
      property: "816 properties",
    },
    {
      url: "https://cf.bstatic.com/xdata/images/region/square250/68606.webp?k=4b43b9128b79beaab4ca2e8c038ddf5709b0b90608afbca222cfbe08fabda7d2&o=",
      caption: "North Goa",
      property: "3,903 properties",
    },
    {
      url: "https://cf.bstatic.com/xdata/images/city/square250/684919.webp?k=0a73fce29109503c055e288c413d9a1c5bd66fdb26f01c1438e8017b0b64b42f&o=",
      caption: "Ooty",
      property: "470 properties",
    },
  ];

  const slide = [
    {
      url: "https://q-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=",

      caption: "Hotels",
      property: "892,472 hotels",
    },
    {
      url: "https://q-xx.bstatic.com/xdata/images/hotel/300x240/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=",
      caption: "Apartments",
      property: "926,012 apartments",
    },
    {
      url: "https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=",
      caption: "Resorts",
      property: "18,252 resorts",
    },
    {
      url: "https://q-xx.bstatic.com/xdata/images/hotel/300x240/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=",
      caption: "Villas",
      property: "482,715 villas",
    },
    {
      url: "https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450074.jpeg?k=7039b03a94f3b99262c4b3054b0edcbbb91e9dade85b6efc880d45288a06c126&o=",
      caption: "Cottages",
      property: "158,612 cottages",
    },
    {
      url: "https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450090.jpeg?k=52f6b8190edb5a9c91528f8e0f875752ce55a6beb35dc62873601e57944990e4&o=",
      caption: "Glamping",
      property: "14,004 glamping sites",
    },
    {
      url: "https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450058.jpeg?k=2449eb55e8269a66952858c80fd7bdec987f9514cd79d58685651b7d6e9cdfcf&o=",
      caption: "Serviced apartments",
      property: "35,899 serviced apartments",
    },
    {
      url: "https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450113.jpeg?k=76b3780a0e4aacb9d02ac3569b05b3c5e85e0fd875287e9ac334e3b569f320c7&o=",
      caption: "Holiday homes",
      property: "482,715 holiday homes",
    },
  ];
 
  return (
    <>
      <Box
        display={"flex"}
        width={"60%"}
        height={"auto"}
        margin={"auto"}
        marginTop={"30px"}
        boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
      >
        <Image
          width={"15%"}
          height={"150px"}
          src={
            "https://r-xx.bstatic.com/data/mm/index_banner_getaway22_summer_2.jpg"
          }
        />
        <Box textAlign={"start"} marginLeft={"10px"} marginTop={"20px"}>
          <Text fontWeight={"bold"}>Save 15% or more </Text>
          <Text>
            This summer, make your dream trip a reality. Book and stay for less
            before 30 Sep 2022
          </Text>
          <Button marginTop={"15px"} marginBottom={"10px"} colorScheme="blue">
            Explore deals
          </Button>
        </Box>
      </Box>
      <Box width={"60%"} margin={"auto"} marginTop={"20px"}>
        <Box
          height={"260px"}
          width={"100%"}
          display={"flex"}
          marginBottom={"10px"}
        >
          <Box
            display={"flex"}
            width={"50%"}
            height={"auto"}
            backgroundPosition={"center"}
            backgroundRepeat={"no-repeat"}
            backgroundImage="url(https://cf.bstatic.com/xdata/images/city/540x270/684764.webp?k=6c3c9e920a39ca4f9eddcdfaa916999ea5d2765844610dd59349f4271f7596b3&amp;o=)"
          >
            <Box display={"flex"} marginTop={"10px"}>
              {" "}
              <Text
                marginLeft={"12px"}
                color={"white"}
                fontSize={["18px", "20px", "25px", "28px"]}
                fontWeight={"bold"}
              >
                New Delhi
              </Text>
              <Image
                height={"25px"}
                width={"25px"}
                marginTop={"10px"}
                marginLeft={"8px"}
                verticalAlign={"center"}
                src="https://cf.bstatic.com/static/img/flags/24/in/56cd199c9f53cba5ccd7667c3a1a196f95e60a10.png"
              />
            </Box>
          </Box>
          <Box
            width={"50%"}
            marginLeft={"50px"}
            height={"260px"}
            backgroundPosition={"center"}
            backgroundRepeat={"no-repeat"}
            backgroundImage="url(https://cf.bstatic.com/xdata/images/city/540x270/684499.webp?k=05c9fc4396edfc04f1e0f3d00ffbe182ebd969c9d83857a8e10a4e046fae21cd&amp;o=)"
          >
            <Box display={"flex"} marginTop={"10px"}>
              {" "}
              <Text
                marginLeft={"12px"}
                color={"white"}
                fontSize={["18px", "20px", "25px", "28px"]}
                fontWeight={"bold"}
              >
                Agra
              </Text>
              <Image
                height={"25px"}
                width={"25px"}
                marginTop={"10px"}
                marginLeft={"8px"}
                verticalAlign={"center"}
                src="https://cf.bstatic.com/static/img/flags/24/in/56cd199c9f53cba5ccd7667c3a1a196f95e60a10.png"
              />
            </Box>
          </Box>
        </Box>
        <Box width={"100%"} display={"flex"}>
          <Box
            display={"flex"}
            width={"33%"}
            height={"260px"}
            background-position={"center"}
            backgroundRepeat={"no-repeat"}
            backgroundPosition={"center"}
            backgroundImage="url(https://cf.bstatic.com/xdata/images/city/540x270/684655.webp?k=2afb45c7a46dedbc5b5b360599dbbb7a7165ac823b22dd66d7602ea4c49de1c4&amp;o=)"
          >
            <Box display={"flex"} marginTop={"10px"}>
              {" "}
              <Text
                marginLeft={"12px"}
                color={"white"}
                fontSize={["18px", "20px", "25px", "28px"]}
                fontWeight={"bold"}
              >
                Agra
              </Text>
              <Image
                height={"25px"}
                width={"25px"}
                marginTop={"12px"}
                marginLeft={"8px"}
                verticalAlign={"center"}
                src="https://cf.bstatic.com/static/img/flags/24/in/56cd199c9f53cba5ccd7667c3a1a196f95e60a10.png"
              />
            </Box>
          </Box>
          <Box
            width={"33%"}
            marginLeft={"10px"}
            height={"260px"}
            backgroundRepeat={"no-repeat"}
            backgroundPosition={"center"}
            backgroundImage="url(https://cf.bstatic.com/xdata/images/city/540x270/684939.webp?k=125d0a8cab106ebfe2b99eafa9ea548ab13b5846a4034bbe35387accfbd94240&amp;o=)"
          >
            <Box display={"flex"} marginTop={"10px"}>
              {" "}
              <Text
                marginLeft={"12px"}
                color={"white"}
                fontSize={["18px", "20px", "25px", "28px"]}
                fontWeight={"bold"}
              >
                Varanasi
              </Text>
              <Image
                height={"25px"}
                width={"25px"}
                marginTop={"12px"}
                marginLeft={"8px"}
                verticalAlign={"center"}
                src="https://cf.bstatic.com/static/img/flags/24/in/56cd199c9f53cba5ccd7667c3a1a196f95e60a10.png"
              />
            </Box>
          </Box>
          <Box
            width={"33%"}
            marginLeft={"10px"}
            height={"260px"}
            backgroundRepeat={"no-repeat"}
            backgroundPosition={"center"}
            backgroundImage="url(https://cf.bstatic.com/xdata/images/city/540x270/971345.webp?k=9bf85dfa10a224e2855ca2f8ca3fcd96916a962d87cdfcc48d6d57c09bef3c65&amp;o=)"
          >
            <Box display={"flex"} marginTop={"10px"}>
              {" "}
              <Text
                marginLeft={"12px"}
                color={"white"}
                fontSize={["18px", "20px", "25px", "28px"]}
                fontWeight={"bold"}
              >
                Mumbai
              </Text>
              <Image
                height={"25px"}
                width={"25px"}
                marginTop={"12px"}
                marginLeft={"8px"}
                verticalAlign={"center"}
                src="https://cf.bstatic.com/static/img/flags/24/in/56cd199c9f53cba5ccd7667c3a1a196f95e60a10.png"
              />
            </Box>
          </Box>
        </Box>
      </Box>
      {/* Explore India Slider */}
      <Box
        textAlign={"start"}
        width={"60%"}
        margin={"auto"}
        marginBottom={"10px"}
      >
        <Text
          fontWeight={"bold"}
          fontSize={["12px", "15px", "18px", "22px"]}
          marginTop={"10px"}
        >
          Explore India
        </Text>
        <Text marginBottom={"15px"}>
          These popular destinations have a lot to offer
        </Text>
        <Slideshow image={slideImages} no={6} />
      </Box>
      <Box
        textAlign={"start"}
        width={"60%"}
        margin={"auto"}
        marginBottom={"20px"}
      >
        <Text
          fontWeight={"bold"}
          fontSize={["12px", "15px", "18px", "22px"]}
          marginBottom={"20px"}
          marginTop={"15px"}
        >
          Browse by property type
        </Text>
        <Slideshow image={slide} no={4} />
      </Box>
      <Box  textAlign={"start"}
        width={"60%"}
        margin={"auto"}
        marginTop={"30px"}
        marginBottom={"20px"} >
      <TravelSlide no={4}/>
      </Box>
     
    </>
  );
};
