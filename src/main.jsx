import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import "./index.css"
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { defineStyleConfig } from "@chakra-ui/react";

const Button = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    fontWeight: "semibold",
    borderRadius: "base", // <-- border radius is same for all variants and sizes
    border: "1px solid",
  },
  // Two sizes: sm and md
  sizes: {
    sm: {
      fontSize: "sm",
      px: 4, // <-- px is short for paddingLeft and paddingRight
      py: 3, // <-- py is short for paddingTop and paddingBottom
    },
    md: {
      fontSize: "md",
      px: 6, // <-- these values are tokens from the design system
      py: 4, // <-- these values are tokens from the design system
    },
  },
  // Two variants: outline and solid
  variants: {
    solid: {
      color: "white",
      borderColor: "white",
      bg: "linear-gradient(135deg, rgba(255, 255, 255, 0.50) 0.21%, rgba(255, 255, 255, 0.00) 100.21%)",
      _hover: {
        backgroundColor: "gray",
      },
      _active: {
        backgroundColor: "gray.600",
      },
    },
  },
  // The default size and variant values
  defaultProps: {
    size: "md",
  },
});
const theme = extendTheme({
  components: {
    Button,
  },
  colors: {
    brand: {
      100: "#f7fafc",
      900: "#1a202c",
    },
  },
  textStyles: {
    //   base: "0em", // 0px
    //   sm: "30em", // ~480px. em is a relative unit and is dependant on the font size.
    //   md: "48em", // ~768px
    //   lg: "62em", // ~992px
    //   xl: "80em", // ~1280px
    //   "2xl": "96em", // ~1536px
    h1: {
      // you can also use responsive styles
      fontSize: ["48px", "72px"],
      fontWeight: "bold",
      lineHeight: "110%",
      letterSpacing: "-2%",
    },
    p: {
      fontSize: { base: "12px", md: "16px" },
      fontWeight: "light",
      lineHeight: { base: "24px", md: "28px", lg: "38px" },
      letterSpacing: "2px",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
