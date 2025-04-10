import { useInfiniteQuery } from "@tanstack/react-query";
import { FetchResponse, Game } from "@/constants/interfaces";
import APIClient from "@/services/api-client";
import ms from "ms";
import useGameQueryStore from "@/store";

const apiClient = new APIClient<Game>("/games");

const useGames = () => {
	const gameQuery = useGameQueryStore((s) => s.gameQuery);

	return useInfiniteQuery<FetchResponse<Game>, Error>({
		queryKey: ["games", gameQuery],
		queryFn: ({ pageParam = 1 }) =>
			apiClient.getAll({
				params: {
					genres: gameQuery.genreId,
					parent_platforms: gameQuery.platformId,
					ordering: gameQuery.sortOrder,
					search: gameQuery.searchText,
					page: pageParam,
				},
			}),
		staleTime: ms("1h"),
		getNextPageParam: (lastPage, allPages) => {
			return lastPage.next ? allPages.length + 1 : undefined;
		},
	});
};

export default useGames;
