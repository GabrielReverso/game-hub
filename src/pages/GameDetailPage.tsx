import ExpandableText from "@/components/ExpandableText";
import GameAtributes from "@/components/GameAtributes";
import GameTrailer from "@/components/GameTrailer";
import useGame from "@/hooks/useGame";
import keepOnlyEnglish from "@/utilities/keepOnlyEnglish";
import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const GameDetailPage = () => {
	const { slug } = useParams();
	const { data: game, isLoading, error } = useGame(slug!); // variable! indicates that will never be null

	if (isLoading) return <Spinner />;

	if (error || !game) throw error;

	const description = keepOnlyEnglish(game.description_raw);

	return (
		<>
			<Heading>{game.name}</Heading>
			<ExpandableText>{description}</ExpandableText>
			<GameAtributes game={game} />
			<GameTrailer gameId={game.id} />
		</>
	);
};

export default GameDetailPage;
