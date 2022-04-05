import { ALL_RECIPES,UPDATE_RECIPE,DELETE_RECIPE,ADD_RECIPE,USER_RECIPES,RECIPE_DETAILS, API_END,SEARCH_RESULT, ERROR_DETAILS, ERROR_UPDATE, ERROR_DELETE } from "./types"

const initialState = {
    recipes:[],
    userRecipes:[],
    recipedetails:[],
    datatype:'',
    message:'',
    searchResult:[],
    isApiLoading:true
}

const recipeReducer = (state = initialState,action) => {
    
    console.log(action.payload)
    switch(action.type){
        case ALL_RECIPES: return{
            ...state,
            recipes:action.payload,
            message:'',
            datatype:''
         
        }   
        case UPDATE_RECIPE: return{
            ...state,
            message:action.payload.message,
            datatype:UPDATE_RECIPE
        }

        case ERROR_UPDATE: return{
            ...state,
            message:action.payload.message,
            datatype:UPDATE_RECIPE
        }



        case DELETE_RECIPE: return{
            ...state,
            message:action.payload.message,
            datatype:DELETE_RECIPE
        }

        case ERROR_DELETE: return{
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
            userRecipes:action.payload,
            isApiLoading:false
        }

        case RECIPE_DETAILS: return{
            ...state,
            recipedetails:action.payload,
            isApiLoading:false
        }
        
        case ERROR_DETAILS: return{
            ...state,
            recipedetails:action.payload,
            isApiLoading:false
        }

        case SEARCH_RESULT: return{
            ...state,
            searchResult:action.payload,
            isApiLoading:false
        }
        
        case API_END: return{
            ...state,
            message:'',
            datatype:'',
            isApiLoading:true
        }


        default:return state
    }
}

export default recipeReducer  