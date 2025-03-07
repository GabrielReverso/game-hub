import useScreenshots from "@/hooks/useScreenshots";
import { Image, SimpleGrid } from "@chakra-ui/react";

interface Props {
	gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
	const { data, isLoading, error } = useScreenshots(gameId);

	if (isLoading) return null;

	if (error) throw error;

	return (
		<SimpleGrid columns={{ sm: 1, md: 2 }} spacing={3} marginY={5}>
			{data.results.map((screenshot) => (
				<Image
					key={screenshot.id}
					src={screenshot.image}
					borderRadius={20}
				/>
			))}
		</SimpleGrid>
	);
};

export default GameScreenshots;
