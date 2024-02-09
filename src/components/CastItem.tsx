import React from 'react'
import { Cast } from '../interfaces/movie.interface'
import { Image, StyleSheet, Text, View } from 'react-native'
interface Props {
    actor: Cast
}
export const CastItem = ({ actor }: Props) => {
    const uri = `https://image.tmdb.org/t/p/w500/${actor.profile_path}`;
    return (
        <View style={style.container}>
            {
                actor.profile_path && (
                    <Image source={{ uri }} style={{ width: 50, height: 50, borderRadius: 10 }}></Image>
                )
            }
            <View style={style.actorInfo} >
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    {actor.name}
                </Text>
                <Text style={{ fontSize: 16, opacity: 0.7 }}>
                    {actor.character}
                </Text>
            </View>

        </View>
    )
}


const style = StyleSheet.create({
    actorInfo: {
        marginLeft: 10,
        paddingHorizontal:20
    },
    container: {
        marginRight:10,
        padding:5,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 10
    }
});