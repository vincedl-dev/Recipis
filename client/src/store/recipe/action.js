import { ALL_RECIPES,UPDATE_RECIPE,DELETE_RECIPE,ADD_RECIPE } from "./types"
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

export const del_Recipe = (id) => {
    return (dispatch) => {
        axios.delete(`http://localhost:5000/recipe/${id}`)
            .then(res => dispatch({type:DELETE_RECIPE,payload:res.data}))
            .catch(err => console.log(err))
    }
}

export const add_Recipe = (title,body) => {
    console.log(title,body)
    return (dispatch) => {
        axios.post(`http://localhost:5000/recipe/new-recipe`,{title,body})
            .then(res => dispatch({type:ADD_RECIPE,payload:res.data}))
            .catch(err => console.log(err))
    }
}


