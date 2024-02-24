import { Flex, Link, Text, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
function Navbar() {
  return (
    <Flex w="100%" maxW="1440" gap={{ base: 3, md: 16 }} align="center" justify={{ base: "end", md: "start" }} px={{ base: 3, md: 20 }} py={{ base: 2, md: 6, lg: 9 }}>
      <Link href="" display={{ base: "none", md: "block" }}>
        <Text color="white" fontSize={{ base: "md" }}>
          Home
        </Text>
      </Link>
      <Link href="" display={{ base: "none", md: "block" }}>
        <Text color="white" fontSize="sm">
          About Me
        </Text>
      </Link>
      <Link href="" display={{ base: "none", md: "block" }}>
        <Text color="white" fontSize="sm">
          Experiences
        </Text>
      </Link>
      <Link href="" display={{ base: "none", md: "block" }}>
        <Text color="white" fontSize="sm">
          Projects
        </Text>
      </Link>
      <Link href="" display={{ base: "none", md: "block" }}>
        <Text color="white" fontSize="sm">
          Achievement
        </Text>
      </Link>
      <Menu>
        <MenuButton as={IconButton} aria-label="Options" icon={<HamburgerIcon />} display={{ base: "block", md: "none" }} />
        <MenuList bg="linear-gradient(135deg, rgba(255, 255, 255, 0.50) 0.21%, rgba(255, 255, 255, 0.00) 100.21%)" display={{ base: "block", md: "none" }}>
          <MenuItem as="a" href="" color="white" backdropFilter="blur(13.875px)" bg="none">
            About Me
          </MenuItem>
          <MenuItem as="a" href="" color="white" backdropFilter="blur(13.875px)" bg="none">
            Experiences
          </MenuItem>
          <MenuItem as="a" href="" color="white" backdropFilter="blur(13.875px)" bg="none">
            Projects
          </MenuItem>
          <MenuItem as="a" href="" color="white" backdropFilter="blur(13.875px)" bg="none">
            Achievements
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}

export default Navbar;
