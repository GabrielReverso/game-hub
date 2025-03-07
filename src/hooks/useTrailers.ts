import { FetchResponse, Trailer } from "@/constants/interfaces";
import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

const useTrailers = (gameId: number) => {
	const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`);

	return useQuery<FetchResponse<Trailer>, Error>({
		queryKey: ["trailers", gameId],
		queryFn: () => apiClient.getAll(),
		staleTime: ms("24h"),
	});
};

export default useTrailers;
