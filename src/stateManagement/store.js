
import { applyMiddleware, createStore } from 'redux'
import  thunkMiddleWare from 'redux-thunk';
import {createLogger} from 'redux-logger'
import { registrationreducer } from './reducer/authReducer';

const reduxLogger = createLogger()

const store = createStore(
    registrationreducer,
    applyMiddleware(
        thunkMiddleWare,
        reduxLogger
    )
)

export default store