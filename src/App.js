import './App.css';
import { Flex } from '@chakra-ui/react'
import Sidebar from "./components/sidebar"
import Header from './components/header';
import { Routes, Route } from "react-router-dom";
import Brands from './pages/brands';

function App() {
  return (
    <Flex height="100vh">
      <Sidebar />
      <Flex flexDir='column' height="" bg="#eee" width="100%">
        <Header />

        <Flex p="1.5rem" overflowY="auto">
          <Routes>
            <Route path="/dashboard" element={<Flex>home</Flex>} />
            <Route path="/brands" element={<Brands/>} />
            <Route path="/categories" element={<Flex>cat</Flex>} />
            <Route path="/products" element={<Flex>product</Flex>} />
            <Route path="/orders" element={<Flex>order</Flex>} />
            <Route path="/report" element={<Flex>report</Flex>} />
          </Routes>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default App;
