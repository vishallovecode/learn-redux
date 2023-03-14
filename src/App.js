import './App.css';
import LoginPage from './Login/login';
import {Routes , Route , Switch }  from 'react-router-dom'
import RegisterPage from './register/register';

function App() {
  return (
    <div className="App">
      <Routes>
    <Route exact path='/login' element={<LoginPage/>}/>
    <Route exact path='/register' element={<RegisterPage/>}/>
    </Routes>
    </div>
  );
}

export default App;
