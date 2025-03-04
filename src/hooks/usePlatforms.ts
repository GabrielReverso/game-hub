import { Platform } from "@/constants/interfaces";
import { useQuery } from "@tanstack/react-query";
import platforms from "@/constants/platforms";
import APIClient from "@/services/api-client";
import ms from "ms";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
	useQuery({
		queryKey: ["platforms"],
		queryFn: apiClient.getAll,
		staleTime: ms("24h"),
		initialData: platforms,
	});

export default usePlatforms;
