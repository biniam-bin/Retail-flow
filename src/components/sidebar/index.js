import React from "react";
import { Flex, Heading, Spacer, Link, Text } from "@chakra-ui/react";

// icons
import { AiFillDashboard } from "react-icons/ai";
import { IoMdPricetags } from "react-icons/io";
import { FaLayerGroup } from "react-icons/fa6";
import { BsBoxFill } from "react-icons/bs";
import { MdOutlineAttachMoney } from "react-icons/md";
import { GiNotebook } from "react-icons/gi";
import { FaUser } from "react-icons/fa6";
import { RxExit } from "react-icons/rx";
import { BsFillGearFill } from "react-icons/bs";


function Sidebar() {
  const links = [
    { text: "Dashboard", icon: <AiFillDashboard />, url: "/app/dashboard" },
    { text: "Brands", icon: <IoMdPricetags />, url: "/app/brands" },
    { text: "Categories", icon: <FaLayerGroup />, url: "/app/categories" },
    { text: "Products", icon: <BsBoxFill />, url: "/app/products" },
    { text: "Orders", icon: <MdOutlineAttachMoney />, url: "/app/orders" },
    { text: "Report", icon: <GiNotebook />, url: "/app/report" },
    { text: "Setting", icon: <BsFillGearFill />, url: "/app/settings" },
  ];
  return (
    <Flex
      height="100%"
      width="20%"
      align="center"
      flexDir="column"
      color="#eee"
      bg="rgba(46,55,74,.82)"
    >
      <Link href="/">
        <img src="/logo3.png"></img>
      </Link>
      <Spacer />
      <Flex flexDir="column" width="100%">
        {links.map((link) => {
          return <MenuLink key={link.url} link={link} />;
        })}
        <Flex cursor="pointer" padding="0.6rem" color="#eee" my="0.1rem" align="center" onClick={() => alert("logged out")}>
        <RxExit />
          <Text ml="0.5rem">Logout</Text>
        </Flex>
      </Flex>
      <Spacer />
      <Spacer />
      <Flex></Flex>
    </Flex>
  );
}

export default Sidebar;

function MenuLink({ link }) {
  return (
    <Link href={link.url}>
      <Flex
        borderLeft={`${
          window && window.location.href.includes(link.url)
            ? "5px solid #007bff"
            : ""
        }`}
        bg={`${
          window && window.location.href.includes(link.url)
            ? "rgba(46,55,74,.82)"
            : ""
        }`}
        padding="0.6rem"
        color="#eee"
        my="0.1rem"
        align="center"
      >
        {link.icon}
        <Text fontSize='sm' ml="0.5rem">{link.text}</Text>
      </Flex>
    </Link>
  );
}
