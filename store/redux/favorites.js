import {createSlice} from '@reduxjs/toolkit'

 const favoriteSlice =  createSlice({
name: 'favorites',
initialState:{
    Ids: [],

},
reducers:{
    addFavorite: (state, action) => {
        state.Ids.push(action.payload.id);
    },
    removeFavorite: (state, action) => {
        state.Ids.splice(state.Ids.indexOf(action.payload.id),1)
    }
}
 })

export const addFavorite =  favoriteSlice.actions.addFavorite
export const removeFavorite =  favoriteSlice.actions.removeFavorite
 export default favoriteSlice.reducer