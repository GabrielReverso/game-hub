import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/image-url";
import { Game } from "@/constants/interfaces";
import { Link } from "react-router-dom";

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	return (
		<Card>
			<Image src={getCroppedImageUrl(game.background_image)} />
			<CardBody>
				<HStack justifyContent={"space-between"} marginBottom={3}>
					<PlatformIconList
						platforms={game.parent_platforms.map((p) => p.platform)}
					/>
					<CriticScore score={game.metacritic} />
				</HStack>
				<Heading noOfLines={3} fontSize={"2xl"} minHeight={"72px"}>
					<Link to={"games/" + game.slug}>{game.name}</Link>
				</Heading>
			</CardBody>
		</Card>
	);
};

export default GameCard;
