import { Constants } from "../constant";
import {combineReducers} from 'redux';

export const registrationreducer =(state = {} , action)=> {
        switch(action.type) {
            case Constants.REGISTER_FAILED: 
            return  {
                register: false ,
                errorMessage: 'Something went wrong'
            }
            case Constants.REGISTER_SUCCESS: 
                return  {
                    user: action.user,
                    register: true
                }
            case Constants.REGISTER_REQUEST :
                return  {
                    ...state,
                    register:true , 
                    user: null
                }
                
            default: 
            return {
                ...state
            }
        }
}

export const loginReducer = (state = {} ,action) => {
    switch(action.type) {
        case Constants.LOGIN_FAILED: 
        return  {
            register: false ,
            isLoggedIn:false,
            errorMessage: 'Something went wrong',
            loginloader: false,
        }
        case Constants.LOGIN_SUCCESS: 
            return  {
                user: {...action.user , token: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhYjZmZTM5My05YWU5LTQ3NTgtYjk2MS04YTAwOGNjYzZkY2EiLCJyb2xlSWQiOiJkYjE2NjhkYy0wYTZhLTQzYjYtOGEwYi03OTVjNDMxODljYzkiLCJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6IkFkbWluIiwieC1oYXN1cmEtYWxsb3dlZC1yb2xlcyI6WyJBZG1pbiIsIlBhY2tlciIsIlBpY2tlciIsInRlc3RpbmciLCJ0ZXN0aW5nIG5ldyByb2xlIiwidGVzdCIsInRlcyIsInR0IiwidHR0IiwidHR0dCIsInR0dHR0IiwidHV0dSIsInRlc3QgcGFja2VyIiwidGVzdCB0ZXMgdGVzdCIsInl1cGkiLCJ0ZXN0IG1vZGUiLCJQaWNrZXJzIiwidXl3dGV1ciIsInV5d3RldXJxIiwid2Vyd2UiLCJ0dXR1dXQiLCJ0ZXN0IDEzIG1hciIsIlVzZXIiLCJ1eXR3ZXl0ciIsIlRlc3QiLCJ1d3lldHJld3RyIiwidHV0dXR1dHV0dSIsInFxIiwicHAiLCJ0ZXMgdGVzIHRlcyIsInNvbWV0aGluZyIsInJ0eSJdfSwiZW1haWxJZCI6InZpc2hhbC5zaGFybWFAemVwdG9ub3cuY29tIiwiYXBwbGljYXRpb25JZCI6IjA0NjhhNDE0LTcwMjMtNDA2Yi04NTU0LTliNDM5NzNhYzM2MCIsImV4cCI6MTY3OTU1NDIwOCwidXNlcklkIjoiYWI2ZmUzOTMtOWFlOS00NzU4LWI5NjEtOGEwMDhjY2M2ZGNhIiwiaWF0IjoxNjc4OTQ5NDA4fQ.cgc7qvFfFciv55LGHkigNpQvpqhY9uzCX8zWsrQK490' },
                register: true,
                isLoggedIn:true,
                loginloader: false,
            }
        case Constants.LOGIN_REQUEST :
            return  {
                ...state,
                register:true , 
                user: null,
                loginloader: true,
            }
        default: 
        return {
            ...state
        }
    }
}


// we have two reducer ? we need to combined both reducer ??

export const rootReducer = combineReducers({
     registrationreducer,
    loginReducer,
})