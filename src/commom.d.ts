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
    background_image: string;
    parent_platforms: [{ platform: Platform }];
    metacritic: number;
}

export interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
    sortOrder: string;
    searchText: string;
}
