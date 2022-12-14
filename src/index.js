import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import CraftShow from './components/Crafts/CraftShow'
import UploadCraft from './components/Crafts/UploadCraft';
import  Signin from './components/Users/Signin'
import  Signup from './components/Users/Signup'
import  UserPage from './components/Users/UserPage'
// import App from './App';
 


const routes = (
  <Router>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/craft/:id" element={<CraftShow/>}></Route>
      <Route path="/newcraft" element={<UploadCraft/>}></Route>
      <Route path="/signin" element={<Signin/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/user/:id" element={<UserPage/>}></Route>
      {/* /* it will be changed, it's just a template */}
    </Routes>
  </Router>
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(routes);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
