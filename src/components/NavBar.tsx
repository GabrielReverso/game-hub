import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<HStack paddingBlock={"10px"}>
			<Link
				to={"/"}
				style={{ width: "80px", height: "60px", padding: 0, margin: 0 }}
			>
				<Image src={logo} boxSize={"60px"} objectFit={"contain"} />
			</Link>
			<SearchInput />
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;
