import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { Movie } from '../interfaces/movie.interface'
import { useNavigation } from '@react-navigation/core'
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
    movie: Movie,
    height?: number,
    width?: number,

}

export const MoviePoster = ({ movie, height = 420, width = 300 }: Props) => {
    const { poster_path } = movie;
    const url = `https://image.tmdb.org/t/p/w500/${poster_path}`;
    
    const navigation = useNavigation<any>();
    const irDetalle = () => {
        navigation.navigate('DetailScreen',  movie );

    }
    return (
        <TouchableOpacity activeOpacity={8}
            onPress={irDetalle}
            style={{ width, height, marginHorizontal: 2, paddingBottom:20,paddingHorizontal:7}}>

            <View style={styles.container}>
                <Image source={{ uri: url }} style={styles.image}></Image>
            </View>

        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 20,
    },
    container: {
        flex: 1,
        borderRadius: 18,
        //shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
    //shadowOpacity:0.8,
    shadowRadius: 7,
        elevation: 10
    }
})