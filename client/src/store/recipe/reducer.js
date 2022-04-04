import { ALL_RECIPES,UPDATE_RECIPE,DELETE_RECIPE,ADD_RECIPE,USER_RECIPES,RECIPE_DETAILS, API_END } from "./types"

const initialState = {
    recipes:[],
    userRecipes:[],
    recipedetails:[],
    message:''
}

const recipeReducer = (state = initialState,action) => {

 
    switch(action.type){
        case ALL_RECIPES: return{
            ...state,
            recipes:action.payload
        }   
        case UPDATE_RECIPE: return{
            ...state,
            message:action.payload.message,
            datatype:UPDATE_RECIPE
        }
        case DELETE_RECIPE: return{
            ...state,
            message:action.payload.message,
            datatype:DELETE_RECIPE
        }

        case ADD_RECIPE: return{
            ...state,
            message:action.payload.message,
            datatype:ADD_RECIPE
        }

        
        case USER_RECIPES: return{
            ...state,
            userRecipes:action.payload
        }
        case RECIPE_DETAILS: return{
            ...state,
            recipedetails:action.payload
        }

        case API_END: return{
            ...state,
            message:'',
            datatype:''
        }



        default:return state
    }
}

export default recipeReducer  