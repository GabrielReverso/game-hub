import { Platform } from "@/constants/interfaces";
import usePlatforms from "@/hooks/usePlatforms";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
	onSelectPlatform: (platform: Platform | null) => void;
	selectedPlatformId?: number;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
	const { data: platforms, error } = usePlatforms();
	const selectedPlatform = platforms?.results.find(
		(p) => p.id === selectedPlatformId
	);

	if (error) return null;

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				{selectedPlatform?.name || "Platforms"}
			</MenuButton>
			<MenuList>
				<MenuItem onClick={() => onSelectPlatform(null)}>All</MenuItem>
				{platforms?.results.map((platform) => (
					<MenuItem
						onClick={() => onSelectPlatform(platform)}
						key={platform.id}
					>
						{platform.name}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default PlatformSelector;
