import React, { useContext, useEffect } from 'react'


import { ActivityIndicator, Dimensions, View, ScrollView, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider, MoviePoster } from '../components'
import { useMovies } from '../hooks';
import { GradientBackground } from '../components/GradientBackground';
import { getColors } from '../helpers/helpers';
import { GradientContext } from '../context/GradientsContext';
const { width: windowWith } = Dimensions.get('window');




export const HomeScreen = () => {

    const { topRated, popular, nowPlaying, upComing, isLoading, errorNetwork } = useMovies();
    const { top } = useSafeAreaInsets();
    const { setMainColors } = useContext(GradientContext)


    useEffect(() => {
        if (nowPlaying.length > 0) {
            getPosterColor(0);
        }
    }, [nowPlaying]);
    
    const getPosterColor = async (index: number) => {
        const movie = nowPlaying[index];
        const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
        const [primary = 'orange', secondary = 'green'] = await getColors(uri);
        setMainColors({ primary, secondary })
    }

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

        <GradientBackground>
            <ScrollView>
                <View style={{ marginTop: top + 20 }}>
                    <View style={{ height: 440 }}>
                        <Carousel data={nowPlaying}
                            sliderWidth={windowWith}
                            inactiveSlideScale={0.9}
                            itemWidth={300}
                            onSnapToItem={getPosterColor}
                            renderItem={({ item }: any) => <MoviePoster movie={item}></MoviePoster>} />
                    </View>
                    <HorizontalSlider title='Popular' movies={popular}></HorizontalSlider>
                    <HorizontalSlider title='Top' movies={topRated}></HorizontalSlider>
                    <HorizontalSlider title='Upcoming' movies={upComing}></HorizontalSlider>
                </View>
            </ScrollView>
        </GradientBackground>




    )
}
