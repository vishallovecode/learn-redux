import { Constants } from "../constant";

export function _register (register) {
    return (dispatch) => {
        dispatch(request(register));
        // what we need to do here ???
       const data =  new Promise((resolved, reject)=>{
            resolved(register)
        });
        data.then((user)=>{
            dispatch(success(user));
        }).catch((error)=>{
            dispatch(failed(error));
        })
    }
    function request (user)   {
        return {type: Constants.REGISTER_REQUEST , user }
    }
    function failed (user)   {
        return {type: Constants.REGISTER_REQUEST , user }
    }
    function success (user)   {
        return {type: Constants.REGISTER_REQUEST , user }
    }
}
// actions ?

