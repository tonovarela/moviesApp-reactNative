import React from 'react'
import { ActivityIndicator, Dimensions, View, FlatList, Text, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { useMovies } from '../hooks/useMovies'
import { MoviePoster } from '../components/MoviePoster'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import Carousel from 'react-native-snap-carousel';



const { width: windowWith } = Dimensions.get('window');

export const HomeScreen = () => {

    const { moviesNowPlaying, isLoading } = useMovies();
    //const navigation = useNavigation();
    const { top } = useSafeAreaInsets();
    if (isLoading) {
        return (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator color='red' size={100}></ActivityIndicator>
        </View>)
    }

    return (

        <ScrollView>
            <View style={{ marginTop: top + 20 }}>
                <View style={{ height: 440 }}>
                    <Carousel data={moviesNowPlaying}
                        sliderWidth={windowWith}
                        itemWidth={300}
                        renderItem={({ item }: any) => <MoviePoster movie={item}></MoviePoster>} />
                </View>
                {/* Peliculas populares */}
                <View style={{ backgroundColor: 'red', height: 260 }}>

                    <Text>Peliculas en cartelera---</Text>
                    <FlatList data={moviesNowPlaying}
                        keyExtractor={(item) => item.id.toString()}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }: any) => <MoviePoster movie={item} height={200} width={140}></MoviePoster>}
                    />


                </View>
                {/* Peliculas populares */}
                <View style={{ backgroundColor: 'red', height: 260 }}>

                    <Text>Peliculas en cartelera---</Text>
                    <FlatList data={moviesNowPlaying}
                        keyExtractor={(item) => item.id.toString()}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }: any) => <MoviePoster movie={item} height={200} width={140}></MoviePoster>}
                    />


                </View>
            </View>
        </ScrollView>



    )
}
