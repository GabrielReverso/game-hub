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
	background_image: string;
	parent_platforms: [{ platform: Platform }];
	metacritic: number;
}

export interface GameDetails {
	id: number;
	name: string;
	slug: string;
	description_raw: string;
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
