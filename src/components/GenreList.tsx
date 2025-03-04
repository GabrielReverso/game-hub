import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import {
	Button,
	Heading,
	HStack,
	Image,
	List,
	ListItem,
} from "@chakra-ui/react";
import GenreListSkeleton from "./GenreListSkeleton";
import { Genre } from "@/constants/interfaces";

interface Props {
	onSelectGenre: (genre: Genre) => void;
	selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
	const { data: genres, isLoading, error } = useGenres();
	const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

	if (error) return null;

	return (
		<>
			<Heading fontSize={"2xl"} marginBottom={3}>
				Genres
			</Heading>
			<List>
				{isLoading &&
					skeletons.map((skeleton) => (
						<ListItem key={skeleton} paddingY={"5px"}>
							<GenreListSkeleton />
						</ListItem>
					))}
				{genres?.results.map((genre) => (
					<ListItem key={genre.id} paddingY={"5px"}>
						<HStack>
							<Image
								boxSize={"32px"}
								borderRadius={"8px"}
								objectFit={"cover"}
								src={getCroppedImageUrl(genre.image_background)}
							/>
							<Button
								textAlign={"left"}
								whiteSpace={"normal"}
								fontWeight={
									genre.id === selectedGenre?.id
										? "bold"
										: "normal"
								}
								onClick={() => onSelectGenre(genre)}
								fontSize={"lg"}
								variant={"link"}
							>
								{genre.name}
							</Button>
						</HStack>
					</ListItem>
				))}
			</List>
		</>
	);
};

export default GenreList;
