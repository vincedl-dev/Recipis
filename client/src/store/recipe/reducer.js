import { ALL_RECIPES,UPDATE_RECIPE } from "./types"

const initialState = {
    recipes:[]
}

const recipeReducer = (state = initialState,action) => {

 
    switch(action.type){
        case ALL_RECIPES: return{
            ...state,
            recipes:action.payload
        }   
        case UPDATE_RECIPE: return{
            ...state,
            message:action.payload.message
        }

        default:return state
    }
}

export default recipeReducer  