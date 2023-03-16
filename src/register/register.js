import { useState } from 'react';
import {connect} from 'react-redux';
import { _register } from '../stateManagement/actions/register';
import { useDispatch } from 'react-redux'
import { Constants } from '../stateManagement/constant';

const RegisterPage = (props)=> {

    const [state , setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        userName: '',
        password: ''
    })




    const handleChange = (name , value) => {
        setState({
            ...state, 
            [name]:value
        })
    }

    const registerHandler = () => {
      
        
        props.register(state);
    }

    return (
        <div className="flex flex-col m-auto w-[30%]">
            <h1>Register </h1>
            <input type = 'text' placeholder="First Name" className="mt-5 border text-center p-3" onChange={(e)=>handleChange('firstName' , e.target.value)}/>
            <input  onChange={(e)=>handleChange('lastName' , e.target.value)} type = 'text' placeholder="Lats Name" className="mt-5 border text-center p-3"/>
            <input onChange={(e)=>handleChange('email' , e.target.value)} type = 'text' placeholder="Email Name" className="mt-5 border text-center p-3"/>
            <input onChange={(e)=>handleChange('userName' , e.target.value)} type = 'text' placeholder="UserName" className="mt-5 border text-center p-3"/>
            <input  onChange={(e)=>handleChange('password' , e.target.value)} type = 'pass' placeholder="Password" className="mt-5 border text-center p-3"/>
            <button className="p-2 mt-2 m-auto w-[30%] border bg-blue-700 text-white" onClick={registerHandler}>Submit</button>
        </div>
    )
}

function mapStateToProps(state) {
  const {register} = state;
  return {
    register
  }
}

const actionCreators = {
    register:  _register
}

export default connect(mapStateToProps , actionCreators)(RegisterPage);