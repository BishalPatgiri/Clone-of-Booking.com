import { Box } from "@chakra-ui/react"
import { Connect } from "./connect"
import { ExploreIndia } from "./ExploreIndia"
import { Search } from "./Search"

export const HomePage=()=>{
    return (
        <>
        <Box >
        <Search/>
        <ExploreIndia/>
        <Connect/>
        </Box>
        
        </>
    )
}