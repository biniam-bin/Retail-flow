import React from "react";
import {
  Box,
  Flex,
  Heading,
  Spacer,
  Button,
  Text,
  NumberInput,
  Select,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Input,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

import { FaPen, FaTrashAlt } from "react-icons/fa";

function Orders() {
  const {
    isOpen: isEditOpen,
    onOpen: onEditOpen,
    onClose: onEditClose,
  } = useDisclosure();
  const {
    isOpen: isDeleteOpen,
    onOpen: onDeleteOpen,
    onClose: onDeleteClose,
  } = useDisclosure();
  const {
    isOpen: isAddOpen,
    onOpen: onAddOpen,
    onClose: onAddClose,
  } = useDisclosure();
  return (
    <Flex flexDir="column" width="100%">
      <Flex alignItems="end">
        <Heading size="lg">Manage</Heading>
        <Text mx="0.5rem" color="gray">
          Orders
        </Text>
      </Flex>
      <Flex>
        <Box
          onClick={onAddOpen}
          bg="#007bff"
          color="white"
          borderRadius={5}
          cursor="pointer"
          my="1.2rem"
          p="0.35rem 0.8rem"
        >
          <Text fontSize="sm" size="xl">
            Add Order
          </Text>
        </Box>
      </Flex>
      <Flex
        flexDir="column"
        borderRadius="5px"
        p="0.5rem 1rem"
        pb="1rem"
        boxShadow="rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;"
        bg="#fff"
      >
        <Text fontSize="lg">Manage Orders</Text>
        <Flex alignItems="center" mt="2rem">
          <Text>Show</Text>
          <NumberInput
            defaultValue={15}
            min={10}
            max={20}
            mx="0.5rem"
            border="1px solid lightgray"
            size="sm"
            maxW={20}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Text>entries</Text>
          <Spacer />
          <Text>Search: </Text>
          <Input
            placeholder="search order"
            mx="0.5rem"
            size="sm"
            width="auto"
          />
        </Flex>
        <Flex>
          <TableContainer mt="2rem" width="100%" mx="auto">
            <Table variant="striped" colorScheme="gray">
              <TableCaption>
                <Flex>
                  <Text>Showing 0 to 0 of 0 entries</Text>
                  <Spacer />
                  <Flex>
                    <Button mx={1} colorScheme="darkgray" variant="outline">
                      Previous
                    </Button>
                    <Button mx={1} colorScheme="darkgray" variant="outline">
                      Next
                    </Button>
                  </Flex>
                </Flex>
              </TableCaption>
              <Thead>
                <Tr>
                  <Th>Customer</Th>
                  <Th>Product</Th>
                  <Th>Quantity</Th>
                  <Th>Amount</Th>
                  <Th>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Biniam</Td>
                  <Td>Nike 03</Td>
                  <Td>x1</Td>
                  <Td>500</Td>
                  <Td>
                    <Flex>
                      <OrderStatus status={true} />
                    </Flex>
                  </Td>
                  <Td>
                    <Flex>
                      <Flex
                        onClick={onEditOpen}
                        border="1px solid gray"
                        borderRadius="2px"
                        mr="3px"
                        p="5px"
                        cursor="pointer"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <FaPen />
                      </Flex>
                      <Flex
                        onClick={onDeleteOpen}
                        border="1px solid gray"
                        borderRadius="2px"
                        ml="3px"
                        p="5px"
                        cursor="pointer"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <FaTrashAlt />
                      </Flex>
                    </Flex>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Flex>
      </Flex>

      <Flex m={200}></Flex>
      <EditOrder isEditOpen={isEditOpen} onEditClose={onEditClose} />
      <AddOrder isAddOpen={isAddOpen} onAddClose={onAddClose} />
      <DeleteOrder isDeleteOpen={isDeleteOpen} onDeleteClose={onDeleteClose} />
    </Flex>
  );
}

function OrderStatus({ status }) {
  return (
    <Flex
      bg={`${status ? "#198754" : "#ffc107"}`}
      p="0.2rem 0.6rem"
      alignItems="center"
      fontSize="sm"
      justifyContent="center"
      color="white"
      borderRadius="5px"
    >
      {status ? "Active" : "Inactive"}
    </Flex>
  );
}

function AddOrder({ onAddClose, isAddOpen }) {
  return (
    <Modal isOpen={isAddOpen} onClose={onAddClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Order</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl isRequired>
            <FormLabel>Customer Name</FormLabel>
            <Input placeholder="Customer name" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Customer Phone</FormLabel>
            <Input type="tel" placeholder="Customer phone" />
          </FormControl>
          <FormControl my="0.8rem">
            <FormLabel>Product</FormLabel>
            <Select defaultValue="active">
              <option value="active">Nike 03</option>
              <option value="inactive">Puma 47</option>
            </Select>
          </FormControl>
          <FormControl my="0.8rem">
            <FormLabel>Quantity</FormLabel>
            <NumberInput defaultValue={1}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <FormControl>
            <FormLabel>Gross Amount</FormLabel>
            <Input
              isReadOnly
              type="tel"
              value="500"
              placeholder="Customer phone"
            />
          </FormControl>
          <FormControl my="0.8rem">
            <FormLabel>Tax 15%</FormLabel>
            <Input
              isReadOnly
              type="tel"
              value="75"
              placeholder="Customer phone"
            />
          </FormControl>
          <FormControl my="0.8rem">
            <FormLabel>Discount</FormLabel>
            <NumberInput defaultValue={0}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <FormControl>
            <FormLabel>Net Amount</FormLabel>
            <Input
              isReadOnly
              type="tel"
              value="425"
              placeholder="Customer phone"
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="gray" mr={3} onClick={onAddClose}>
            Close
          </Button>
          <Button colorScheme="blue">Save</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

function EditOrder({ onEditClose, isEditOpen }) {
  return (
    <Modal isOpen={isEditOpen} onClose={onEditClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Order</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl isRequired>
            <FormLabel>Customer Name</FormLabel>
            <Input placeholder="Customer name" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Customer Phone</FormLabel>
            <Input type="tel" placeholder="Customer phone" />
          </FormControl>
          <FormControl my="0.8rem">
            <FormLabel>Product</FormLabel>
            <Select defaultValue="active">
              <option value="active">Nike 03</option>
              <option value="inactive">Puma 47</option>
            </Select>
          </FormControl>
          <FormControl my="0.8rem">
            <FormLabel>Quantity</FormLabel>
            <NumberInput defaultValue={1}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <FormControl>
            <FormLabel>Gross Amount</FormLabel>
            <Input
              isReadOnly
              type="tel"
              value="500"
              placeholder="Customer phone"
            />
          </FormControl>
          <FormControl my="0.8rem">
            <FormLabel>Tax 15%</FormLabel>
            <Input
              isReadOnly
              type="tel"
              value="75"
              placeholder="Customer phone"
            />
          </FormControl>
          <FormControl my="0.8rem">
            <FormLabel>Discount</FormLabel>
            <NumberInput defaultValue={0}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <FormControl>
            <FormLabel>Net Amount</FormLabel>
            <Input
              isReadOnly
              type="tel"
              value="425"
              placeholder="Customer phone"
            />
          </FormControl>
        </ModalBody>


        <ModalFooter>
          <Button colorScheme="gray" mr={3} onClick={onEditClose}>
            Close
          </Button>
          <Button colorScheme="blue">Save</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

function DeleteOrder({ onDeleteClose, isDeleteOpen }) {
  return (
    <Modal isOpen={isDeleteOpen} onClose={onDeleteClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Delete Order</ModalHeader>
        <ModalCloseButton />
        <ModalBody>Are you sure you want to delete?</ModalBody>

        <ModalFooter>
          <Button colorScheme="gray" mr={3} onClick={onDeleteClose}>
            Close
          </Button>
          <Button colorScheme="red">Delete</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default Orders;
