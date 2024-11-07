import {React,useContext,useLayoutEffect} from "react";
import { StyleSheet, View, Text, Image,ScrollView, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import SubTitle from "../components/MealDetail/SubTitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
 import { addFavorite, removeFavorite } from "../store/redux/favorites";
// import { FavoriteContext } from "../store/context/favorites-context";
const MealsDetails = ({ route,navigation }) => {
//  const favoriteMealsCtx = useContext(FavoriteContext)
  const mealid = route.params.mealId;
  const SelectedMeals = MEALS.find((meal) => meal.id === mealid);
 const dispatch= useDispatch()
  const favoriteMealsIds= useSelector((state) =>state.favoriteMeals.Ids)
  console.log(favoriteMealsIds)
  const mealsFavorite = favoriteMealsIds.includes(mealid)
  const ChangeFavouriteStatus = () => {
    if (mealsFavorite) {
      dispatch(removeFavorite({id:mealid}))
    } else{
      dispatch(addFavorite({id:mealid}))
    }   
      }
  useLayoutEffect(() => {
    navigation.setOptions({headerRight:()=>{
          return <IconButton icon={mealsFavorite ? 'star':'star-outline'} color="white" onPress={ChangeFavouriteStatus}/>
         }})
  },[navigation,ChangeFavouriteStatus])
  return (
    <ScrollView style={styles.RootContainer}>
      <Image source={{ uri: SelectedMeals.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{SelectedMeals.title}</Text>
      <View></View>
      <MealDetails
        duration={SelectedMeals.duration}
        complexity={SelectedMeals.complexity}
        affordability={SelectedMeals.affordability}
        textStyle={styles.detailsText}
      />
     <View style={styles.ListOuterContainer}>
      <View style={styles.ListContainer}>
        <SubTitle>Ingredients</SubTitle>
        <List data={SelectedMeals.ingredients} />
        <SubTitle>Steps</SubTitle>
        <List data={SelectedMeals.steps} />
      </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    RootContainer:{
        marginBottom:32
    },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailsText: {
    color: "white",
  },
  ListOuterContainer:{
alignItems:"center"
  },
  ListContainer:{
    width:'80%',
  },
});

export default MealsDetails;
