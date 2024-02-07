import { useEffect, useState } from "react";
import movieDB from "../api/movieDB"
import { Movie, ResponseMovieNowPlaying } from "../interfaces/movie.interface"

export const useMovies = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [moviesNowPlaying, setMovieNowPlaying] = useState<Movie[]>([]);

    useEffect(() => {
        getMovieNowPlaying();
    }, [])


    const getMovieNowPlaying = async () => {
        
        const respMovies = await movieDB.get<ResponseMovieNowPlaying>('/now_playing')
        setMovieNowPlaying(respMovies.data.results);
        setIsLoading(false);
    }

    return {
        moviesNowPlaying,
        isLoading
    }
}