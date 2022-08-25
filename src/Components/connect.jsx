import { Box, Image, Text } from "@chakra-ui/react"


export const Connect =()=>{
    return (
        <>
        <Box width={"60%"} margin={"auto"}>
         <Box textAlign={"start"} margin={"10px 0 15px 0"}>
            <Text fontWeight={"bold"} fontSize={["12px","15px","18px","22px"]} >Homes guests love</Text>
            <Text fontWeight={"bold"} fontSize={["12px","15px","18px","22px"]}>Connect with other travellers</Text>
         </Box>
         <Box display={"flex"} >
            <Box  textAlign={"start"} marginRight={"10px"}>
                <Image src={"https://cf.bstatic.com/static/img/communities/cover-photo/300x300/india/a047bf294ce2d2e145fdcdd3097b9a7f4e6df229.jpg"}/>
                <Text fontWeight={"bold"}>India</Text>
                <Text>Travel Community</Text>
                <Text>155,073 travellers</Text>
            </Box>
            <Box textAlign={"start"} marginRight={"10px"}>
                <Image src={"https://cf.bstatic.com/static/img/communities/cover-photo/300x300/travel-discussions/35a717b9feba5c8f800e2a8949dfa5014e4e79b4.jpg"}/>
                <Text fontWeight={"bold"}>Trave Talk</Text>
                <Text>General discussion</Text>
                <Text>559,436 travellers</Text>
            </Box>
            <Box textAlign={"start"} marginRight={"10px"}>
                <Image src={"https://cf.bstatic.com/static/img/communities/communities-index/photo-300x300/b2d5ae20ed65039fe73edbeea8b34ccfddbd63b4.png"}/>
                <Text fontWeight={"bold"}>More communities</Text>
                <Text>View all</Text>
                <Text>9,894.940 travellers</Text>
            </Box>
            
         </Box>
        </Box>
        </>
    )
}