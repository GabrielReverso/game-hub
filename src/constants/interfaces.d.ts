export interface Publisher {
	id: number;
	name: string;
}

export interface Platform {
	id: number;
	name: string;
	slug: string;
}

export interface Genre {
	id: number;
	name: string;
	image_background: string;
}

export interface Game {
	id: number;
	name: string;
	slug: string;
	genres: Genre[];
	publishers: Publisher[];
	description_raw: string;
	background_image: string;
	parent_platforms: [{ platform: Platform }];
	metacritic: number;
}

export interface GameQuery {
	genreId?: number;
	platformId?: number;
	sortOrder?: string;
	searchText?: string;
}

export interface FetchResponse<T> {
	count: number;
	next: string | null;
	results: T[];
}

export interface Trailer {
	id: number;
	name: string;
	preview: string;
	data: { 480: string; max: string };
}
