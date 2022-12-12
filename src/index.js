import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter as Router, Route, Routes} from 'react-router-dom'


const routes = (
  <Router>
    <Routes>
      {/* <Route path="/" element={<Home/>}></Route>
      <Route path="/search" element={<Search/>}></Route>
      <Route path="/profile/:username" element={<Profile/>}></Route> */}
    </Routes>
  </Router>
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(routes);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
