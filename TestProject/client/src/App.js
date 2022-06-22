import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.scss';
import { BrowserRouter, Routes, Route, NavLink, useParams } from 'react-router-dom'
import Project from './screens/Project/Project';
import LoginForm from './components/Login/LoginForm';
import Task from './screens/Task/Task';
import NextStage from './components/NextStage/NextStage';
import CheckList from './components/CheckList/CheckList';
import TaskDetail from './components/TaskDetail/TaskDetail';
import StatusBar from './components/StatusBar/StatusBar';
import 'react-datepicker/dist/react-datepicker.css'

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/project' element={<Project />} />
          <Route exact path='/' element={<LoginForm />} />
          <Route path='/task/:id' element={<Task />} />
          <Route path='/next' element={<NextStage />} />
          <Route path='/check' element={<CheckList />} />
          <Route path='/detail/:id' element={<TaskDetail />} />
          <Route path='/nav' element={<StatusBar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
