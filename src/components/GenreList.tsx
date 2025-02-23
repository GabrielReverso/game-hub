import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = () => {
    const { data: genres, isLoading, error } = useGenres();
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

    if (error) return null;

    return (
        <List>
            {isLoading &&
                skeletons.map((skeleton) => (
                    <ListItem key={skeleton} paddingY={"5px"}>
                        <GenreListSkeleton />
                    </ListItem>
                ))}
            {genres.map((genre) => (
                <ListItem key={genre.id} paddingY={"5px"}>
                    <HStack>
                        <Image
                            boxSize={"32px"}
                            borderRadius={"8px"}
                            src={getCroppedImageUrl(genre.image_background)}
                        />
                        <Text fontSize={"lg"}>{genre.name}</Text>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
};

export default GenreList;
