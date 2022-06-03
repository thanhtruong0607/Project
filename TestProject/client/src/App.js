import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.scss';
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import LoginForm from './components/Login/LoginForm';
import Project from './screens/Project';

const App = () => {
  return (
    <div className="App">
    <BrowserRouter>              
           <Routes>
              <Route exact path='/' element={<HomeScreen/>}/>
              <Route path='/login' element={<LoginForm/>}/>
              <Route path='/project' element={<Project/>}/>
           </Routes>
    </BrowserRouter> 
    </div>
  );
}

export default App;
