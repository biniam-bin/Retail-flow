import {
  Flex,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Box,
  InputGroup,
  NumberInput,
  NumberInputField,
  InputRightAddon,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberIncrementStepper,
  Text,
} from "@chakra-ui/react";
import React from "react";

function Setting() {
  return (
    <Flex flexDir="column" width="100%">
      <Flex alignItems="end">
        <Heading size="lg">Setting</Heading>
      </Flex>
      <Flex m="2rem" justifyContent="center">
        <Flex flexDir="column">
          <FormControl isRequired my="0.5rem">
            <FormLabel>Name</FormLabel>
            <Input
              border="1px solid gray"
              value="Biniam"
              placeholder="Admin name"
            />
          </FormControl>
          <FormControl isRequired my="0.5rem">
            <FormLabel>E-mail</FormLabel>
            <Input
              border="1px solid gray"
              value="biniam@gmail.com"
              placeholder="Admin email"
            />
          </FormControl>
          <FormControl isRequired my="0.5rem">
            <FormLabel>Phone</FormLabel>
            <Input
              type="tel"
              border="1px solid gray"
              value="Biniam"
              placeholder="Admin phone"
            />
          </FormControl>
          <FormControl isRequired my="0.5rem">
            <FormLabel>Password</FormLabel>
            <Input
              border="1px solid gray"
              value="********"
              placeholder="Admin Password"
            />
          </FormControl>
        </Flex>
        <Flex ml="8rem">
          <FormControl my="0.8rem">
            <FormLabel>Tax</FormLabel>
            <InputGroup>
              <NumberInput width="5rem" defaultValue={15}>
                <NumberInputField border="1px solid gray" />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <InputRightAddon>%</InputRightAddon>
            </InputGroup>
          </FormControl>
        </Flex>
      </Flex>
      <Flex>
        <Box
          
          bg="#007bff"
          color="white"
          borderRadius={5}
          cursor="pointer"
          my="1.2rem"
          mx="auto"
          p="0.5rem 1rem"
        >
          <Text fontSize="sm" size="xl">
            Save changes
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
}

export default Setting;
