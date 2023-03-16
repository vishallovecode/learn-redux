
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleWare from 'redux-thunk';
import { rootReducer } from './reducer/authReducer';

const reduxLogger = createLogger()
 
const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleWare,
        reduxLogger
    )
)

export default store


