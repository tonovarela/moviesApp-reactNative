import { useEffect, useState } from "react";
import movieDB from "../api/movieDB"

import { Movie, ResponseMovieResponse } from "../interfaces/movie.interface"

interface MoviesState {
    nowPlaying: Movie[];
    popular: Movie[];
    topRated: Movie[];
    upComing: Movie[];
}
export const useMovies = () => {
    const [isLoading, setIsLoading] = useState(true)
     const [errorNetwork, seterrorNetwork] = useState(false)
    const [moviesState, setMoviesState] = useState<MoviesState>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upComing: []
    })

    useEffect(() => {
        getMovies();
    }, [])

    const getMovies = async () => {
        try{
            const [respMovies, respPopular, respTopRated, respUpcoming] = await Promise.all([
                movieDB.get<ResponseMovieResponse>('/now_playing'),
                movieDB.get<ResponseMovieResponse>('/popular'),
                movieDB.get<ResponseMovieResponse>('/top_rated'),
                movieDB.get<ResponseMovieResponse>('/upcoming'),
            ]);
            setMoviesState(
                {
                    nowPlaying: respMovies.data.results,
                    popular: respPopular.data.results.reverse(),
                    topRated: respTopRated.data.results,
                    upComing: respUpcoming.data.results,
                }
            )
            setIsLoading(false);
        }catch(error){
            seterrorNetwork(true);
            console.log(error)
        }
        
    }
    return {
        ...moviesState,
        errorNetwork,
        isLoading
    }
}