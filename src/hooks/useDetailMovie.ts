import { useEffect, useState } from "react";
import movieDB from "../api/movieDB";
import { Cast, ResponseCredits, ResponseMovieFull } from "../interfaces/movie.interface";

interface MovieDetails {
    cast: Cast[];
    isLoading: boolean;
    movieFull?: ResponseMovieFull;
}
export const useDetailMovie = (movieId: number) => {
    const [state, setState] = useState<MovieDetails>({
        cast: [],
        isLoading: true,
        movieFull: undefined
    })
    const getMovieDetails = async () => {

        const [respMovieDetail, respCast] = await Promise.all([movieDB.get<ResponseMovieFull>(`/${movieId}`),
        movieDB.get<ResponseCredits>(`/${movieId}/credits`)]);

        setState({
            cast: respCast.data.cast,
            isLoading: false,
            movieFull: respMovieDetail.data!
        })
    }

    useEffect(() => {
        getMovieDetails()
    }, []);

    return {
        ...state

    }

}