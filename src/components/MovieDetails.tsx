import React from 'react'
import { Text, View, FlatList } from 'react-native'
import { Cast, ResponseMovieFull } from '../interfaces/movie.interface';
import Icon from 'react-native-vector-icons/Ionicons';

import currencyFormater from 'currency-formatter'
import { CastItem } from './CastItem';


interface Props {
    movieFull: ResponseMovieFull;
    cast: Cast[];
}
export const MovieDetails = ({ cast, movieFull }: Props) => {
    return (
        <>
       
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Icon name='star-outline' color='gray' size={16} ></Icon>
                    <Text>{movieFull.vote_average}</Text>
                    <Text style={{ marginLeft: 5 }}>
                        -{movieFull.genres.map((item) => item.name).join(",")}</Text>
                </View>
                <Text>{movieFull.release_date.substring(0,4)}</Text>
                <Text style={{ fontSize: 25, marginTop: 10, fontWeight: 'bold' }}>
                    Sinopsis
                </Text>
                <Text style={{ fontSize: 14 }}>
                    {movieFull.overview}
                </Text>

                <Text style={{ fontSize: 25, marginTop: 10, fontWeight: 'bold' }}>
                    Presupuesto
                </Text>
                <Text style={{ fontSize: 18 }}>
                    {currencyFormater.format(movieFull.budget, { code: 'USD' })}
                </Text>
            </View>
            <View style={{ marginTop: 10, marginHorizontal: 20, marginBottom: 100 }}>
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>CAST</Text>
                <FlatList data={cast}
                style={{marginTop:10}}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(actor: Cast) => actor.id.toString()}
                    renderItem={({ item }) => <CastItem actor={item} />}
                />



            </View>



        </>
    )
}
