import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import MealItem from './MealItem'
const MealList = ({items}) => {
    const rendermealitem = (itemdata) => {
        var item =itemdata.item
        var mealsprops={
            id:item.id,
            title:item.title,
            imageUrl:item.imageUrl,
            duration:item.duration,
            complexity:item.complexity,
            affordability:item.affordability,
    
        }
    
    
      return (<MealItem {...mealsprops}/>)
    }
    
        return (
            <View style={styles.container}>
            <FlatList data={items} keyExtractor={(item)=>item.id} renderItem={rendermealitem}/>
            </View>
        );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:16
    }
})

export default MealList;
