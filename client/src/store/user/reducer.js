import { SIGNUP,ERROR_SIGNUP,LOGIN,ERROR_LOGIN,LOGEDIN,API_END, LOG_OUT } from "./types"

const initialState = {
    logintoken:localStorage.getItem("logintoken"),
    username:"",
    message:"",
    datatype:'',
    isCreated:false,  
    isLogin:false,
    islogout:false
    
}

const userReducer = (state = initialState,action) => {
    
 
    switch(action.type){
        case  SIGNUP: return { 
            ...state,
            isCreated:true,
            message:action.payload.message,
            type:SIGNUP,
            apiLoadingL:true,
            datatype:SIGNUP
          
        }

        case  ERROR_SIGNUP: return {
         
            ...state,
            message:action.payload.message,
            isCreated:false,
            type:ERROR_SIGNUP,
            isCreated:false,
            apiLoading:true,
            datatype:ERROR_SIGNUP
       
        }
     
        case  LOGIN: return {
         
            ...state,
            message:action.payload.message,
            username:action.payload.username,        
            isAuthenticated:true,
            type:LOGIN,
            apiLoadingL:true,
            datatype:LOGIN,
            
        }

        case  ERROR_LOGIN: return {
         
            ...state,
            message:action.payload.message,
            isLogin:false,
          
            type:ERROR_LOGIN,
            apiLoadingL:true,
            datatype:ERROR_LOGIN
          
        }

        case  LOGEDIN: return {
            ...state,
            username:action.payload.username,
            isAuthenticated:false,
        
        }
        case "SET_TOKEN": return{
            ...state,
            logintoken:localStorage.getItem("logintoken")
        }
        case LOG_OUT: return{
            ...state,
            datatype:'',
            islogout:true,
            message:action.payload.message,
            logintoken:'',
            }

        case API_END: return{
            ...state,
            datatype:'',    
           
        }
        

        default:return state
    }
}

export default userReducer  