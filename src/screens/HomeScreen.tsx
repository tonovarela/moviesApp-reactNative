import React from 'react'
import { ActivityIndicator, Dimensions, View, ScrollView, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider, MoviePoster } from '../components'
import { useMovies } from '../hooks'

const { width: windowWith } = Dimensions.get('window');


export const HomeScreen = () => {
    const { topRated, popular, nowPlaying, upComing, isLoading, errorNetwork } = useMovies();
    const { top } = useSafeAreaInsets();
    if (errorNetwork) {
        return (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', }}> Red de datos no disponible</Text>
        </View>)
    }
    if (isLoading) {
        return (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator color='red' size={100}></ActivityIndicator>
        </View>)
    }

    return (

        <ScrollView>
            <View style={{ marginTop: top + 20 }}>
                <View style={{ height: 440 }}>
                    <Carousel data={nowPlaying}
                        sliderWidth={windowWith}
                        inactiveSlideScale={0.9}
                        itemWidth={300}
                        renderItem={({ item }: any) => <MoviePoster movie={item}></MoviePoster>} />
                </View>
                <HorizontalSlider title='Popular' movies={popular}></HorizontalSlider>
                <HorizontalSlider title='Top' movies={topRated}></HorizontalSlider>
                <HorizontalSlider title='Upcoming' movies={upComing}></HorizontalSlider>


            </View>
        </ScrollView>



    )
}
