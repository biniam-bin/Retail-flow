import React from 'react'
import {
    Box, Flex, Heading, Spacer, Button, Text, NumberInput, Select,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper, Input, Table,
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
} from '@chakra-ui/react'

import { FaPen, FaTrashAlt } from "react-icons/fa";


function Categories() {
    const { isOpen: isEditOpen, onOpen: onEditOpen, onClose: onEditClose } = useDisclosure()
    const { isOpen: isDeleteOpen, onOpen: onDeleteOpen, onClose: onDeleteClose } = useDisclosure()
    const { isOpen: isAddOpen, onOpen: onAddOpen, onClose: onAddClose } = useDisclosure()
    return (
        <Flex flexDir="column" width="100%">
            <Flex alignItems="end">
                <Heading size="lg">Manage</Heading>
                <Text mx="0.5rem" color="gray">Categories</Text>
            </Flex>
            <Flex>
                <Box onClick={onAddOpen} bg="#007bff" color="white" borderRadius={5} cursor="pointer" my="1.2rem" p="0.35rem 0.8rem"><Text fontSize="sm" size="xl">Add Category</Text></Box>
            </Flex>
            <Flex flexDir="column" borderRadius="5px" p="0.5rem 1rem" pb="1rem" boxShadow="rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;" bg="#fff">
                <Text fontSize="lg">Manage Categories</Text>
                <Flex alignItems="center" mt="2rem">
                    <Text>Show</Text>
                    <NumberInput defaultValue={15} min={10} max={20} mx="0.5rem" border="1px solid lightgray" size='sm' maxW={20}>
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    <Text>entries</Text>
                    <Spacer />
                    <Text>Search: </Text>
                    <Input placeholder='search category' mx="0.5rem" size='sm' width="auto" />
                </Flex>
                <Flex><TableContainer mt="2rem" width="100%" mx="auto">
                    <Table variant='striped' colorScheme='gray'>
                        <TableCaption>
                            <Flex>
                                <Text>Showing 0 to 0 of 0 entries</Text>
                                <Spacer />
                                <Flex>
                                    <Button mx={1} colorScheme='darkgray' variant='outline'>
                                        Previous
                                    </Button>
                                    <Button mx={1} colorScheme='darkgray' variant='outline'>
                                        Next
                                    </Button>
                                </Flex>
                            </Flex>
                        </TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Category Name</Th>
                                <Th>Status</Th>
                                <Th>Action</Th>

                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>Shoes</Td>
                                <Td><Flex><CategoryStatus status={true} /></Flex></Td>
                                <Td>
                                    <Flex>
                                        <Flex onClick={onEditOpen} border="1px solid gray" borderRadius="2px" mr="3px" p="5px" cursor="pointer" alignItems="center" justifyContent="center">
                                            <FaPen />
                                        </Flex>
                                        <Flex onClick={onDeleteOpen} border="1px solid gray" borderRadius="2px" ml="3px" p="5px" cursor="pointer" alignItems="center" justifyContent="center">
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
            <EditCategory isEditOpen={isEditOpen} onEditClose={onEditClose} />
            <AddCategory isAddOpen={isAddOpen} onAddClose={onAddClose} />
            <DeleteCategory isDeleteOpen={isDeleteOpen} onDeleteClose={onDeleteClose} />

        </Flex>
    )

}


function CategoryStatus({ status }) {
    return (
        <Flex bg={`${status ? "#198754" : "#ffc107"}`} p="0.2rem 0.6rem" alignItems="center" fontSize="sm" justifyContent="center" color="white" borderRadius="5px">{status ? 'Active' : 'Inactive'}</Flex>
    )
}


function AddCategory({ onAddClose, isAddOpen }) {
    return (
        <Modal isOpen={isAddOpen} onClose={onAddClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Add Category</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <FormControl isRequired>
                        <FormLabel>Category name</FormLabel>
                        <Input placeholder='First name' />
                    </FormControl>
                    <FormControl my="0.8rem">
                        <FormLabel>Status</FormLabel>
                        <Select defaultValue="active">
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </Select>
                    </FormControl>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='gray' mr={3} onClick={onAddClose}>
                        Close
                    </Button>
                    <Button colorScheme='blue'>Save</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>)
}


function EditCategory({ onEditClose, isEditOpen }) {
    return (
        <Modal isOpen={isEditOpen} onClose={onEditClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Edit category</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <FormControl isRequired>
                        <FormLabel>Category name</FormLabel>
                        <Input defaultValue="Ni" placeholder='Category name' />
                    </FormControl>
                    <FormControl my="0.8rem">
                        <FormLabel>Status</FormLabel>
                        <Select defaultValue="active">
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </Select>
                    </FormControl>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='gray' mr={3} onClick={onEditClose}>
                        Close
                    </Button>
                    <Button colorScheme='blue'>Save</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>)
}


function DeleteCategory({ onDeleteClose, isDeleteOpen }) {
    return (
        <Modal isOpen={isDeleteOpen} onClose={onDeleteClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Delete Category</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    Are you sure you want to delete?
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='gray' mr={3} onClick={onDeleteClose}>
                        Close
                    </Button>
                    <Button colorScheme='red'>Delete</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>)
}

export default Categories