import { FetchResponse, Screenshot } from "@/constants/interfaces";
import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

const useScreenshots = (gameId: number) => {
	const apiClient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);

	return useQuery<FetchResponse<Screenshot>, Error>({
		queryKey: ["screenshots", gameId],
		queryFn: () => apiClient.getAll(),
		staleTime: ms("24h"),
	});
};

export default useScreenshots;
