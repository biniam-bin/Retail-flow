import React from 'react'
import { Flex, Spacer, Text } from '@chakra-ui/react'


function Header() {
  return (
    <Flex bg="rgba(46,55,74,.82)" p="0.8rem" color="#fff">
        <Spacer/>
        <Text>Hello, Biniam Daniel</Text>
    </Flex>
  )
}

export default Header