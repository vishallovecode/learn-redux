
import { applyMiddleware, createStore } from 'redux'
import  thunkMiddleWare from 'redux-thunk';
import {createLogger} from 'redux-logger'
import { registrationreducer, rootReducer } from './reducer/authReducer';
import { Constants } from './constant';

const reduxLogger = createLogger()
 
const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleWare,
        reduxLogger
    )
)

export default store


