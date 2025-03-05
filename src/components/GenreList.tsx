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
import useGameQueryStore from "@/store";

const GenreList = () => {
	const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
	const setGenreId = useGameQueryStore((s) => s.setGenreId);

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
									genre.id === genreId ? "bold" : "normal"
								}
								onClick={() => setGenreId(genre.id)}
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
