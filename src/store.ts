import { create } from "zustand";
import { GameQuery } from "./constants/interfaces";

interface GameQueryStore {
	gameQuery: GameQuery;
	setGenreId: (id: number) => void;
	setPlatformId: (id?: number) => void;
	setSortOrder: (sortOrder: string) => void;
	setSearchText: (searchText: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
	gameQuery: {} as GameQuery,
	setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
	setSortOrder: (sortOrder) =>
		set((store) => ({
			gameQuery: { ...store.gameQuery, sortOrder: sortOrder },
		})),
	setPlatformId: (id) =>
		set((store) => ({ gameQuery: { ...store.gameQuery, platformId: id } })),
	setGenreId: (id) =>
		set((store) => ({ gameQuery: { ...store.gameQuery, genreId: id } })),
}));

export default useGameQueryStore;
