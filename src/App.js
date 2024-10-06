import './App.css';
import { Flex } from '@chakra-ui/react'
import Sidebar from "./components/sidebar"
import Header from './components/header';
import { Routes, Route } from "react-router-dom";
import Brands from './pages/brands';
import Categories from './pages/categories';
import Producs from './pages/products';
import Dashboard from './pages/dashboard';
import Main from './main';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';

function App() {
  return (
    < Routes >
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      
      <Route path="/app/*" element={<Main />} />
    </Routes >
  );
}

export default App;
