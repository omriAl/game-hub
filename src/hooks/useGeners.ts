import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchGenreResponse {
    count: number;
    results: Genre[];
  }

  
  export interface Genre {
    id: number;
    name: string;
  }

const useGenre = (() => {
    const controller = new AbortController() ;
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading,setIsLoading] = useState(false) ;
  
    useEffect(() => {
      setIsLoading(true)
      apiClient
        .get<FetchGenreResponse>("/genres")
        .then((res) => {setGenres(res.data.results);
        setIsLoading(false)})
        .catch((err) => { if (err instanceof CanceledError) return; 
            setError(err.message)
          setIsLoading(false)})
        return () =>controller.abort()
    }, []);
    return ({genres,error,isLoading})
})

export default useGenre; 