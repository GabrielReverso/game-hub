import usePlatform from "@/hooks/usePlatform";
import usePlatforms from "@/hooks/usePlatforms";
import useGameQueryStore from "@/store";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const PlatformSelector = () => {
	const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
	const setPlatformId = useGameQueryStore((s) => s.setPlatformId);

	const { data: platforms, error } = usePlatforms();
	const selectedPlatform = usePlatform(platformId);

	if (error) return null;

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				{selectedPlatform?.name || "Platforms"}
			</MenuButton>
			<MenuList>
				<MenuItem onClick={() => setPlatformId(undefined)}>
					All
				</MenuItem>
				{platforms?.results.map((platform) => (
					<MenuItem
						onClick={() => setPlatformId(platform.id)}
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
