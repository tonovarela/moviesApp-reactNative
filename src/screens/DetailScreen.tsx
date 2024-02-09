import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { ActivityIndicator, Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { RouteStackScreen } from '../navigation/types/RouteStack.type';

import { useDetailMovie } from '../hooks';
import { MovieDetails } from '../components';

import Icon from 'react-native-vector-icons/Ionicons';
const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RouteStackScreen, 'DetailScreen'> {
}

export const DetailScreen = ({ route,navigation }: Props) => {
  const movie = route.params;
  
  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  const { isLoading, movieFull, cast } = useDetailMovie(movie.id);

  return (
    <ScrollView>
      <View style={styles.imageContainer} >
        <View style={styles.imageBorder}>
          <Image source={{ uri }} style={styles.posterImage} ></Image>
        </View>

      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.subTitle} >{movie.original_title}</Text>
        <Text style={styles.title} >{movie.title}</Text>

      </View>
      <View >
        {
          isLoading ? <ActivityIndicator color='gray' size={35} style={{ marginTop: 20 }}></ActivityIndicator>
            : <MovieDetails movieFull={movieFull!} cast={cast}></MovieDetails>
        }
      </View>

      <TouchableOpacity onPress={() => navigation.pop()} style={styles.backButton}>
        <Icon color='white' name='arrow-back' style={styles.backButton

        } size={50}></Icon>
      </TouchableOpacity>

    </ScrollView>

  )
}


const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    top: 20,
    left: 5
  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  posterImage: {
    flex: 1,

  },
  imageContainer: {
    height: screenHeight * 0.7,
    width: '100%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
    borderRadius: 18,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,

  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.8
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  }

});