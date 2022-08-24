import { Box } from "@chakra-ui/react"
import { ExploreIndia } from "./ExploreIndia"
import { Search } from "./Search"

export const HomePage=()=>{
    return (
        <>
        <Box >
        <Search/>
        <ExploreIndia/>
        </Box>
        
        </>
    )
}