import { Box } from "@chakra-ui/react";
import { Connect } from "./connect";
import { Destination } from "./destination";
import { ExploreIndia } from "./ExploreIndia";
import { Homeguest } from "./Homeguest";
import { Nextrip } from "./nextTrip";
import { Search } from "./Search";

export const HomePage = () => {
  return (
    <>
      <Box>
        <Search />
        <ExploreIndia />
        <Homeguest />
        <Connect />
        <Nextrip />
        <Destination />
      </Box>
    </>
  );
};
