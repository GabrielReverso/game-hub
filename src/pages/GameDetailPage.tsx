import ExpandableText from "@/components/ExpandableText";
import GameAtributes from "@/components/GameAtributes";
import GameDetailSkeleton from "@/components/GameDetailSkeleton";
import GameScreenshots from "@/components/GameScreenshots";
import GameTrailer from "@/components/GameTrailer";
import useGame from "@/hooks/useGame";
import keepOnlyEnglish from "@/utilities/keepOnlyEnglish";
import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const GameDetailPage = () => {
	const { slug } = useParams();
	const { data: game, isLoading, error } = useGame(slug!); // variable! indicates that will never be null

	if (isLoading) return <GameDetailSkeleton />;

	if (error || !game) throw error;

	const description = keepOnlyEnglish(game.description_raw);

	return (
		<SimpleGrid
			templateColumns={{
				base: "1fr",
				md: "1.5fr 1fr",
			}}
			spacing={5}
		>
			<GridItem>
				<Heading marginBottom={5}>{game.name}</Heading>
				<ExpandableText>{description}</ExpandableText>
				<GameAtributes game={game} />
			</GridItem>
			<GridItem>
				<GameTrailer gameId={game.id} />
				<GameScreenshots gameId={game.id} />
			</GridItem>
		</SimpleGrid>
	);
};

export default GameDetailPage;
