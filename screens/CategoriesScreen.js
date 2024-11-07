import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTitle from '../components/CategoryGridTitle';





const CategoriesScreen = ({ navigation }) => {
  const renderCategoryItem = (itemData) => {
    const pressHandler = () => {
navigation.navigate("mealoverview",{categorydataId:itemData.item.id});
    };

    return (
      <CategoryGridTitle 
        title={itemData.item.title} 
        color={itemData.item.color} 
        onPress={pressHandler} 
      />
    );
  };

  return (
    <FlatList 
      data={CATEGORIES} 
      keyExtractor={(item) => item.id} 
      renderItem={renderCategoryItem} 
      numColumns={2} 
    />
  );
};

const styles = StyleSheet.create({})

export default CategoriesScreen;
