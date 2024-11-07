import React from "react";
import { StyleSheet, View, Text, Pressable ,Image, Platform} from "react-native";
import {useNavigation} from '@react-navigation/native'
import MealDetails from "../MealDetails";
const MealItem = ({ id,affordability,complexity,duration,imageUrl,title}) => {

  const navigation =useNavigation()

  const SelectMealItem = (params) => {
    navigation.navigate("MealDetail",{mealId:id})

  }
  
  return (
    <View style={styles.mealitem}>
      <Pressable android_ripple={{color:"#ccc"}} style={({pressed})=>[styles.button,pressed?styles.buttonpressed:null,]}
      onPress={SelectMealItem}
      >
      <View style={styles.innerContainer}>
        <View>
        <Image source={{uri:imageUrl}} style={styles.image}/>
          <Text style={styles.title}>{title}</Text>
        </View>
<MealDetails affordability={affordability} complexity={complexity} duration={duration}/>
     
</View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
    innerContainer:{
borderRadius:8,
overflow:"hidden"
    },
    mealitem:{
        margin:16,
        borderRadius:8,
       overflow:Platform.OS ==="android"?"hidden":"visible",
        backgroundColor:"white",
        elevation:4,
        shadowColor:"black",
            shadowOffset:{width:0,height:2},
            shadowOpacity:.25,
            shadowRadius:16, 
    },
    image:{
        width:"100%",
        height:200
    },
    title:{
        fontWeight:"bold",
        fontSize:18,
        textAlign:"center",
        padding:8
    },
    
});

export default MealItem;
