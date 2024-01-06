import "./App.css";
import FAQs from "./components/faqpage";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider
      theme={extendTheme({
        components: {
          Accordion: {
            baseStyle: {
              container: {
                // this is used
                border: "none",
              },
            },
          },
        },
      })}
    >
      <FAQs />
    </ChakraProvider>
  );
}

export default App;
