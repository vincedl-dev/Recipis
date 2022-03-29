

export const signUp = (email,password) => {
    return  (dispatch) => {
        axios.post('http://localhost:5000/signup',{email,password})
        .then(res => dispatch({type:USER_REGISTRATION,payload:res}))
        .catch(err => console.log(err.message))
    }
}

export const login = (email,password) => {
    return  (dispatch) => {
        axios.post('http://localhost:5000/login',{email,password},{withCredentials: true, credentials: 'include'})
        .then(res => dispatch({type:USER_LOGIN,payload:res}))
        .catch(err => console.log(err))
    }
}


export const autoAuth = () => {
    return(dispatch) => {
        axios.get('http://localhost:5000/islogin')
        .then(res => dispatch({type:ISLOGINED,payload:res.data}))
        .catch(err => dispatch({type:NOTLOGINED,payload:err}))

    }
}