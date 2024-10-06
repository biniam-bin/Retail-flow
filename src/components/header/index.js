import React from 'react'
import { Flex, Spacer, Text } from '@chakra-ui/react'


function Header({username}) {
  return (
    <Flex bg="rgba(46,55,74,.82)" p="1rem 2rem" color="#fff">
        <Spacer/>
        <Text>Hello, {username}</Text>
    </Flex>
  )
}

export default Header