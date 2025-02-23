import { HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreListSkeleton = () => {
    return (
        <HStack>
            <Skeleton boxSize={"32px"} borderRadius={"8px"} />
            <SkeletonText width={"80%"} noOfLines={2} />
        </HStack>
    );
};

export default GenreListSkeleton;
