import { Constants } from "../constant";

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