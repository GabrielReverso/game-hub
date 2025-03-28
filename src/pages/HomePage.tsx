import GameGrid from "@/components/GameGrid";
import GameHeading from "@/components/GameHeading";
import GenreList from "@/components/GenreList";
import PlatformSelector from "@/components/PlatformSelector";
import SortSelector from "@/components/SortSelector";
import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";

function HomePage() {
	return (
		<Grid
			templateAreas={{
				base: `"main"`,
				lg: `"aside main"`,
			}}
			templateColumns={{
				base: "1fr",
				lg: "200px 1fr",
			}}
		>
			<Show above="lg">
				<GridItem area="aside" paddingRight={5}>
					<GenreList />
				</GridItem>
			</Show>
			<GridItem area="main">
				<Box marginBottom={5} paddingX={15}>
					<GameHeading />
					<Flex
						marginBottom={5}
						direction={{ base: "column", md: "row" }}
					>
						<Box marginRight={4} marginBottom={{ base: 5, md: 0 }}>
							<PlatformSelector />
						</Box>
						<SortSelector />
					</Flex>
				</Box>
				<GameGrid />
			</GridItem>
		</Grid>
	);
}

export default HomePage;
