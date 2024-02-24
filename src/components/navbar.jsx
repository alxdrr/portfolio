import { Flex, Text } from "@chakra-ui/react";
function Navbar() {
  return (
    <Flex w="100%" maxW="1440" gap={16} align="center" justify="start" px={20} py={{ base: 6, lg: 9 }} display={{ base: "none", md: "flex" }}>
      <a href="">
        <Text color="white" fontSize={{ base: "md" }}>
          Home
        </Text>
      </a>
      <a href="">
        <Text color="white" fontSize="sm">
          About Me
        </Text>
      </a>
      <a href="">
        <Text color="white" fontSize="sm">
          Experiences
        </Text>
      </a>
      <a href="">
        <Text color="white" fontSize="sm">
          Projects
        </Text>
      </a>
      <a href="">
        <Text color="white" fontSize="sm">
          Achievement
        </Text>
      </a>
    </Flex>
  );
}

export default Navbar;
