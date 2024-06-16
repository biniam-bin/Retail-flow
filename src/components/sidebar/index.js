import React from 'react'
import { Flex, Heading, Spacer, Link, Text } from '@chakra-ui/react'

// icons
import { AiFillDashboard } from "react-icons/ai"; 
import { IoMdPricetags } from "react-icons/io";
import { FaLayerGroup } from "react-icons/fa6";
import { BsBoxFill } from "react-icons/bs";
import { MdOutlineAttachMoney } from "react-icons/md";
import { GiNotebook } from "react-icons/gi";


function Sidebar() {
  const links = [
    { text: "Dashboard", icon: <AiFillDashboard />, url: "/dashboard" },
    { text: "Brands", icon: <IoMdPricetags />, url: "/brands" },
    { text: "Categories", icon: <FaLayerGroup />, url: "/categories" },
    { text: "Products", icon: <BsBoxFill />, url: "/products" },
    { text: "Orders", icon: <MdOutlineAttachMoney />, url: "/orders" },
    { text: "Report", icon: <GiNotebook />, url: "/report" },
  ]
  return (
    <Flex height="100%" width="20%" align="center" flexDir="column" color="#eee" bg="rgba(46,55,74,.82)">
      
      <img src="/logo3.png"></img>
      <Spacer />
      <Flex flexDir="column" width="100%">
        {links.map((link) => {
          return (
            <MenuLink key={link.url} link={link} />
          )
        })}

      </Flex>
      <Spacer />
      <Spacer />
      <Flex>

      </Flex>
    </Flex>
  )
}

export default Sidebar




function MenuLink({ link }) {
  return (
    <Link href={link.url}>
      <Flex borderLeft={`${window && window.location.href.includes(link.url) ? "5px solid #007bff" : ""}`} bg={`${window && window.location.href.includes(link.url) ? "rgba(46,55,74,.82)" : ""}`} padding="0.6rem" color="#eee" my="0.1rem" align="center">
        {link.icon}<Text ml="0.5rem">{link.text}</Text>
      </Flex>
    </Link>
  )
}
