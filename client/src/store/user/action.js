import axios from "axios"

import {SIGNUP,
        ERROR_SIGNUP,
        LOGIN,
        ERROR_LOGIN,
        LOGEDIN,
        API_END
    } from './types'

export const signUp = (username,email,user_password) => {
    console.log(username,email,user_password)
    return  (dispatch) => {
        axios.post('http://localhost:5000/signup',{username,email,user_password})
        .then(res => dispatch({type:SIGNUP,payload:res.data}))
        .catch(err => dispatch({type:ERROR_SIGNUP, payload:err.response.data}))
        .finally(dispatch({type:API_END,payload:{}}))
    }
}

export const login = (email,password) => {
    return  (dispatch) => {
        axios.post('http://localhost:5000/login',{email,password})
        .then(res => {
            saveToken(res.data.logintoken)
            dispatch({type:LOGIN,payload:res.data})
            })
        .catch(err => dispatch({type:ERROR_LOGIN, payload:err.response.data}))
        .finally(dispatch({type:API_END,payload:{}}))
    }
}

export const autoAuth = () =>{
   
    return (dispatch) => {
        axios.get('http://localhost:5000/isloggedin')
            .then(res => dispatch({type:LOGEDIN,payload:res.data}))
            .catch(err => console.log(err))
            
    }
}
 
const saveToken = (logintoken) => {
    localStorage.setItem('logintoken',logintoken)
}