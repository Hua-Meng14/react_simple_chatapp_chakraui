import './App.css';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Chat from "./pags/Chat";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Chat/>

    </ChakraProvider>
  )
}

export default App;
