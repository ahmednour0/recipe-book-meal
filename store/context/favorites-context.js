import { createContext, useState } from "react";

export const FavoriteContext = createContext({
    ids:[], 
    addFavorite:(id) => {},
    removeFavorite:(id) => {}
    
})

function FavoriteContextProvider({children}){
    const [favoriteIds,setfavoriteIds]=  useState([])
    const addFavorite = (id) => {
        setfavoriteIds((prev) => [...prev,id])
    }
    const removeFavorite = (id) => {
        setfavoriteIds((prev) => [prev.filter((mealId) => mealId !==id)])

    }
    const value ={
        ids:favoriteIds, 
        addFavorite:addFavorite,
        removeFavorite:removeFavorite
        
    }
    return <FavoriteContext.Provider value={value}>{children}</FavoriteContext.Provider>
}

export default  FavoriteContextProvider ;