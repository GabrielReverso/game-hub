import { FetchResponse } from "@/constants/interfaces";
import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: import.meta.env.VITE_API_KEY,
	},
});

class APIClient<T> {
	private endpoint: string;

	constructor(endpoint: string) {
		this.endpoint = endpoint;
	}

	getAll = async (config?: AxiosRequestConfig) => {
		return axiosInstance
			.get<FetchResponse<T>>(this.endpoint, config)
			.then((res) => res.data);
	};

	get = async (id: string | number) => {
		return axiosInstance
			.get<T>(this.endpoint + "/" + id)
			.then((res) => res.data);
	};
}

export default APIClient;
