import { create } from "zustand";



export interface GameDetails {
    id?: number;
    name?: string;
    description_raw?: string;
    background_image?: string;  
  }


  interface GameDetailsStore {
    game: GameDetails ;
    setGame: (game: GameDetails) => void;
} ;


const useGameDetailsStore = create<GameDetailsStore>(set => (
    {
       game:{},
       setGame: game => set(() => ({game: game}))
    }
))

export default useGameDetailsStore ;
