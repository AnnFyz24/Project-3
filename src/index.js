import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider, Flex, Image } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
    <Flex direction='column' align='center' justify='center' minHeight='100vh'>
      <Image position='fixed' objectFit='fill' src='/images/bg.jpg' opacity={0.8} top={0} left={0} zIndex={-1} />
      <App />
    </Flex>
    </ChakraProvider>
  </React.StrictMode>
);
