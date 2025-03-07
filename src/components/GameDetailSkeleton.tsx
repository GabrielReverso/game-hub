import {
	Box,
	GridItem,
	SimpleGrid,
	Skeleton,
	SkeletonText,
} from "@chakra-ui/react";

const GameDetailSkeleton = () => {
	const skeletons = [0, 1, 2, 3, 4];
	return (
		<SimpleGrid
			templateColumns={{
				base: "100%",
				md: "1.5fr 1fr",
			}}
			spacing={5}
		>
			<GridItem>
				<Box width={"80%"} position={"relative"}>
					<SkeletonText
						skeletonHeight={"10"}
						marginBottom={5}
						noOfLines={1}
					/>
				</Box>
				<SkeletonText noOfLines={4} marginBottom={5} />
				<SimpleGrid columns={2}>
					<Box marginY={5}>
						<SkeletonText
							skeletonHeight={"2"}
							noOfLines={1}
							marginBottom={"2"}
							width={"25%"}
						/>
						<SkeletonText noOfLines={1} width={"30%"} />
					</Box>
					<Box marginY={5}>
						<SkeletonText
							skeletonHeight={"2"}
							noOfLines={1}
							marginBottom={"2"}
							width={"25%"}
						/>
						<SkeletonText noOfLines={1} width={"30%"} />
					</Box>
					<Box marginY={5}>
						<SkeletonText
							skeletonHeight={"2"}
							noOfLines={1}
							marginBottom={"2"}
							width={"25%"}
						/>
						<SkeletonText noOfLines={1} width={"30%"} />
					</Box>
					<Box marginY={5}>
						<SkeletonText
							skeletonHeight={"2"}
							noOfLines={1}
							marginBottom={"2"}
							width={"25%"}
						/>
						<SkeletonText noOfLines={1} width={"30%"} />
					</Box>
				</SimpleGrid>
			</GridItem>
			<GridItem>
				<Skeleton height={400} borderRadius={10} />
				<SimpleGrid columns={{ sm: 1, md: 2 }} spacing={3} marginY={5}>
					{skeletons.map((s) => (
						<Skeleton borderRadius={10} height={150} key={s} />
					))}
				</SimpleGrid>
			</GridItem>
		</SimpleGrid>
	);
};

export default GameDetailSkeleton;
