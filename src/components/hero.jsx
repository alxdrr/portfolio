import { Flex, Text, Image, Spacer, Button, Box } from "@chakra-ui/react";
import heroImage from "../assets/Image.svg";
import Light from "./light";
function Navbar() {
  return (
    <Flex height="100%" w="100%" maxW="1440" gap={16} align="center" justify="start" px={{ base: 6, md: 6, lg: 10 }} py={5}>
      {/* <Light></Light> */}
      <Flex align="center" justify="space-around" flexDir="row">
        <Flex flexDir="column" maxW={{ base: "100%", md: "50%" }} gap={{ md: 6, xl: 6 }}>
          <Flex flexDir="column">
            <Text color="white" bgGradient="linear(to-l, #FFFFFF, #AEAEAE)" bgClip="text" fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} fontWeight="bold">
              Charles Alexander
            </Text>
            <Text color="white" fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}>
              UI/UX Designer
            </Text>
          </Flex>
          <Text textStyle="p" color="white">
            A digital jack-of-all-trades if you will. On one hand, I&apos;m a passionate UI/UX Designer. On the other, I&apos;m a versatile Fullstack Developer, coding and debugging my way to bring sleek. And if that wasn&apos;t enough,
            I&apos;ve got a curious mind that&apos;s got me diving headfirst into the world of Machine Learning. I&apos;m excited by the thought of blending my design, development skills with AI to create unique digital solutions
          </Text>
          <Button>Hai</Button>
        </Flex>

        <Box width={{ md: 240, lg: 320, xl: 360 }} display={{ base: "none", md: "inline" }}>
          <Image h="100%" objectFit="fit" src={heroImage} alt="Profile Picture" />
        </Box>
      </Flex>
    </Flex>
  );
}

export default Navbar;
