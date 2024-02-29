import { Box } from "@chakra-ui/react";
function Btn() {
  return (
    <Box
      as="button"
      width="200px"
      height="auto"
      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
      border="1px solid"
      px="26px"
      py="10px"
      borderRadius="8px"
      fontSize="12px"
      fontWeight="regular"
      background="linear-gradient(135deg, rgba(255, 255, 255, 0.50) 0.21%, rgba(255, 255, 255, 0.00) 100.21%)"
      borderColor="#FFF"
      color="#FFF"
      _hover={{ bg: "rgba(255, 255, 255, 0.25);7" }}
      _active={{
        bg: "#dddfe2",
        transform: "scale(0.98)",
        borderColor: "#bec3c9",
      }}
    >
      Join Group
    </Box>
  );
}

export default Btn;
