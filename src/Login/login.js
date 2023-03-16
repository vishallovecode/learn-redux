import { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import {useSearchParams , Link}  from 'react-router-dom';
import { requestLogin, loginSuccess , loginFailed } from '../stateManagement/actions/register';

const LoginPage  = (props) => {

    const [searchParams , setSearchParams]= useSearchParams();

    for (const [key, value] of searchParams) {
        console.log(key , value)
        }
const loginHandler = ()=> {
    props.requestLogin();
    const data   =  new Promise((resolved , reject)=> {
        resolved({name: 'admin' , password: '123456'})
    })
    data.then((res)=>{
        props.loginSuccess(res);
    }).catch((error)=> {
        props.loginFailed(error);
    })
    
}
    return  (
        <div className="flex flex-col">
            <input type = 'text' placeholder="Please type userName "  className="m-auto mt-10 mt-5 border text-center p-3"/>
            <input  type = 'password' placeholder="Please enter password" className="m-auto mt-10 mt-5 border text-center p-3"/>
            <div className="flex m-auto">
            <button className="bg-blue-700 text-white	 border p-2 mt-10 rounded m-auto w-20" onClick={loginHandler} >Login</button>
            <Link className="bg-blue-700 text-white	 border p-2 mt-10 rounded m-auto w-20" to = '/register' >Register</Link>
            </div>
        </div>
    )

}


function mapStateToProps(state) {
    const {loginReducer , registrationreducer  }  = state;
    return {
      login:loginReducer ,
      register:registrationreducer
    }
  }
  
  const actionCreators = {
    requestLogin,
    loginSuccess,
    loginFailed
  }


export default connect(mapStateToProps , actionCreators)(LoginPage);


// login that should be store into the redux store and the local storage