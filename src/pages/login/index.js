import React, { useState } from "react";
import {
  Flex,
  Spacer,
  Text,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Link,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCookies } from "react-cookie";
import {BaseUrl, PORT} from "../../utils/constants"

function Login() {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  if (cookies.token) {
    navigate("/app/dashboard");
  }
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "top-right",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "top-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${BaseUrl}:${PORT}/auth/login`,
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/app/dashboard");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };
  return (
    <Flex bg="#eee" height="100vh" alignItems="center" justifyContent="center">
      <Box
        bg="#fff"
        display="flex"
        alignItems="center"
        flexDirection="column"
        boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
        p="1.2rem"
        mx="1rem"
        borderRadius="5px"
      >
        <Text fontSize={"xl"} fontWeight="600">
          Welcome back
        </Text>
        <FormControl m="1rem 0">
          <FormLabel>E-mail</FormLabel>
          <Input
            type="email"
            name="email"
            value={email}
            width="18rem"
            placeholder="enter email..."
            onChange={handleOnChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            name="password"
            value={password}
            width="18rem"
            placeholder="enter password..."
            onChange={handleOnChange}
          />
        </FormControl>
        <Button
          onClick={handleSubmit}
          width="18rem"
          m="1.5rem 0"
          colorScheme="blue"
        >
          Login
        </Button>
        <Flex>
          <Text fontSize="sm">
            Don't have an account?{" "}
            <Link color="blue" href="/register">
              Sign up now
            </Link>
          </Text>
        </Flex>
      </Box>
      <ToastContainer />
    </Flex>
  );
}

export default Login;
