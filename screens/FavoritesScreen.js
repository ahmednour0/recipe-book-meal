import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MealList from '../components/MealList/MealList';
import { FavoriteContext } from '../store/context/favorites-context';
import { MEALS } from '../data/dummy-data';
import { useSelector } from 'react-redux';
const FavoritesScreen = () => {
 const favoriteMeailId =  useSelector((state) => state.favoriteMeals.Ids)
    const FavoriteMealCtx = useContext(FavoriteContext)
const favoriteMeals = MEALS.filter(meal=> favoriteMeailId.includes(meal.id) )
    if (favoriteMeals.length ===0) {
        return(
        <View style={styles.rootContainer}>
            <Text style={styles.text}>No favorite meals found. Find some!</Text>
        </View>)
    }

return <MealList items={favoriteMeals}/>
}

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
fontSize:18,
fontWeight:"bold",
color:"white"
    }
})

export default FavoritesScreen;
