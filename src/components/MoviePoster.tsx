import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Movie } from '../interfaces/movie.interface'

interface Props {
    movie: Movie,
    height?: number,
    width?: number
}
export const MoviePoster = ({ movie ,height=420,width=300}: Props) => {
    const { title, poster_path } = movie;
    const url = `https://image.tmdb.org/t/p/w500/${poster_path}`;
    return (
        <View style={{ width, height ,marginHorizontal:7}}>
            <View style={styles.container}>
                <Image source={{ uri: url }} style={styles.image}></Image>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 20,
    },
    container: {
        flex: 1,
        borderRadius:18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.44,
        shadowRadius: 7,
        elevation: 16
    }
})