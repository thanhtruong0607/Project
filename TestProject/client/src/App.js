import React from "react";
import logo from "./logo.svg";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import HomeScreen from "./views/HomeScreen";
import LoginForm from "./components/LoginForm";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
