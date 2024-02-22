import { Flex, Text, Spacer, Button } from "@chakra-ui/react";
import Btn from "./button";
import Light from "./light";
function Navbar() {
  return (
    <Flex w="100%" height="100vh" maxW="1440" gap={16} align="center" justify="start" px={20} py={5}>
      <Light></Light>
      <Flex flexDir="row" h="100%" py={10}>
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
            A digital jack-of-all-trades if you will. On one hand, I'm a passionate UI/UX Designer. On the other, I'm a versatile Fullstack Developer, coding and debugging my way to bring sleek. And if that wasn't enough, I've got a curious
            mind that's got me diving headfirst into the world of Machine Learning. I'm excited by the thought of blending my design, development skills with AI to create unique digital solutions
          </Text>
          <Btn />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Navbar;
