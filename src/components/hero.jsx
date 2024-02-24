import { Flex, Text, Image, Spacer, Button, Box } from "@chakra-ui/react";
import heroImage from "../assets/Image.svg";
import Light from "./light";
function Navbar() {
  return (
    <Flex height="100%" w="100%" maxW="1440" align="center" px={{ base: 6, md: 6, lg: 10 }}>
      {/* <Light></Light> */}
      <Flex h="100%" w="100%" align="center" justify="space-around" flexDir={{ base: "column-reverse", md: "row" }}>
        <Flex flexDir="column" maxW={{ base: "100%", md: "50%" }} gap={{ base: 6, xl: 10 }} align={{ base: "center", md: "start" }}>
          <Flex w="100%" flexDir="column" align={{ base: "center", md: "start" }}>
            <Text color="white" bgGradient="linear(to-l, #FFFFFF, #AEAEAE)" bgClip="text" fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} fontWeight="bold">
              Charles Alexander
            </Text>
            <Text color="white" fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}>
              UI/UX Designer
            </Text>
          </Flex>
          <Button size={{ base: "base", md: "md", lg: "lg" }}>Dive In</Button>
        </Flex>
        <Box width={{ base: 160, md: 240, lg: 320, xl: 360 }}>
          <Image h="100%" objectFit="fit" src={heroImage} alt="Profile Picture" />
        </Box>
      </Flex>
    </Flex>
  );
}

export default Navbar;
