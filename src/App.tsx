import { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import Boxes from './components/Boxes';
import Search from './components/Search';
import './App.scss'

export default function App() {
  const [searchVal, setSearchVal] = useState('');

  return (
    <>
      <ChakraProvider>
        <h1>Titles</h1>
        <Search setSearchVal={setSearchVal} />
        <Boxes searchVal={searchVal} />
      </ChakraProvider>
    </>
  );
};
