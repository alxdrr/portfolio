import { Flex, Text, Image, Spacer, Button, Box } from "@chakra-ui/react";
import heroImage from "../assets/Image.svg";
import Light from "./light";
function Navbar() {
  return (
    <Flex height="100%" w="100%" maxW="1440" gap={16} align="center" justify="start" px={20} py={5}>
      <Light></Light>
      <Flex align="center" justify="space-around" flexDir="row">
        <Flex flexDir="column" maxW="50%" gap={8}>
          <Flex flexDir="column">
            <Text color="white" bgGradient="linear(to-l, #FFFFFF, #AEAEAE)" bgClip="text" fontSize="6xl" fontWeight="bold">
              Charles Alexander
            </Text>
            <Text color="white" fontSize="xl">
              UI/UX Designer
            </Text>
          </Flex>
          <Text textStyle="p" color="white" fontSize="sm">
            A digital jack-of-all-trades if you will. On one hand, I&apos;m a passionate UI/UX Designer. On the other, I&apos;m a versatile Fullstack Developer, coding and debugging my way to bring sleek. And if that wasn&apos;t enough,
            I&apos;ve got a curious mind that&apos;s got me diving headfirst into the world of Machine Learning. I&apos;m excited by the thought of blending my design, development skills with AI to create unique digital solutions
          </Text>
          <Button>Hai</Button>
        </Flex>
        <Box width={[0, 0, 240, 320, 400, null]}>
          <Image h="100%" objectFit="fit" src={heroImage} alt="Profile Picture" />
        </Box>
      </Flex>
    </Flex>
  );
}

export default Navbar;
