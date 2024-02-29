import Navbar from "../components/navbar";
import Hero from "../components/hero";
import { Flex } from "@chakra-ui/react";

function App() {
  return (
    <Flex backgroundColor="#212529" w="100vw" h="100vh">
      <Flex w="100vw" maxW="1440px" m="auto" flexDir="column" justify="start" align="center" h="100vh" mt={0}>
        <Navbar />
        <Hero />
      </Flex>
    </Flex>
  );
}

export default App;
