import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverViewScreen from "./screens/MealsOverViewScreen";
import MealsDetails from "./screens/MealsDetails";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "./screens/FavoritesScreen";
import {Ionicons} from '@expo/vector-icons' 
// import FavoriteContextProvider from "./store/context/favorites-context";
import { Provider } from "react-redux";
import {store} from './store/redux/store'
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const DrawerNavigator = (params) => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
        drawerContentStyle: { backgroundColor: "#351401" },
        drawerActiveTintColor: "#351401",
        drawerInactiveTintColor: "white",
        drawerActiveBackgroundColor: "#e4baa1",
      }}
    >
      <Drawer.Screen
        name="Categories"
        options={{ title: "All Categories" ,
        drawerIcon:({color,size})=><Ionicons name="list" color={color} size={size}/>
        
        }}
        component={CategoriesScreen}
      />
      <Drawer.Screen
        name="Favorites"
        options={{        drawerIcon:({color,size})=><Ionicons name="star" color={color} size={size}/>
      }}
        component={FavoritesScreen}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/* <FavoriteContextProvider> */}
      <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="mealscategories"
          screenOptions={{
            headerStyle: { backgroundColor: "#3f2f25" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen
            name="DrawerScreen"
            component={DrawerNavigator}
            options={{ title: "All Categories", headerShown: false }}
          />
          <Stack.Screen name="mealoverview" component={MealsOverViewScreen} />

          <Stack.Screen
            name="MealDetail"
            //options={{
            //   headerRight:()=>{
            //     return <Button title='Tap me'>In the header</Button>
            //   }
            // }}
            component={MealsDetails}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>      
      {/* </FavoriteContextProvider> */}


    </>
  );
}

const styles = StyleSheet.create({});
