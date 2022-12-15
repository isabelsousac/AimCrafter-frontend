import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'flowbite';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/HomePage/Home';
import CraftShow from './components/Crafts/CraftShow'
import UploadCraft from './components/Crafts/UploadCraft';
import  Signin from './components/Users/Signin'
import  Signup from './components/Users/Signup'
import  UserPage from './components/Users/UserPage'
import NavApp from './components/Layouts/NavApp';
import Footer from './components/Layouts/Footer';
// import UserAuthProvider from './components/Users/UserAuthContext';

 
const routes = (
    <Router>
      {/* <UserAuthProvider value={localStorage.token}> */}
        <NavApp/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/craft/:craftId" element={<CraftShow/>}></Route>
          <Route path="/newcraft" element={<UploadCraft/>}></Route>
          <Route path="/signin" element={<Signin/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/user/:id" element={<UserPage/>}></Route>
          {/* /* it will be changed, it's just a template */}
        </Routes>
        <div><Footer/></div>
      {/* </UserAuthProvider> */}
    </Router>
) 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(routes);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
