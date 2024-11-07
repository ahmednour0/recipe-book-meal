import {React,useEffect} from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';
import {MEALS,CATEGORIES} from '../data/dummy-data'
import { useRoute } from '@react-navigation/native';
import MealList from '../components/MealList/MealList';
const MealsOverViewScreen = ({navigation}) => {
    const route =useRoute()
    const catId =route.params.categorydataId;
const displayedmeals = MEALS.filter((mealitem) => {
    return mealitem.categoryIds.indexOf(catId)>=0
})

useEffect(() => {
    const categoryTitle =CATEGORIES.find((category) => category.id ===catId).title
    navigation.setOptions({
        title:categoryTitle
    })
},[navigation,catId])

return <MealList items={displayedmeals}/>

}



export default MealsOverViewScreen;
