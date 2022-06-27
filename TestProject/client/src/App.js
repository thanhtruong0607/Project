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
import Team from './components/Team/Team';
import AssignedBy from './components/AssignedBy/AssignedBy';
import ReportTo from './components/ReportTo/ReportTo';
import Tags from './components/Tags/Tags';
import Supporters from './components/Supporters/Supporters';

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
          <Route path='/team' element={<Team />} />
          <Route path='/report' element={<ReportTo />} />
          <Route path='/assign' element={<AssignedBy />} />
          <Route path='/tag' element={<Tags />} />
          <Route path='/support' element={<Supporters />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
