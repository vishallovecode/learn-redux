import { Constants } from "../constant";

import  { Link } from 'react-router-dom'

export function _register (register) {
    return (dispatch) => {
        // dispatch({type: Constants.REGISTER_REQUEST , user: register });
        dispatch(request(register));
        // what we need to do here ???
       const data =  new Promise((resolved, reject)=>{
            resolved(register)
        });
        data.then((res)=>{
            dispatch(success(res));
            window.location.pathname = '/login'
        }).catch((error)=>{
            dispatch(failed(error));
        })
    }
    function request (user)   {
        return {type: Constants.REGISTER_REQUEST , user }
    }
    function failed (user)   {
        return {type: Constants.REGISTER_FAILED , user }
    }
    function success (user)   {
        return {type: Constants.REGISTER_SUCCESS , user }
    }
}



// export function _login(loginData){
//     return (dispatch)=> {

//     }
// }
// actions ?

// side effects

export function requestLogin (user)   {
    return {type: Constants.LOGIN_REQUEST , user }
}
export function loginSuccess (user)   {
    return {type: Constants.LOGIN_SUCCESS , user }
}
export function loginFailed (user)   {
    return {type: Constants.LOGIN_FAILED , user }
}



