import React, { useState, useEffect } from "react";
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
import axios from "axios";
import { FaPen, FaTrashAlt } from "react-icons/fa";
import { BaseUrl, PORT } from "../../utils/constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Brands() {
  const [brands, setBrands] = useState([]);
  const [search, setSearch] = useState("");
  const [toedit, setToEdit] = useState({});
  const [todelete, setToDelete] = useState({});

  const searchBrands = async (query) => {
    try {
      const result = await axios.post(
        `${BaseUrl}:${PORT}/brand/search`,
        { query },
        { withCredentials: true }
      );
      setBrands(result.data.brands);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchBrands = async () => {
    try {
      const response = await axios.get(`${BaseUrl}:${PORT}/brand/all`, {
        withCredentials: true,
      });
      if (!search) {
        setBrands(response.data.brands);
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchBrands();
    searchBrands(search);
  }, [search]);

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
          Brands
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
            Add Brand
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
        <Text fontSize="lg">Manage Brands</Text>
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
            value={search}
            type="text"
            onChange={(e) => {
              setSearch(e.target.value);
              searchBrands();
            }}
            placeholder="search brand"
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
                  <Text>Showing 0 to 0 of {brands.length} entries</Text>
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
                  <Th>Brand Name</Th>
                  <Th>Status</Th>
                  <Th>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                {brands &&
                  brands.map((brand) => (
                    <Tr id={brand._id}>
                      <Td>{brand.name}</Td>
                      <Td>
                        <Flex>
                          <BrandStatus status={brand.active} />
                        </Flex>
                      </Td>
                      <Td>
                        <Flex>
                          <Flex
                            onClick={() => {
                              setToEdit(brand);
                              onEditOpen();
                            }}
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
                            onClick={() => {
                              setToDelete(brand);
                              onDeleteOpen();
                            }}
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
                  ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Flex>
      </Flex>

      <Flex m={200}></Flex>
      <EditBrand
        toedit={toedit}
        isEditOpen={isEditOpen}
        onEditClose={onEditClose}
        fetchBrands={fetchBrands}
      />
      <AddBrand
        isAddOpen={isAddOpen}
        onAddClose={onAddClose}
        fetchBrands={fetchBrands}
      />
      <DeleteBrand
        todelete={todelete}
        isDeleteOpen={isDeleteOpen}
        onDeleteClose={onDeleteClose}
        fetchBrands={fetchBrands}
      />
      <ToastContainer />
    </Flex>
  );
}

function BrandStatus({ status }) {
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

function AddBrand({ onAddClose, isAddOpen, fetchBrands }) {
  const [inputValue, setInputValue] = useState({
    name: "",
    active: true,
  });

  const { name, active } = inputValue;
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
        `${BaseUrl}:${PORT}/brand/add`,
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => onAddClose(), 500);
        fetchBrands();
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      name: "",
      status: "",
    });
  };

  return (
    <Modal isOpen={isAddOpen} onClose={onAddClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Brand</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl isRequired>
            <FormLabel>Brand name</FormLabel>
            <Input
              name="name"
              type="text"
              value={name}
              placeholder="Brand name"
              onChange={handleOnChange}
            />
          </FormControl>
          <FormControl my="0.8rem">
            <FormLabel>Status</FormLabel>
            <Select
              name="active"
              defaultValue={true}
              value={active}
              onChange={handleOnChange}
            >
              <option value={true}>Active</option>
              <option value={false}>Inactive</option>
            </Select>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="gray" mr={3} onClick={onAddClose}>
            Close
          </Button>
          <Button colorScheme="blue" onClick={handleSubmit}>
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

function EditBrand({ toedit, onEditClose, isEditOpen, fetchBrands }) {
  const [inputValue, setInputValue] = useState({
    name: toedit.name,
    active: toedit.active,
  });

  const { name, active } = inputValue;
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
      const { data } = await axios.put(
        `${BaseUrl}:${PORT}/brand/edit`,
        {
          id: toedit._id,
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => onEditClose(), 500);
        fetchBrands();
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal isOpen={isEditOpen} onClose={onEditClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Brand</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl isRequired>
            <FormLabel>Brand name</FormLabel>
            <Input
              name="name"
              type="text"
              value={name}
              defaultValue={toedit && toedit.name}
              placeholder="Brand name"
              onChange={handleOnChange}
            />
          </FormControl>
          <FormControl my="0.8rem">
            <FormLabel>Status</FormLabel>
            <Select
              defaultValue={toedit && toedit.active}
              name="active"
              value={active}
              onChange={handleOnChange}
            >
              <option value={true}>Active</option>
              <option value={false}>Inactive</option>
            </Select>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="gray" mr={3} onClick={onEditClose}>
            Close
          </Button>
          <Button colorScheme="blue" onClick={handleSubmit}>
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

function DeleteBrand({ todelete, onDeleteClose, isDeleteOpen, fetchBrands }) {
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
        `${BaseUrl}:${PORT}/brand/delete`,
        {
          id: todelete._id
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => onDeleteClose(), 500);
        fetchBrands();
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal isOpen={isDeleteOpen} onClose={onDeleteClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Delete Brand</ModalHeader>
        <ModalCloseButton />
        <ModalBody>Are you sure you want to delete?</ModalBody>

        <ModalFooter>
          <Button colorScheme="gray" mr={3} onClick={onDeleteClose}>
            Close
          </Button>
          <Button colorScheme="red" onClick={handleSubmit}>Delete</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default Brands;
