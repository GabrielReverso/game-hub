import { HStack, Show, Switch, Text, useColorMode } from "@chakra-ui/react";
import { MdDarkMode } from "react-icons/md";

const ColorModeSwitch = () => {
	const { toggleColorMode, colorMode } = useColorMode();

	return (
		<HStack>
			<Switch
				colorScheme="blue"
				isChecked={colorMode === "dark"}
				onChange={toggleColorMode}
			/>
			<Show above="md">
				<Text whiteSpace={"nowrap"} fontSize={"md"}>
					Dark Mode
				</Text>
			</Show>
			<Show below="md">
				<MdDarkMode size={20} />
			</Show>
		</HStack>
	);
};

export default ColorModeSwitch;
