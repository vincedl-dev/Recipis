import { ALL_RECIPES,UPDATE_RECIPE } from "./types"
import axios from 'axios'
export const getAllRecipes = () => {
    return  (dispatch) => {
        axios.get('http://localhost:5000/recipe/all-recipes')
        .then(res => dispatch({type:ALL_RECIPES,payload:res.data}))
        .catch(err => console.log(err.message))
    }
}

export const updataRecipe = (id,title,body) => {
    return (dispatch) => {
        axios.put(`http://localhost:5000/recipe/${id}`,{title,body})
            .then(res => dispatch({type:UPDATE_RECIPE,payload:res.data}))
            .catch(err => console.log(err))
    }
}

