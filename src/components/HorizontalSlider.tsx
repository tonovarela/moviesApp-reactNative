import { FlatList, Text, View } from "react-native"
import { Movie } from "../interfaces/movie.interface";
import { MoviePoster } from "./MoviePoster";

interface Props {
    title?: string;
    movies: Movie[],
}

export const HorizontalSlider = ({ title, movies }: Props) => {
    return (
        <View style={{ height: (title)?260:220 }}>

            {title && (<Text style={{ fontSize: 20,fontWeight:'bold',marginLeft:10 }}  >{title}</Text>)}
            <FlatList data={movies}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }: any) => <MoviePoster movie={item} height={200} width={140}></MoviePoster>}
            />


        </View>
    )
}
