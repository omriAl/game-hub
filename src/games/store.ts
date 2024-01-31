import { create } from "zustand";

export interface GameQuery {
    genreId?: number;
    platformId?: number;
    sortOrder?: string;
    searchText?: string;
  }

interface GameQueryStore {
    gameQuery: GameQuery ;
    addSearchText: (searchText: string) => void;
    addGenreId: (genreId: number) => void;
    addPlatformId: (platformId:number) => void ;
    addSortOrder: (sortOrder: string) => void ;
} ;


const useGameStore = create<GameQueryStore>(set => (
    {
       gameQuery:{}     ,
       addSearchText: searchText => set(() => ({gameQuery: {searchText} })),
       addGenreId: genreId => set((store) => ({gameQuery: {...store.gameQuery, genreId: genreId }})),
       addPlatformId: platformId => set((store) => ({gameQuery: {...store.gameQuery, platformId: platformId }})),
       addSortOrder: sortOrder => set((store) => ({gameQuery:{...store.gameQuery, sortOrder: sortOrder }})),
    }
))

export default useGameStore ;