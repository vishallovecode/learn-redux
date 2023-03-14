import  {Link}  from 'react-router-dom'

const LoginPage  = () => {

    return  (
        <div className="flex flex-col">
            <input type = 'text' placeholder="Please type userName "  className="m-auto mt-10 mt-5 border text-center p-3"/>
            <input  type = 'password' placeholder="Please enter password" className="m-auto mt-10 mt-5 border text-center p-3"/>
            <div className="flex m-auto">
            <button className="bg-blue-700 text-white	 border p-2 mt-10 rounded m-auto w-20" >Login</button>
            <Link className="bg-blue-700 text-white	 border p-2 mt-10 rounded m-auto w-20" to = '/register' >Register</Link>
            </div>
        </div>
    )

}


export default LoginPage;


// login that should be store into the redux store and the local storage