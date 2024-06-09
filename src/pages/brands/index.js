import React from 'react'
import { Box, Container, Flex, Heading, Spacer, Text } from '@chakra-ui/react'


function Brands() {
    return (
        <Flex flexDir="column">
            <Flex alignItems="end">
                <Heading size="lg">Manage</Heading>
                <Text mx="0.5rem" color="gray">Brands</Text>
            </Flex>
            <Flex>
            <Box bg="#007bff" color="white" borderRadius={5} cursor="pointer" my="1.2rem" p="0.5rem 1.1rem">Add Brand</Box>
            </Flex>
        </Flex>
    )
}

export default Brands