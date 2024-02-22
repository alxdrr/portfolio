import Navbar from "./components/navbar";
import Hero from "./components/hero";
import { Flex } from "@chakra-ui/react";

function App() {
  return (
    <Flex w="100vw" flexDir="column" justify="center" align="start" h="100vh" backgroundColor="#212529" mt={0}>
      <Navbar />
      <Hero />
    </Flex>
  );
}

export default App;
