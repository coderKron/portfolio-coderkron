import React from 'react';
import { ChakraProvider, theme, Flex, Box } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Portfolio from './components/Portfolio';
import About from './components/About';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex flexDirection="column" height="100%" width={'100%'}>
        <Homepage />
        <Navbar />
        <About />

        <Portfolio />
        <ContactForm />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
