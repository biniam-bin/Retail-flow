import './App.css';
import { Flex } from '@chakra-ui/react'
import Sidebar from "./components/sidebar"
import Header from './components/header';
import { Routes, Route } from "react-router-dom";
import Brands from './pages/brands';
import Categories from './pages/categories';
import Producs from './pages/products';
import Dashboard from './pages/dashboard';
import Orders from './pages/orders';

function Main() {
  return (

    <Flex height="100vh">
      <Sidebar />
      <Flex flexDir='column' height="" bg="#eee" width="100%">
        <Header />

        <Flex p="1.5rem" overflowY="auto">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/products" element={<Producs />} />
            <Route path="/orders" element={<Orders/>} />
            <Route path="/report" element={<Flex>report</Flex>} />
            <Route path="/setting" element={<Flex>setting</Flex>} />
          </Routes>
        </Flex>
      </Flex>
    </Flex>

  );
}

export default Main;
