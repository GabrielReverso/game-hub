import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
    return (
        <HStack
            justifyContent={"space-between"}
            paddingBlock={"10px"}
            paddingInline={"15px"}
        >
            <Image src={logo} boxSize={"60px"} />
            <ColorModeSwitch />
        </HStack>
    );
};

export default NavBar;
