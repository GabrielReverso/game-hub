import { Game } from "@/constants/interfaces";
import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

const apiClient = new APIClient<Game>("/games/");

const useGame = (slug: string) =>
	useQuery<Game, Error>({
		queryKey: ["game", slug],
		queryFn: () => apiClient.get(slug),
		staleTime: ms("24h"),
	});

export default useGame;
