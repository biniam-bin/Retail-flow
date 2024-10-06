import "./App.css";
import { Flex } from "@chakra-ui/react";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import { Routes, Route } from "react-router-dom";
import Brands from "./pages/brands";
import Categories from "./pages/categories";
import Producs from "./pages/products";
import Dashboard from "./pages/dashboard";
import Orders from "./pages/orders";
import Report from "./pages/report";
import Setting from "./pages/setting";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import {BaseUrl, PORT} from "./utils/constants"


function Main() {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }
      const { data } = await axios.post(
        `${BaseUrl}:${PORT}/auth/`,
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      setUsername(user);
      return status
        ? ''
        : (removeCookie("token"), navigate("/login"));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  return (
    <Flex height="100vh">
      <Sidebar />
      <Flex flexDir="column" height="" bg="#eee" width="100%">
        <Header username={username} />

        <Flex p="1.5rem" overflowY="auto">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/products" element={<Producs />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/report" element={<Report />} />
            <Route path="/setting" element={<Setting />} />
          </Routes>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Main;
