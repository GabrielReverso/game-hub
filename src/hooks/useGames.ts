import { useQuery } from "@tanstack/react-query";
import { FetchResponse, Game, GameQuery } from "@/constants/interfaces";
import APIClient from "@/services/api-client";

const apiClient = new APIClient<Game>("/games");

const useGames = (gameQuery: GameQuery) =>
	useQuery<FetchResponse<Game>, Error>({
		queryKey: ["games", gameQuery],
		queryFn: () =>
			apiClient.getAll({
				params: {
					genres: gameQuery.genre?.id,
					parent_platforms: gameQuery.platform?.id,
					ordering: gameQuery.sortOrder,
					search: gameQuery.searchText,
				},
			}),
		staleTime: 60 * 60 * 1000,
	});

export default useGames;
