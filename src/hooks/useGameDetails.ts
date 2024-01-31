import { useQuery } from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";
import ms from "ms";
import { GameDetails } from "../games/gameDetailsStore";
import APIClient from "../services/api-client";


const apiClient = new APIClient<GameDetails>('/games');

const useGameDetails = (id: number) => 
  useQuery<GameDetails,Error>({
    queryKey: ['gameDetails',id],
    queryFn: () => apiClient.getOne(id, {} as AxiosRequestConfig),
    staleTime: ms('24h')
  })
;

export default useGameDetails ;